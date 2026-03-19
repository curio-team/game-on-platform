/**
 * Guess the Number — game engine.
 *
 * Canvas zones (click interaction):
 *   Left third  (0 – W/3)       → decrease current guess by 1
 *   Center third (W/3 – 2W/3)   → submit the guess
 *   Right third  (2W/3 – W)     → increase current guess by 1
 *
 * Keyboard:
 *   ← / → : adjust guess
 *   Enter  : submit guess
 *   Space  : handled by platform (submit during gameplay)
 */

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

export const game = {
  running: false,
  state: 'idle',   // 'idle' | 'playing' | 'won' | 'gameover'
  secret: 0,
  currentGuess: 50,
  attemptsLeft: 0,
  bestAttempts: null,     // fewest guesses to win (null = never won)
  lastResult: null,     // null | 'too_high' | 'too_low' | 'correct'
  history: [],       // [{ guess, result }]
};

// ── UI helpers ────────────────────────────────────────────────────────────────

function updateUI() {
  document.getElementById('attemptsDisplay').textContent = game.attemptsLeft;
  document.getElementById('rangeDisplay').textContent = `1-${window.GAME_CONFIG.maxNumber}`;
  document.getElementById('bestDisplay').textContent = game.bestAttempts ?? '-';
}

// ── Temperature hint ──────────────────────────────────────────────────────────

function temperatureLabel(diff, range) {
  const pct = diff / range;
  if (pct > 0.5) return { text: 'IJSKOUD', color: '#88ccff' };
  if (pct > 0.25) return { text: 'KOUD', color: '#55aaff' };
  if (pct > 0.1) return { text: 'WARM', color: '#ffaa44' };
  if (pct > 0.05) return { text: 'HEET!', color: '#ff6600' };
  return { text: 'BLOEDHEET!', color: '#ff2244' };
}

// ── Draw ──────────────────────────────────────────────────────────────────────

function drawBackground() {
  ctx.fillStyle = window.GAME_CONFIG.bgColor || '#0d0d2a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle grid
  ctx.strokeStyle = 'rgba(74,74,240,0.15)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 24) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 24) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }
}

function drawGuessWidget() {
  const cfg = window.GAME_CONFIG;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2 - 10;
  const accent = cfg.accentColor || '#ffdd00';

  // ◄ button
  ctx.fillStyle = 'rgba(74,74,240,0.4)';
  ctx.fillRect(10, cy - 24, 70, 48);
  ctx.font = '18px "Press Start 2P"';
  ctx.fillStyle = accent; ctx.textAlign = 'center';
  ctx.fillText('◄', 45, cy + 7);

  // ► button
  ctx.fillStyle = 'rgba(74,74,240,0.4)';
  ctx.fillRect(canvas.width - 80, cy - 24, 70, 48);
  ctx.fillStyle = accent;
  ctx.fillText('►', canvas.width - 45, cy + 7);

  // Guess box
  const boxW = 120, boxH = 48;
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.fillRect(cx - boxW / 2, cy - boxH / 2, boxW, boxH);
  ctx.strokeStyle = accent; ctx.lineWidth = 3;
  ctx.strokeRect(cx - boxW / 2, cy - boxH / 2, boxW, boxH);

  ctx.font = '22px "Press Start 2P"';
  ctx.fillStyle = accent;
  ctx.fillText(`${game.currentGuess}`, cx, cy + 8);
  ctx.textAlign = 'left';
}

function drawHistory() {
  const startY = canvas.height - 20 - game.history.length * 18;
  ctx.font = '11px "VT323", monospace';
  for (let i = 0; i < game.history.length; i++) {
    const entry = game.history[i];
    let color, label;
    if (entry.result === 'too_high') { color = '#ff6655'; label = '↑ TE HOOG'; }
    else if (entry.result === 'too_low') { color = '#55aaff'; label = '↓ TE LAAG'; }
    else { color = '#39ff14'; label = '✓ GOED!'; }
    ctx.fillStyle = color;
    ctx.fillText(`${entry.guess}  ${label}`, 12, startY + i * 18);
  }
}

