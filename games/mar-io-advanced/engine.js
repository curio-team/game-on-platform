import { buildWorldFromJSON as _buildWorldFromJSON } from '/src/mario/levelBuilder.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const TILE = 16;
const GROUND_H = 32;
const GROUND_Y = canvas.height - GROUND_H;

export const game = {
  running: false, state: 'idle',
  score: 0, best: 0, lives: 3, coins: 0, frame: 0,
  mario: null, camera: { x: 0 }, world: null,
  keys: {}, particles: [],
  _lastHurt: false, _lastStomp: false,
};

// ── Input ─────────────────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => { game.keys[e.code] = true; });
document.addEventListener('keyup', (e) => { game.keys[e.code] = false; });
window.addEventListener('blur', () => { game.keys = {}; });
// Gamepad key state — written each frame by platform.js via getGpKeys().
// Kept separate so keyboard and gamepad can be held simultaneously.
export const gpKeys = {};
// ── Helpers ───────────────────────────────────────────────────────────────────

function seededRng(seed) {
  let s = Math.abs(seed) || 1;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

export function shadeColor(hex, amt) {
  try {
    let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    r = Math.max(0, Math.min(255, r + amt));
    g = Math.max(0, Math.min(255, g + amt));
    b = Math.max(0, Math.min(255, b + amt));
    return `rgb(${r},${g},${b})`;
  } catch { return hex; }
}

function spawnParticles(x, y, color, count = 6) {
  for (let i = 0; i < count; i++) {
    const a = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    game.particles.push({
      x, y, vx: Math.cos(a) * (2 + Math.random() * 3),
      vy: Math.sin(a) * (2 + Math.random() * 3) - 2,
      life: 1, color, size: 3 + Math.random() * 3,
    });
  }
}

function updateUI() {
  document.getElementById('scoreDisplay').textContent = game.score;
  document.getElementById('bestDisplay').textContent = game.best;
  document.getElementById('livesDisplay').textContent = game.lives;
  document.getElementById('coinsDisplay').textContent = game.coins;
}

function aabb(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function isGroundAt(x) {
  if (!game.world || x < 0 || x > game.world.width) return false;
  for (const g of game.world.groundGaps) { if (x >= g.x1 && x <= g.x2) return false; }
  return true;
}

function isGroundAtStatic(x, gaps) {
  for (const g of gaps) { if (x >= g.x1 && x <= g.x2) return false; }
  return true;
}

function fireHooks(name) {
  const hooks = window.__gameHooks;
  if (!hooks || !hooks[name]) return;
  for (const fn of hooks[name]) {
    try { fn(); } catch (e) { console.warn(`${name} error:`, e); }
    if (!game.running) return;
  }
}

// ── Level from JSON ───────────────────────────────────────────────────────────

function buildWorldFromJSON(levelData) {
  return _buildWorldFromJSON(levelData, TILE, GROUND_Y, canvas.width);
}

// ── Level generation ──────────────────────────────────────────────────────────

function generateLevel(cfg) {
  const levelW = Math.max(2, cfg.levelLength || 4) * canvas.width;
  const gapCount = Math.max(0, Math.min(10, cfg.gapCount || 2));
  const pipeCount = Math.max(0, Math.min(15, cfg.pipeCount || 3));
  const platCount = Math.max(0, Math.min(15, cfg.platformCount || 4));
  const coinCount = Math.max(0, Math.min(50, cfg.coinCount || 15));
  const goombaCount = Math.max(0, Math.min(20, cfg.goombaCount || 5));
  const koopaCount = Math.max(0, Math.min(10, cfg.koopaCount || 2));
  const enemySpeed = Math.max(0.2, Math.min(5, cfg.enemySpeed || 1));

  const seed = gapCount * 7 + pipeCount * 13 + platCount * 23 +
    coinCount * 3 + goombaCount * 11 + koopaCount * 17 + (cfg.levelLength || 4) * 31;
  const rng = seededRng(seed);

  const world = {
    width: levelW,
    groundGaps: [], blocks: [], pipes: [], enemies: [], coins: [],
    flagpole: { x: levelW - 80, y: GROUND_Y - 10 * TILE, height: 10 * TILE },
  };

  const safeStart = canvas.width * 0.8;
  const safeEnd = levelW - canvas.width;

  for (let i = 0; i < gapCount; i++) {
    const region = (safeEnd - safeStart) / (gapCount + 1);
    const cx = safeStart + region * (i + 1);
    const gapW = TILE * (2 + Math.floor(rng() * 3));
    world.groundGaps.push({ x1: cx - gapW / 2, x2: cx + gapW / 2 });
  }

  for (let i = 0; i < pipeCount; i++) {
    const region = (safeEnd - safeStart) / (pipeCount + 1);
    const px = safeStart + region * (i + 0.3 + rng() * 0.4);
    const ph = TILE * (2 + Math.floor(rng() * 3));
    const snapped = Math.round(px / TILE) * TILE;
    world.pipes.push({ x: snapped, y: GROUND_Y - ph, w: TILE * 2, h: ph });
  }

  for (let i = 0; i < platCount; i++) {
    const region = (levelW - canvas.width * 0.5) / (platCount + 1);
    const platX = canvas.width * 0.3 + region * (i + 0.2 + rng() * 0.6);
    const platY = GROUND_Y - TILE * (4 + Math.floor(rng() * 4));
    const platW = 3 + Math.floor(rng() * 3);
    for (let b = 0; b < platW; b++) {
      const bx = Math.round(platX / TILE) * TILE + b * TILE;
      const type = (b === Math.floor(platW / 2) || rng() < 0.25) ? 'question' : 'brick';
      world.blocks.push({ x: bx, y: platY, w: TILE, h: TILE, type, hit: false });
    }
  }

  for (let i = 0; i < coinCount; i++) {
    const cx = canvas.width * 0.5 + rng() * (levelW - canvas.width * 1.5);
    const cy = GROUND_Y - TILE * (2 + Math.floor(rng() * 6));
    world.coins.push({ x: Math.round(cx / TILE) * TILE + 4, y: cy, collected: false });
  }

  for (let i = 0; i < goombaCount; i++) {
    const region = (safeEnd - safeStart) / (goombaCount + 1);
    const ex = safeStart + region * (i + 0.3 + rng() * 0.4);
    if (!isGroundAtStatic(ex, world.groundGaps)) continue;
    world.enemies.push({
      x: ex, y: GROUND_Y - TILE, w: TILE, h: TILE,
      type: 'goomba', vx: -enemySpeed * (rng() > 0.5 ? 1 : -1),
      alive: true, frame: 0, squishTimer: 0,
    });
  }

  for (let i = 0; i < koopaCount; i++) {
    const region = (safeEnd - safeStart) / (koopaCount + 1);
    const ex = safeStart + region * (i + 0.3 + rng() * 0.4);
    if (!isGroundAtStatic(ex, world.groundGaps)) continue;
    world.enemies.push({
      x: ex, y: GROUND_Y - Math.round(TILE * 1.5), w: TILE, h: Math.round(TILE * 1.5),
      type: 'koopa', vx: -enemySpeed * (rng() > 0.5 ? 1 : -1),
      alive: true, frame: 0, squishTimer: 0,
    });
  }

  return world;
}

// ── Drawing ───────────────────────────────────────────────────────────────────

function drawSky() {
  const cfg = window.GAME_CONFIG;
  ctx.fillStyle = cfg.skyColor || '#5c94fc';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  const cloudOff = game.camera.x * 0.2;
  for (let i = -1; i < 7; i++) {
    const bx = i * 220 - (cloudOff % 220);
    const by = 35 + (i % 3) * 25;
    ctx.beginPath();
    ctx.arc(bx, by, 18, 0, Math.PI * 2);
    ctx.arc(bx + 22, by - 6, 22, 0, Math.PI * 2);
    ctx.arc(bx + 46, by, 18, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = shadeColor(cfg.skyColor || '#5c94fc', -25);
  const hillOff = game.camera.x * 0.3;
  for (let i = -1; i < 6; i++) {
    const hx = i * 300 - (hillOff % 300);
    ctx.beginPath();
    ctx.moveTo(hx - 70, GROUND_Y);
    ctx.quadraticCurveTo(hx, GROUND_Y - 55 - (i % 2) * 25, hx + 70, GROUND_Y);
    ctx.fill();
  }
}

function drawGround() {
  const cfg = window.GAME_CONFIG;
  const camX = game.camera.x;
  const start = Math.floor(camX / TILE);
  const end = start + Math.ceil(canvas.width / TILE) + 1;
  for (let tx = start; tx <= end; tx++) {
    const wx = tx * TILE, sx = wx - camX;
    if (!isGroundAt(wx + TILE / 2)) continue;
    ctx.fillStyle = '#00a800';
    ctx.fillRect(sx, GROUND_Y, TILE, 4);
    ctx.fillStyle = cfg.groundColor || '#c84c0c';
    ctx.fillRect(sx, GROUND_Y + 4, TILE, GROUND_H - 4);
    ctx.fillStyle = shadeColor(cfg.groundColor || '#c84c0c', -25);
    ctx.fillRect(sx, GROUND_Y + TILE, TILE, 2);
  }
}

function drawBlock(block) {
  const sx = block.x - game.camera.x;
  if (sx < -TILE || sx > canvas.width + TILE) return;
  const cfg = window.GAME_CONFIG;
  if (block.type === 'question' && !block.hit) {
    ctx.fillStyle = cfg.blockColor || '#e6a817';
    ctx.fillRect(sx, block.y, TILE, TILE);
    ctx.fillStyle = shadeColor(cfg.blockColor || '#e6a817', 40);
    ctx.fillRect(sx + 1, block.y + 1, TILE - 2, 2);
    ctx.fillRect(sx + 1, block.y + 1, 2, TILE - 2);
    ctx.fillStyle = shadeColor(cfg.blockColor || '#e6a817', -40);
    ctx.fillRect(sx + TILE - 2, block.y + 1, 2, TILE - 1);
    ctx.fillRect(sx + 1, block.y + TILE - 2, TILE - 1, 2);
    ctx.fillStyle = '#fff';
    ctx.font = '10px "Press Start 2P"';
    ctx.fillText('?', sx + 4, block.y + 12);
  } else if (block.type === 'question') {
    ctx.fillStyle = '#886644';
    ctx.fillRect(sx, block.y, TILE, TILE);
    ctx.fillStyle = '#664422';
    ctx.fillRect(sx + TILE - 2, block.y + 1, 2, TILE - 1);
    ctx.fillRect(sx + 1, block.y + TILE - 2, TILE - 1, 2);
  } else {
    ctx.fillStyle = '#c84c0c';
    ctx.fillRect(sx, block.y, TILE, TILE);
    ctx.fillStyle = '#e09060';
    ctx.fillRect(sx + 1, block.y + 1, TILE - 2, 2);
    ctx.fillRect(sx + 1, block.y + 1, 2, TILE - 2);
    ctx.fillStyle = '#a03000';
    ctx.fillRect(sx + TILE / 2 - 1, block.y, 2, TILE);
    ctx.fillRect(sx, block.y + TILE / 2 - 1, TILE, 2);
  }
}

function drawPipeObj(pipe) {
  const sx = pipe.x - game.camera.x;
  if (sx < -pipe.w - 8 || sx > canvas.width + 8) return;
  const pc = window.GAME_CONFIG.pipeColor || '#00a800';
  ctx.fillStyle = pc;
  ctx.fillRect(sx + 2, pipe.y + TILE, pipe.w - 4, pipe.h - TILE);
  ctx.fillStyle = shadeColor(pc, 30);
  ctx.fillRect(sx + 2, pipe.y + TILE, 4, pipe.h - TILE);
  ctx.fillStyle = shadeColor(pc, -40);
  ctx.fillRect(sx + pipe.w - 6, pipe.y + TILE, 4, pipe.h - TILE);
  ctx.fillStyle = pc;
  ctx.fillRect(sx - 2, pipe.y, pipe.w + 4, TILE);
  ctx.fillStyle = shadeColor(pc, 30);
  ctx.fillRect(sx - 2, pipe.y, 4, TILE);
  ctx.fillRect(sx - 2, pipe.y, pipe.w + 4, 3);
  ctx.fillStyle = shadeColor(pc, -40);
  ctx.fillRect(sx + pipe.w, pipe.y, 4, TILE);
  ctx.fillRect(sx - 2, pipe.y + TILE - 3, pipe.w + 4, 3);
}

function drawCoin(coin) {
  const sx = coin.x - game.camera.x;
  if (sx < -TILE || sx > canvas.width + TILE) return;
  const shimmer = Math.sin(game.frame * 0.1 + coin.x * 0.01) * 0.3 + 0.7;
  const w = 8 * Math.abs(Math.sin(game.frame * 0.05 + coin.x * 0.02));
  ctx.fillStyle = `rgba(255,221,0,${shimmer})`;
  ctx.fillRect(sx + 4 - w / 2, coin.y, Math.max(2, w), 12);
  ctx.fillStyle = 'rgba(255,255,200,0.8)';
  ctx.fillRect(sx + 4 - w / 4, coin.y + 2, Math.max(1, w / 2), 8);
}

function drawEnemy(enemy) {
  const sx = enemy.x - game.camera.x;
  if (sx < -TILE * 2 || sx > canvas.width + TILE * 2) return;
  const cfg = window.GAME_CONFIG;
  if (enemy.type === 'goomba') {
    if (!enemy.alive) {
      if (enemy.squishTimer > 0) {
        ctx.fillStyle = cfg.enemyColor || '#c84c0c';
        ctx.fillRect(sx, enemy.y + enemy.h - 4, enemy.w, 4);
      }
      return;
    }
    ctx.fillStyle = cfg.enemyColor || '#c84c0c';
    ctx.fillRect(sx, enemy.y, enemy.w, enemy.h);
    ctx.fillStyle = shadeColor(cfg.enemyColor || '#c84c0c', 30);
    ctx.fillRect(sx, enemy.y, enemy.w, enemy.h / 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(sx + 2, enemy.y + 3, 4, 4);
    ctx.fillRect(sx + enemy.w - 6, enemy.y + 3, 4, 4);
    ctx.fillStyle = '#000';
    const eOff = enemy.vx > 0 ? 2 : 0;
    ctx.fillRect(sx + 2 + eOff, enemy.y + 5, 2, 2);
    ctx.fillRect(sx + enemy.w - 6 + eOff, enemy.y + 5, 2, 2);
    ctx.fillStyle = shadeColor(cfg.enemyColor || '#c84c0c', -50);
    const step = Math.floor(enemy.frame / 10) % 2;
    ctx.fillRect(sx + 1 + step * 2, enemy.y + enemy.h - 4, 5, 4);
    ctx.fillRect(sx + enemy.w - 6 - step * 2, enemy.y + enemy.h - 4, 5, 4);
  } else if (enemy.type === 'koopa') {
    if (!enemy.alive) return;
    ctx.fillStyle = '#00a800';
    ctx.fillRect(sx + 2, enemy.y + 6, enemy.w - 4, enemy.h - 10);
    ctx.fillStyle = '#00c800';
    ctx.fillRect(sx + 3, enemy.y + 7, enemy.w - 6, 3);
    ctx.fillStyle = cfg.enemyColor || '#c84c0c';
    ctx.fillRect(sx + 3, enemy.y, 10, 8);
    ctx.fillStyle = '#fff';
    ctx.fillRect(sx + (enemy.vx > 0 ? 9 : 3), enemy.y + 2, 4, 4);
    ctx.fillStyle = '#000';
    ctx.fillRect(sx + (enemy.vx > 0 ? 10 : 4), enemy.y + 3, 2, 2);
    ctx.fillStyle = cfg.enemyColor || '#c84c0c';
    const step = Math.floor(enemy.frame / 10) % 2;
    ctx.fillRect(sx + 2 + step, enemy.y + enemy.h - 4, 5, 4);
    ctx.fillRect(sx + enemy.w - 7 - step, enemy.y + enemy.h - 4, 5, 4);
  }
}

function drawMario() {
  const m = game.mario;
  if (!m) return;
  const sx = m.x - game.camera.x;
  const c = window.GAME_CONFIG.marioColor || '#e60000';
  const sc = m.scale || 1;
  if (m.invincible > 0 && Math.floor(m.invincible / 3) % 2 === 0) return;
  ctx.save();
  ctx.translate(sx + m.w / 2, m.y + m.h / 2);
  ctx.scale(m.facing === 'left' ? -sc : sc, sc);
  ctx.translate(-7, -12);
  ctx.fillStyle = c;
  ctx.fillRect(3, 0, 9, 3);
  ctx.fillRect(1, 3, 13, 3);
  ctx.fillStyle = '#ffb080';
  ctx.fillRect(1, 3, 3, 9);
  ctx.fillRect(4, 3, 8, 3);
  ctx.fillRect(2, 6, 10, 6);
  ctx.fillStyle = '#000';
  ctx.fillRect(3, 5, 2, 2);
  ctx.fillStyle = c;
  ctx.fillRect(1, 12, 12, 3);
  ctx.fillStyle = '#0000cc';
  ctx.fillRect(1, 15, 12, 5);
  ctx.fillStyle = '#0000aa';
  ctx.fillRect(4, 15, 2, 5);
  ctx.fillRect(8, 15, 2, 5);
  ctx.fillStyle = '#8b4513';
  if (m.grounded) {
    const s = Math.floor(m.frame / 6) % 2;
    ctx.fillRect(0 + s, 20, 5, 4);
    ctx.fillRect(9 - s, 20, 5, 4);
  } else {
    ctx.fillRect(0, 20, 5, 4);
    ctx.fillRect(9, 20, 5, 4);
  }
  ctx.restore();
}

function drawFlagpole() {
  if (!game.world) return;
  const fp = game.world.flagpole;
  const sx = fp.x - game.camera.x;
  if (sx < -40 || sx > canvas.width + 40) return;
  ctx.fillStyle = '#888';
  ctx.fillRect(sx + 6, fp.y, 4, fp.height);
  ctx.fillStyle = '#ffdd00';
  ctx.fillRect(sx + 3, fp.y - 6, 10, 10);
  ctx.fillStyle = '#00a800';
  const fOff = Math.sin(game.frame * 0.05) * 3;
  ctx.beginPath();
  ctx.moveTo(sx + 10, fp.y);
  ctx.lineTo(sx + 30 + fOff, fp.y + 10);
  ctx.lineTo(sx + 10, fp.y + 20);
  ctx.fill();
}

function drawHUD() {
  ctx.font = '8px "Press Start 2P"';
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(4, 4, 200, 20);
  ctx.fillStyle = '#ffdd00';
  ctx.fillText(`SCORE ${game.score}`, 10, 16);
  ctx.fillText(`x${game.coins}`, 130, 16);
  for (let i = 0; i < game.lives; i++) {
    ctx.fillStyle = window.GAME_CONFIG.marioColor || '#e60000';
    ctx.fillRect(canvas.width - 14 - i * 16, 8, 10, 12);
  }
}

function drawGameOverOverlay() {
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '16px "Press Start 2P"';
  ctx.fillStyle = '#ff2244';
  ctx.textAlign = 'center';
  ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 30);
  ctx.font = '8px "Press Start 2P"';
  ctx.fillStyle = '#ffdd00';
  ctx.fillText(`SCORE: ${game.score}`, canvas.width / 2, canvas.height / 2 + 10);
  ctx.fillText(`BESTE: ${game.best}`, canvas.width / 2, canvas.height / 2 + 30);
  ctx.fillStyle = '#39ff14';
  ctx.fillText('KLIK OM OPNIEUW TE PROBEREN', canvas.width / 2, canvas.height / 2 + 60);
  ctx.textAlign = 'left';
}

function drawWinOverlay() {
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '14px "Press Start 2P"';
  ctx.fillStyle = '#39ff14';
  ctx.textAlign = 'center';
  ctx.fillText('LEVEL GEHAALD!', canvas.width / 2, canvas.height / 2 - 30);
  ctx.font = '8px "Press Start 2P"';
  ctx.fillStyle = '#ffdd00';
  ctx.fillText(`SCORE: ${game.score}`, canvas.width / 2, canvas.height / 2 + 10);
  ctx.fillText(`MUNTEN: ${game.coins}`, canvas.width / 2, canvas.height / 2 + 30);
  ctx.fillStyle = '#39ff14';
  ctx.fillText('KLIK OM OPNIEUW TE SPELEN', canvas.width / 2, canvas.height / 2 + 60);
  ctx.textAlign = 'left';
}

export function drawIdleScreen() {
  ctx.fillStyle = '#5c94fc';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  [60, 180, 300].forEach((cx, i) => {
    ctx.beginPath();
    ctx.arc(cx, 45 + i * 12, 16, 0, Math.PI * 2);
    ctx.arc(cx + 20, 40 + i * 12, 20, 0, Math.PI * 2);
    ctx.arc(cx + 42, 45 + i * 12, 16, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = '#00a800';
  ctx.fillRect(0, GROUND_Y, canvas.width, 4);
  ctx.fillStyle = '#c84c0c';
  ctx.fillRect(0, GROUND_Y + 4, canvas.width, GROUND_H - 4);

  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '16px "Press Start 2P"';
  ctx.fillStyle = '#e60000';
  ctx.textAlign = 'center';
  ctx.fillText('marIO++', canvas.width / 2, canvas.height / 2 - 55);
  ctx.font = '8px "Press Start 2P"';
  ctx.fillStyle = '#ffdd00';
  ctx.fillText('SCHRIJF DE GAME LOOP', canvas.width / 2, canvas.height / 2 - 10);
  ctx.fillText('DRUK DAN OP START SPEL', canvas.width / 2, canvas.height / 2 + 10);
  ctx.fillStyle = '#e0e0ff';
  ctx.font = '7px "Press Start 2P"';
  ctx.fillText('\u2190 \u2192 LOPEN  |  SPATIE SPRINGEN', canvas.width / 2, canvas.height / 2 + 40);
  ctx.textAlign = 'left';
}

// ── Game over / win ───────────────────────────────────────────────────────────

export function triggerGameOver() {
  if (!game.running) return;
  game.running = false;
  game.state = 'gameover';
  if (game.score > game.best) game.best = game.score;
  updateUI();
  document.getElementById('hintText').textContent = 'KLIK OP CANVAS OM OPNIEUW TE STARTEN';
  document.getElementById('runBtn').textContent = '\u25b6 START SPEL';
  document.getElementById('runBtn').classList.remove('running');
  drawGameOverOverlay();
}

function triggerWin() {
  if (!game.running) return;
  game.running = false;
  game.state = 'win';
  if (game.score > game.best) game.best = game.score;
  updateUI();
  document.getElementById('hintText').textContent = 'GEFELICITEERD! KLIK OM OPNIEUW TE SPELEN';
  document.getElementById('runBtn').textContent = '\u25b6 START SPEL';
  document.getElementById('runBtn').classList.remove('running');
  drawWinOverlay();
}

// ── Blockly API ───────────────────────────────────────────────────────────────

function setupAPI() {
  window.__mario = {
    applyGravity(amount) {
      const m = game.mario; if (!m) return;
      m.vy += (+amount || 0.7);
      m.y += m.vy;
    },
    move(speed) {
      const m = game.mario; if (!m) return;
      let dx = 0;
      if (game.keys['ArrowRight'] || gpKeys['ArrowRight'] || game.keys['KeyD'] || gpKeys['KeyD']) dx += (+speed || 3);
      if (game.keys['ArrowLeft'] || gpKeys['ArrowLeft'] || game.keys['KeyA'] || gpKeys['KeyA']) dx -= (+speed || 3);
      m.x += dx;
      if (dx !== 0) m.frame++;
      m.facing = dx > 0 ? 'right' : dx < 0 ? 'left' : m.facing;
      // Clamp to world
      if (m.x < game.camera.x) m.x = game.camera.x;
      if (game.world && m.x + m.w > game.world.width) m.x = game.world.width - m.w;
    },
    jump(force) {
      const m = game.mario; if (!m) return;
      if (m.grounded) {
        m.vy = -Math.abs(+force || 10);
        m.grounded = false;
      }
    },
    bounce(force) {
      const m = game.mario; if (!m) return;
      m.vy = -Math.abs(+force || 7);
    },
    getX() { return game.mario ? game.mario.x : 0; },
    getY() { return game.mario ? game.mario.y : 0; },
    getVelocityY() { return game.mario ? game.mario.vy : 0; },
    isGrounded() { return game.mario ? game.mario.grounded : false; },
    isFalling() { return game.mario ? game.mario.vy > 0 && !game.mario.grounded : false; },
    /** For Blockly: returns true if pressing right */
    isPressingRight() { return !!(game.keys['ArrowRight'] || gpKeys['ArrowRight'] || game.keys['KeyD'] || gpKeys['KeyD']); },
    isPressingLeft() { return !!(game.keys['ArrowLeft'] || gpKeys['ArrowLeft'] || game.keys['KeyA'] || gpKeys['KeyA']); },
    isPressingJump() { return !!(game.keys['Space'] || gpKeys['Space'] || game.keys['ArrowUp'] || gpKeys['ArrowUp'] || game.keys['KeyW'] || gpKeys['KeyW']); },
    setInvincible(frames) {
      const m = game.mario; if (!m) return;
      m.invincible = Math.max(0, Math.min(300, +frames || 60));
    },
  };

  window.__world = {
    generateLevel(opts) {
      if (window.LEVEL_DATA) {
        game.world = buildWorldFromJSON(window.LEVEL_DATA);
      } else {
        const cfg = { ...window.GAME_CONFIG, ...(opts || {}) };
        game.world = generateLevel(cfg);
      }
    },
    checkLanding() {
      const m = game.mario; if (!m || !game.world) return;
      m.grounded = false;
      const solids = [...game.world.blocks, ...game.world.pipes];
      if (m.vy >= 0) {
        if (m.y + m.h >= GROUND_Y && (isGroundAt(m.x + 2) || isGroundAt(m.x + m.w - 2))) {
          m.y = GROUND_Y - m.h; m.vy = 0; m.grounded = true;
        }
        for (const s of solids) {
          if (aabb(m, s) && m.y + m.h - m.vy <= s.y + 4) {
            m.y = s.y - m.h; m.vy = 0; m.grounded = true;
          }
        }
      } else {
        for (const b of game.world.blocks) {
          if (aabb(m, b) && m.y - m.vy >= b.y + b.h - 2) {
            m.y = b.y + b.h; m.vy = 1;
            if (b.type === 'question' && !b.hit) {
              b.hit = true;
              fireHooks('onBlockHit');
            }
          }
        }
        for (const p of game.world.pipes) {
          if (aabb(m, p) && m.y - m.vy >= p.y + p.h - 2) { m.y = p.y + p.h; m.vy = 1; }
        }
      }
      // Horizontal collision
      for (const s of solids) {
        if (aabb(m, s)) {
          if (m.facing === 'right') m.x = s.x - m.w;
          else m.x = s.x + s.w;
        }
      }
    },
    checkCoins() {
      const m = game.mario; if (!m || !game.world) return;
      for (const c of game.world.coins) {
        if (c.collected) continue;
        if (aabb(m, { x: c.x, y: c.y, w: 8, h: 12 })) {
          c.collected = true;
          spawnParticles(c.x + 4, c.y + 6, '#ffdd00', 4);
          fireHooks('onCoinCollect');
        }
      }
    },
    checkEnemies() {
      const m = game.mario; if (!m || !game.world) return;
      if (m.invincible > 0) { m.invincible--; return; }
      for (const e of game.world.enemies) {
        if (!e.alive) continue;
        if (!aabb(m, e)) continue;
        if (m.vy > 0 && m.y + m.h < e.y + e.h * 0.6) {
          e.alive = false;
          e.squishTimer = 30;
          spawnParticles(e.x + e.w / 2, e.y, '#ffdd00', 4);
          fireHooks('onStomp');
        } else {
          spawnParticles(m.x + m.w / 2, m.y + m.h / 2, '#ff2244', 8);
          fireHooks('onHurt');
        }
        return;
      }
    },
    updateEnemies() {
      if (!game.world) return;
      for (const e of game.world.enemies) {
        if (!e.alive) { if (e.squishTimer > 0) e.squishTimer--; continue; }
        e.x += e.vx; e.frame++;
        const footX = e.vx > 0 ? e.x + e.w + 2 : e.x - 2;
        if (!isGroundAt(footX)) e.vx = -e.vx;
        for (const s of [...game.world.pipes, ...game.world.blocks]) {
          if (aabb(e, s)) { e.vx = -e.vx; e.x += e.vx * 2; break; }
        }
      }
    },
    checkPit() {
      const m = game.mario; if (!m) return false;
      return m.y > canvas.height + 50;
    },
    checkFlagpole() {
      const m = game.mario; if (!m || !game.world) return false;
      const fp = game.world.flagpole;
      return m.x + m.w >= fp.x && m.x <= fp.x + 16;
    },
    updateCamera() {
      if (!game.mario || !game.world) return;
      const targetX = game.mario.x - canvas.width * 0.4;
      game.camera.x = Math.max(game.camera.x, targetX);
      game.camera.x = Math.max(0, Math.min(game.world.width - canvas.width, game.camera.x));
    },
    respawn() {
      const m = game.mario; if (!m) return;
      m.x = Math.max(game.camera.x + 40, m.x - 200);
      m.y = GROUND_Y - m.h - 60;
      m.vy = 0;
      m.invincible = 60;
    },
    getLevelWidth() { return game.world ? game.world.width : 0; },
    getEnemyCount() { return game.world ? game.world.enemies.filter(e => e.alive).length : 0; },
    getCoinCount() { return game.world ? game.world.coins.filter(c => !c.collected).length : 0; },
  };

  window.__game = {
    over() { triggerGameOver(); },
    win() { triggerWin(); },
    setLives(n) { game.lives = Math.max(0, Math.min(20, +n || 3)); updateUI(); },
    loseLife() {
      game.lives--;
      updateUI();
      if (game.lives <= 0) triggerGameOver();
    },
    addScore(n) { game.score += Math.max(0, +n || 0); if (game.score > game.best) game.best = game.score; updateUI(); },
    addCoin(n) { game.coins += Math.max(0, +n || 1); updateUI(); },
    getScore() { return game.score; },
    getLives() { return game.lives; },
    getCoins() { return game.coins; },
    getFrame() { return game.frame; },
    spawnParticles(color) { if (game.mario) spawnParticles(game.mario.x + game.mario.w / 2, game.mario.y, color || '#ffdd00', 8); },
  };
}

// ── Public API ────────────────────────────────────────────────────────────────

export function initGame() {
  game.score = 0; game.coins = 0; game.frame = 0;
  game.lives = 3;
  game.particles = [];
  game.camera = { x: 0 };
  game.keys = {};
  game.world = null;
  game._lastHurt = false;
  game._lastStomp = false;

  game.mario = {
    x: 40, y: GROUND_Y - 24, w: 14, h: 24,
    vx: 0, vy: 0, grounded: false,
    facing: 'right', invincible: 0, frame: 0, scale: 1,
  };
  game.state = 'playing';
  game.running = true;
  updateUI();
  setupAPI();

  fireHooks('onStart');
}

export function handleJump() {
  fireHooks('onJump');
}

export function gameLoop() {
  if (!game.running) return;
  game.frame++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Run Blockly frame logic
  fireHooks('onFrame');
  if (!game.running) return;

  // Draw everything
  drawSky();
  drawGround();
  if (game.world) {
    for (const b of game.world.blocks) drawBlock(b);
    for (const p of game.world.pipes) drawPipeObj(p);
    for (const c of game.world.coins) { if (!c.collected) drawCoin(c); }
    for (const e of game.world.enemies) drawEnemy(e);
    drawFlagpole();
  }
  drawMario();

  // Particles
  for (let i = game.particles.length - 1; i >= 0; i--) {
    const p = game.particles[i];
    p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life -= 0.04;
    if (p.life <= 0) { game.particles.splice(i, 1); continue; }
    const sx = p.x - game.camera.x;
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.fillRect(sx - p.size / 2, p.y - p.size / 2, p.size, p.size);
    ctx.globalAlpha = 1;
  }

  drawHUD();
  requestAnimationFrame(gameLoop);
}
