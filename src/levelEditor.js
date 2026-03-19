/**
 * Shared visual level editor for marIO games.
 *
 * Usage: call initLevelEditor(defaultLevelData) on window load.
 * Keeps window.LEVEL_DATA in sync with the editor state at all times.
 *
 * Level coordinate system (JSON):
 *   col  — tile column (x = col * 16)
 *   row  — tile row    (y = row * 16), row 0 = top of canvas
 *   Ground surface is at GROUND_ROW = 24  (≈ engine GROUND_Y 388px)
 *   Playable rows: 0–23
 */

const TILE = 16;
const GROUND_ROW = 24;   // first ground-tile row
const EDITOR_ROWS = 26;   // total rows rendered  (rows 24-25 are ground)

export function initLevelEditor(defaultLevelData) {
  window.LEVEL_DATA = JSON.parse(JSON.stringify(defaultLevelData));

  const canvas = document.getElementById('levelEditorCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let screens = window.LEVEL_DATA.screens || 4;
  let selectedTool = 'brick';
  let isMouseDown = false;
  let isErasing = false;
  // Whether the current drag gesture is adding (true) or removing (false)
  let dragAdding = true;

  // ── Internal mutable state ────────────────────────────────────────────────
  const gapCols = new Set();   // columns that are ground gaps
  const blockMap = new Map();   // "col,row" -> 'brick' | 'question'
  const pipeMap = new Map();   // col (left edge) -> heightTiles
  const coinSet = new Set();   // "col,row"
  const enemyMap = new Map();   // col -> 'goomba' | 'koopa'

  // ── State ↔ JSON conversion ───────────────────────────────────────────────

  function levelToState(level) {
    gapCols.clear(); blockMap.clear(); pipeMap.clear();
    coinSet.clear(); enemyMap.clear();
    for (const g of (level.groundGaps || []))
      for (let c = g.col; c < g.col + g.width; c++) gapCols.add(c);
    for (const b of (level.blocks || [])) blockMap.set(`${b.col},${b.row}`, b.type);
    for (const p of (level.pipes || [])) pipeMap.set(p.col, p.height);
    for (const c of (level.coins || [])) coinSet.add(`${c.col},${c.row}`);
    for (const e of (level.enemies || [])) enemyMap.set(e.col, e.type);
  }

  function stateToLevel() {
    // Compress consecutive gap columns into {col, width} spans
    const sorted = [...gapCols].sort((a, b) => a - b);
    const gaps = [];
    for (let i = 0; i < sorted.length;) {
      const start = sorted[i];
      let end = start;
      while (i + 1 < sorted.length && sorted[i + 1] === end + 1) { i++; end = sorted[i]; }
      gaps.push({ col: start, width: end - start + 1 });
      i++;
    }
    return {
      screens,
      groundGaps: gaps,
      blocks: [...blockMap.entries()].map(([k, type]) => {
        const [col, row] = k.split(',').map(Number); return { col, row, type };
      }),
      pipes: [...pipeMap.entries()].map(([col, height]) => ({ col, height })),
      coins: [...coinSet].map(k => {
        const [col, row] = k.split(',').map(Number); return { col, row };
      }),
      enemies: [...enemyMap.entries()].map(([col, type]) => ({ col, type })),
    };
  }

  function sync() { window.LEVEL_DATA = stateToLevel(); }

  // ── Canvas helpers ────────────────────────────────────────────────────────

  function totalCols() { return Math.round(screens * 360 / TILE); }

  function resizeCanvas() {
    canvas.width = totalCols() * TILE;
    canvas.height = EDITOR_ROWS * TILE;
  }

  // ── Rendering ─────────────────────────────────────────────────────────────

  function render() {
    const cols = totalCols();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Sky
    ctx.fillStyle = '#070714';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid lines (very subtle)
    ctx.strokeStyle = '#12123a';
    ctx.lineWidth = 0.5;
    for (let r = 0; r <= EDITOR_ROWS; r++) {
      ctx.beginPath(); ctx.moveTo(0, r * TILE); ctx.lineTo(canvas.width, r * TILE); ctx.stroke();
    }
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath(); ctx.moveTo(c * TILE, 0); ctx.lineTo(c * TILE, canvas.height); ctx.stroke();
    }

    // ── Ground rows ──
    for (let c = 0; c < cols; c++) {
      if (gapCols.has(c)) {
        // Void / gap
        ctx.fillStyle = '#030308';
        ctx.fillRect(c * TILE, GROUND_ROW * TILE, TILE, TILE * 2);
        // Subtle checker so user can tell it's a void
        if (c % 2 === 0) {
          ctx.fillStyle = '#09090f';
          ctx.fillRect(c * TILE, GROUND_ROW * TILE, TILE, TILE);
        }
      } else {
        ctx.fillStyle = '#00a800';
        ctx.fillRect(c * TILE, GROUND_ROW * TILE, TILE, 4);
        ctx.fillStyle = '#c84c0c';
        ctx.fillRect(c * TILE, GROUND_ROW * TILE + 4, TILE, TILE - 4);
        ctx.fillStyle = '#a03000';
        ctx.fillRect(c * TILE, (GROUND_ROW + 1) * TILE, TILE, TILE);
      }
    }

    // ── Pipes (2 tiles wide) ──
    for (const [col, height] of pipeMap) {
      const px = col * TILE;
      const py = (GROUND_ROW - height) * TILE;
      const ph = height * TILE;
      // Body
      ctx.fillStyle = '#007000';
      ctx.fillRect(px + 2, py + TILE, TILE * 2 - 4, ph - TILE);
      ctx.fillStyle = '#009a00';
      ctx.fillRect(px + 2, py + TILE, 3, ph - TILE);
      ctx.fillStyle = '#005000';
      ctx.fillRect(px + TILE * 2 - 5, py + TILE, 3, ph - TILE);
      // Lip
      ctx.fillStyle = '#008800';
      ctx.fillRect(px - 2, py, TILE * 2 + 4, TILE);
      ctx.fillStyle = '#00bb00';
      ctx.fillRect(px - 2, py, TILE * 2 + 4, 3);
      ctx.fillStyle = '#005800';
      ctx.fillRect(px - 2, py + TILE - 3, TILE * 2 + 4, 3);
    }

    // ── Blocks ──
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const [key, type] of blockMap) {
      const [col, row] = key.split(',').map(Number);
      const bx = col * TILE, by = row * TILE;
      if (type === 'question') {
        ctx.fillStyle = '#e6a817';
        ctx.fillRect(bx, by, TILE, TILE);
        ctx.fillStyle = '#ffcc44';
        ctx.fillRect(bx + 1, by + 1, TILE - 2, 2);
        ctx.fillRect(bx + 1, by + 1, 2, TILE - 2);
        ctx.fillStyle = '#cc8800';
        ctx.fillRect(bx + TILE - 2, by + 1, 2, TILE - 1);
        ctx.fillRect(bx + 1, by + TILE - 2, TILE - 1, 2);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 9px monospace';
        ctx.fillText('?', bx + TILE / 2, by + TILE / 2 + 1);
      } else {
        ctx.fillStyle = '#c84c0c';
        ctx.fillRect(bx, by, TILE, TILE);
        ctx.fillStyle = '#e06030';
        ctx.fillRect(bx + 1, by + 1, TILE - 2, 2);
        ctx.fillRect(bx + 1, by + 1, 2, TILE - 2);
        ctx.fillStyle = '#8b2200';
        ctx.fillRect(bx + TILE / 2 - 1, by, 2, TILE);
        ctx.fillRect(bx, by + TILE / 2 - 1, TILE, 2);
      }
    }

    // ── Coins ──
    for (const key of coinSet) {
      const [col, row] = key.split(',').map(Number);
      const cx = col * TILE + TILE / 2;
      const cy = row * TILE + TILE / 2;
      ctx.fillStyle = '#ffdd00';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 3.5, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#bb8800';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // ── Enemies ──
    for (const [col, type] of enemyMap) {
      const ex = col * TILE;
      const ey = (GROUND_ROW - 1) * TILE + 1;
      if (type === 'goomba') {
        ctx.fillStyle = '#c85000';
        ctx.fillRect(ex + 1, ey, TILE - 2, TILE - 2);
        ctx.fillStyle = '#e07040';
        ctx.fillRect(ex + 1, ey, TILE - 2, 4);
        ctx.fillStyle = '#fff';
        ctx.fillRect(ex + 2, ey + 3, 3, 3);
        ctx.fillRect(ex + TILE - 5, ey + 3, 3, 3);
        ctx.fillStyle = '#000';
        ctx.fillRect(ex + 3, ey + 4, 2, 2);
        ctx.fillRect(ex + TILE - 5, ey + 4, 2, 2);
      } else {
        // Koopa
        ctx.fillStyle = '#00a050';
        ctx.fillRect(ex + 2, ey + 5, TILE - 4, TILE - 7);
        ctx.fillStyle = '#c85000';
        ctx.fillRect(ex + 3, ey, TILE - 6, 7);
        ctx.fillStyle = '#fff';
        ctx.fillRect(ex + 5, ey + 1, 3, 3);
        ctx.fillStyle = '#000';
        ctx.fillRect(ex + 6, ey + 2, 1, 1);
      }
    }

    // ── Screen dividers ──
    const screenCols = Math.round(360 / TILE);
    ctx.strokeStyle = 'rgba(74,74,240,0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    for (let s = 1; s < screens; s++) {
      const sx = s * screenCols * TILE;
      ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, canvas.height); ctx.stroke();
    }
    ctx.setLineDash([]);

    // ── Flagpole indicator ──
    const flagTileX = totalCols() - 6;
    const flagPx = flagTileX * TILE + 6;
    ctx.fillStyle = 'rgba(150,150,150,0.35)';
    ctx.fillRect(flagPx, 4, 4, (GROUND_ROW - 4) * TILE);
    ctx.fillStyle = 'rgba(255,221,0,0.6)';
    ctx.fillRect(flagPx - 3, 4, 10, 10);

    // ── "Protected" overlay for flagpole zone ──
    ctx.fillStyle = 'rgba(255,255,0,0.04)';
    ctx.fillRect(flagTileX * TILE, 0, (totalCols() - flagTileX) * TILE, canvas.height);
  }

  // ── Interaction helpers ───────────────────────────────────────────────────

  function colRowFromEvent(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      col: Math.floor((e.clientX - rect.left) * scaleX / TILE),
      row: Math.floor((e.clientY - rect.top) * scaleY / TILE),
    };
  }

  function applyTool(col, row, tool, erase) {
    const safeCols = totalCols() - 6;       // protect flagpole zone
    if (col < 0 || col >= totalCols() || row < 0 || row >= EDITOR_ROWS) return false;
    if (col >= safeCols) return false;

    if (erase || tool === 'eraser') {
      gapCols.delete(col);
      blockMap.delete(`${col},${row}`);
      pipeMap.delete(col);
      pipeMap.delete(col - 1);              // pipe is 2 tiles wide
      coinSet.delete(`${col},${row}`);
      enemyMap.delete(col);
      return true;
    }

    switch (tool) {
      case 'gap':
        if (dragAdding) gapCols.add(col); else gapCols.delete(col);
        break;
      case 'brick':
        if (row < GROUND_ROW) {
          if (dragAdding) blockMap.set(`${col},${row}`, 'brick');
          else blockMap.delete(`${col},${row}`);
        }
        break;
      case 'question':
        if (row < GROUND_ROW) {
          if (dragAdding) blockMap.set(`${col},${row}`, 'question');
          else blockMap.delete(`${col},${row}`);
        }
        break;
      case 'pipe':
        if (row < GROUND_ROW && col + 1 < safeCols) {
          if (dragAdding) pipeMap.set(col, Math.max(1, GROUND_ROW - row));
          else pipeMap.delete(col);
        }
        break;
      case 'coin':
        if (row < GROUND_ROW) {
          if (dragAdding) coinSet.add(`${col},${row}`);
          else coinSet.delete(`${col},${row}`);
        }
        break;
      case 'goomba':
        if (dragAdding) enemyMap.set(col, 'goomba');
        else enemyMap.delete(col);
        break;
      case 'koopa':
        if (dragAdding) enemyMap.set(col, 'koopa');
        else enemyMap.delete(col);
        break;
    }
    return true;
  }

  // Determine whether the initial click starts an "add" or "remove" gesture
  function determineDragAdding(col, row, tool) {
    switch (tool) {
      case 'gap': return !gapCols.has(col);
      case 'brick': return blockMap.get(`${col},${row}`) !== 'brick';
      case 'question': return blockMap.get(`${col},${row}`) !== 'question';
      case 'pipe': return !pipeMap.has(col) && !pipeMap.has(col - 1);
      case 'coin': return !coinSet.has(`${col},${row}`);
      case 'goomba': return enemyMap.get(col) !== 'goomba';
      case 'koopa': return enemyMap.get(col) !== 'koopa';
      default: return true;
    }
  }

  // ── Wire up controls ──────────────────────────────────────────────────────

  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTool = btn.dataset.tool;
    });
  });

  const screensSlider = document.getElementById('levelScreens');
  const screensValEl = document.getElementById('screensVal');
  screensSlider.value = screens;
  screensValEl.textContent = screens;

  screensSlider.addEventListener('input', () => {
    screens = parseInt(screensSlider.value, 10);
    screensValEl.textContent = screens;
    resizeCanvas();
    render();
    sync();
  });

  document.getElementById('resetLevel').addEventListener('click', () => {
    if (!confirm('Level resetten naar standaard?')) return;
    screens = defaultLevelData.screens || 4;
    screensSlider.value = screens;
    screensValEl.textContent = screens;
    levelToState(defaultLevelData);
    resizeCanvas();
    render();
    sync();
  });

  // Mouse events
  canvas.addEventListener('mousedown', e => {
    isMouseDown = true;
    isErasing = e.button === 2;
    const { col, row } = colRowFromEvent(e);
    dragAdding = isErasing ? false : determineDragAdding(col, row, selectedTool);
    console.log({
      col, row, tool: selectedTool, isErasing, dragAdding,
    })
    if (applyTool(col, row, selectedTool, isErasing)) { render(); sync(); }
  });

  canvas.addEventListener('mousemove', e => {
    if (!isMouseDown) return;
    const { col, row } = colRowFromEvent(e);
    if (applyTool(col, row, selectedTool, isErasing)) { render(); sync(); }
  });

  canvas.addEventListener('mouseup', () => { isMouseDown = false; });
  canvas.addEventListener('mouseleave', () => { isMouseDown = false; });
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  // Resize + redraw whenever the level editor tab is made visible
  document.getElementById('tabLevel').addEventListener('click', () => {
    resizeCanvas();
    render();
  });

  // ── Init ──────────────────────────────────────────────────────────────────
  levelToState(window.LEVEL_DATA);
  resizeCanvas();
}