function drawHintBadge(text, color) {
  const cx = canvas.width / 2;
  ctx.font = '10px "Press Start 2P"';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.fillText(text, cx, canvas.height / 2 + 60);
  ctx.textAlign = 'left';
}

export function drawIdleScreen() {
  ctx.fillStyle = '#0d0d2a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '12px "Press Start 2P"';
  ctx.fillStyle = '#ffdd00'; ctx.textAlign = 'center';
  ctx.fillText('RAAD HET', canvas.width / 2, canvas.height / 2 - 50);
  ctx.fillText('GETAL', canvas.width / 2, canvas.height / 2 - 20);

  ctx.font = '8px "Press Start 2P"'; ctx.fillStyle = '#6666aa';
  ctx.fillText('STEL JE BLOKKEN IN', canvas.width / 2, canvas.height / 2 + 30);
  ctx.fillText('DRUK DAN OP START SPEL', canvas.width / 2, canvas.height / 2 + 55);
  ctx.textAlign = 'left';
}

function renderPlayingFrame() {
  drawBackground();

  const cfg = window.GAME_CONFIG;
  const cx = canvas.width / 2;
  const accent = cfg.accentColor || '#ffdd00';

  // Title
  ctx.font = '9px "Press Start 2P"'; ctx.fillStyle = accent; ctx.textAlign = 'center';
  ctx.fillText('RAAD HET GETAL', cx, 28);

  // Range label
  ctx.font = '12px "VT323", monospace'; ctx.fillStyle = '#6666aa';
  ctx.fillText(`Kies een getal van 1 tot ${cfg.maxNumber}`, cx, 50);

  // Attempts label
  ctx.font = '8px "Press Start 2P"'; ctx.fillStyle = '#e0e0ff';
  ctx.fillText(`${game.attemptsLeft} POGING${game.attemptsLeft !== 1 ? 'EN' : ''} OVER`, cx, 80);

  // Last hint
  if (game.lastResult === 'too_high') {
    if (cfg.hintStyle === 'temperature') {
      const { text, color } = temperatureLabel(game.history.at(-1).guess - game.secret, cfg.maxNumber);
      drawHintBadge(text, color);
    } else if (cfg.hintStyle === 'basic') {
      drawHintBadge('TE HOOG! Ga lager.', '#ff6655');
    }
  } else if (game.lastResult === 'too_low') {
    if (cfg.hintStyle === 'temperature') {
      const { text, color } = temperatureLabel(game.secret - game.history.at(-1).guess, cfg.maxNumber);
      drawHintBadge(text, color);
    } else if (cfg.hintStyle === 'basic') {
      drawHintBadge('TE LAAG! Ga hoger.', '#55aaff');
    }
  }

  drawGuessWidget();
  drawHistory();

  // Instructions
  ctx.font = '11px "VT323", monospace'; ctx.fillStyle = '#3a3a6a'; ctx.textAlign = 'center';
  ctx.fillText('◄ ► om aan te passen  |  SPATIE om te bevestigen', cx, canvas.height - 6);
  ctx.textAlign = 'left';
}

function renderWonFrame() {
  const usedAttempts = window.GAME_CONFIG.maxAttempts - game.attemptsLeft;
  drawBackground();
  ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center';
  ctx.font = '16px "Press Start 2P"'; ctx.fillStyle = '#39ff14';
  ctx.fillText('JE WINT!', canvas.width / 2, canvas.height / 2 - 50);
  ctx.font = '9px "Press Start 2P"'; ctx.fillStyle = '#ffdd00';
  ctx.fillText(`HET GETAL WAS ${game.secret}`, canvas.width / 2, canvas.height / 2 - 10);
  ctx.fillText(`GEVONDEN IN ${usedAttempts} POGING${usedAttempts !== 1 ? 'EN' : ''}!`, canvas.width / 2, canvas.height / 2 + 20);
  ctx.font = '8px "Press Start 2P"'; ctx.fillStyle = '#39ff14';
  ctx.fillText('KLIK OM OPNIEUW TE SPELEN', canvas.width / 2, canvas.height / 2 + 60);
  ctx.textAlign = 'left';
}

function renderGameOverFrame() {
  drawBackground();
  ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center';
  ctx.font = '16px "Press Start 2P"'; ctx.fillStyle = '#ff2244';
  ctx.fillText('GEEN POGINGEN MEER!', canvas.width / 2, canvas.height / 2 - 50);
  ctx.font = '9px "Press Start 2P"'; ctx.fillStyle = '#ffdd00';
  ctx.fillText(`HET GETAL WAS ${game.secret}`, canvas.width / 2, canvas.height / 2);
  ctx.font = '8px "Press Start 2P"'; ctx.fillStyle = '#39ff14';
  ctx.fillText('KLIK OM OPNIEUW TE PROBEREN', canvas.width / 2, canvas.height / 2 + 50);
  ctx.textAlign = 'left';
}

// ── Game logic ────────────────────────────────────────────────────────────────

function submitGuess() {
  if (!game.running || game.state !== 'playing') return;

  const cfg = window.GAME_CONFIG;
  const guess = game.currentGuess;
  game.attemptsLeft--;

  if (guess === game.secret) {
    game.lastResult = 'correct';
    game.history.push({ guess, result: 'correct' });
    const used = cfg.maxAttempts - game.attemptsLeft;
    if (game.bestAttempts === null || used < game.bestAttempts) {
      game.bestAttempts = used;
    }
    game.running = false;
    game.state = 'won';
    document.getElementById('hintText').textContent = 'KLIK OP CANVAS OM OPNIEUW TE SPELEN';
    document.getElementById('runBtn').textContent = '▶ START SPEL';
    document.getElementById('runBtn').classList.remove('running');
    updateUI();
    renderWonFrame();
    return;
  }

  if (guess > game.secret) {
    game.lastResult = 'too_high';
    game.history.push({ guess, result: 'too_high' });
  } else {
    game.lastResult = 'too_low';
    game.history.push({ guess, result: 'too_low' });
  }

  if (game.attemptsLeft <= 0) {
    game.running = false;
    game.state = 'gameover';
    document.getElementById('hintText').textContent = 'KLIK OP CANVAS OM OPNIEUW TE PROBEREN';
    document.getElementById('runBtn').textContent = '▶ START SPEL';
    document.getElementById('runBtn').classList.remove('running');
    updateUI();
    renderGameOverFrame();
    return;
  }

  updateUI();
  renderPlayingFrame();
}

// ── Public API ────────────────────────────────────────────────────────────────

export function initGame() {
  const cfg = window.GAME_CONFIG;
  game.secret = Math.floor(Math.random() * cfg.maxNumber) + 1;
  game.currentGuess = Math.round(cfg.maxNumber / 2);
  game.attemptsLeft = cfg.maxAttempts;
  game.lastResult = null;
  game.history = [];
  game.state = 'playing';
  game.running = true;
  updateUI();
}

export function gameLoop() {
  // Guess the Number is event-driven — render once on start, then on each input.
  renderPlayingFrame();
}

export function handleInput(e) {
  if (!game.running || game.state !== 'playing') return;

  if (e) {
    // Canvas click — determine zone from offsetX
    const x = e.offsetX ?? (e.clientX - canvas.getBoundingClientRect().left);
    const w = canvas.width;
    if (x < w / 3) {
      game.currentGuess = Math.max(1, game.currentGuess - 1);
      renderPlayingFrame();
    } else if (x > (w * 2) / 3) {
      game.currentGuess = Math.min(window.GAME_CONFIG.maxNumber, game.currentGuess + 1);
      renderPlayingFrame();
    } else {
      submitGuess();
    }
  } else {
    // Space bar — submit
    submitGuess();
  }
}

export function handleKeydown(e) {
  if (!game.running || game.state !== 'playing') return;

  if (e.code === 'ArrowLeft') {
    e.preventDefault();
    game.currentGuess = Math.max(1, game.currentGuess - 1);
    renderPlayingFrame();
  } else if (e.code === 'ArrowRight') {
    e.preventDefault();
    game.currentGuess = Math.min(window.GAME_CONFIG.maxNumber, game.currentGuess + 1);
    renderPlayingFrame();
  } else if (e.code === 'Enter') {
    e.preventDefault();
    submitGuess();
  }
}
