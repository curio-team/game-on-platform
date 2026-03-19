const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

export const game = {
  running: false, score: 0, best: 0, lives: 3,
  frame: 0, bird: null, pipes: [], particles: [],
  state: 'idle', // 'idle' | 'playing' | 'gameover'
};

// ── Helpers ───────────────────────────────────────────────────────────────────

export function shadeColor(hex, amount) {
  try {
    let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    r = Math.max(0, Math.min(255, r + amount)); g = Math.max(0, Math.min(255, g + amount)); b = Math.max(0, Math.min(255, b + amount));
    return `rgb(${r},${g},${b})`;
  } catch { return hex; }
}

function updateUI() {
  document.getElementById('scoreDisplay').textContent = game.score;
  document.getElementById('bestDisplay').textContent = game.best;
  document.getElementById('livesDisplay').textContent = game.lives;
}

function spawnParticles(x, y, color, count = 8) {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    game.particles.push({
      x, y,
      vx: Math.cos(angle) * (2 + Math.random() * 3),
      vy: Math.sin(angle) * (2 + Math.random() * 3),
      life: 1, color, size: 4 + Math.random() * 4,
    });
  }
}

function createBird() {
  return { x: 80, y: canvas.height / 2, vy: 0, invincible: 0, size: window.GAME_CONFIG.birdSize };
}

// ── Draw routines ─────────────────────────────────────────────────────────────

function drawBackground() {
  const sky = window.GAME_CONFIG.skyColor;
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Deterministic stars based on sky colour hash
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  const seed = (sky.charCodeAt(1) || 1) * 37;
  for (let i = 0; i < 20; i++) {
    ctx.fillRect((seed * (i * 73 + 1)) % canvas.width, (seed * (i * 37 + 7)) % (canvas.height * 0.7), 2, 2);
  }

  // Ground strip (scrolls at half pipe speed)
  ctx.fillStyle = '#3a2a0a'; ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
  ctx.fillStyle = '#5a4a1a'; ctx.fillRect(0, canvas.height - 20, canvas.width, 4);
  ctx.fillStyle = '#2a8a0a';
  for (let gx = 0; gx < canvas.width; gx += 16) {
    const offset = ((game.frame * window.GAME_CONFIG.pipeSpeed * 0.5) | 0) % 16;
    ctx.fillRect((gx - offset + canvas.width) % canvas.width, canvas.height - 22, 4, 4);
  }
}

function drawBird(b) {
  const s = b.size;
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate(Math.min(Math.PI / 4, Math.max(-Math.PI / 6, b.vy * 0.04)));
  if (b.invincible > 0 && Math.floor(b.invincible / 3) % 2 === 0) { ctx.restore(); return; } // blink

  const c = window.GAME_CONFIG.birdColor;
  ctx.fillStyle = c; ctx.fillRect(-s / 2, -s / 2, s, s);                              // body
  ctx.fillStyle = shadeColor(c, -30); ctx.fillRect(-s / 2, s / 4 + Math.sin(game.frame * 0.3) * 3, s * 0.7, s * 0.3); // wing
  ctx.fillStyle = '#fff'; ctx.fillRect(s / 4, -s / 4, s / 4, s / 4);                           // eye white
  ctx.fillStyle = '#000'; ctx.fillRect(s / 4 + 2, -s / 4 + 2, s / 8, s / 8);                       // pupil
  ctx.fillStyle = '#ff8800'; ctx.fillRect(s / 2, -s / 8, s / 4, s / 8);                           // beak
  ctx.restore();
}

function drawPipe(pipe) {
  const pc = window.GAME_CONFIG.pipeColor, dark = shadeColor(pc, -50), W = pipe.w;
  // Bottom pipe
  ctx.fillStyle = pc; ctx.fillRect(pipe.x, pipe.gapBottom, W, canvas.height - pipe.gapBottom);
  ctx.fillStyle = dark; ctx.fillRect(pipe.x, pipe.gapBottom, 6, canvas.height - pipe.gapBottom);
  ctx.fillStyle = shadeColor(pc, 30); ctx.fillRect(pipe.x + W - 6, pipe.gapBottom, 6, canvas.height - pipe.gapBottom);
  ctx.fillStyle = pc; ctx.fillRect(pipe.x - 4, pipe.gapBottom, W + 8, 16); // cap
  ctx.fillStyle = dark; ctx.fillRect(pipe.x - 4, pipe.gapBottom, 6, 16);
  // Top pipe
  ctx.fillStyle = pc; ctx.fillRect(pipe.x, 0, W, pipe.gapTop);
  ctx.fillStyle = dark; ctx.fillRect(pipe.x, 0, 6, pipe.gapTop);
  ctx.fillStyle = shadeColor(pc, 30); ctx.fillRect(pipe.x + W - 6, 0, 6, pipe.gapTop);
  ctx.fillStyle = pc; ctx.fillRect(pipe.x - 4, pipe.gapTop - 16, W + 8, 16); // cap
  ctx.fillStyle = dark; ctx.fillRect(pipe.x - 4, pipe.gapTop - 16, 6, 16);
}

function drawHUD() {
  ctx.font = '12px "Press Start 2P"';
  ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(8, 8, 100, 28);
  ctx.fillStyle = '#ffdd00'; ctx.fillText(`${game.score}`, 16, 28);
  ctx.font = '10px "Press Start 2P"';
  for (let i = 0; i < game.lives; i++) {
    ctx.fillStyle = '#ff2244'; ctx.fillRect(canvas.width - 16 - i * 20, 10, 12, 12);
  }
}

function drawGameOverOverlay() {
  ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '20px "Press Start 2P"'; ctx.fillStyle = '#ff2244'; ctx.textAlign = 'center';
  ctx.fillText('SPEL VOORBIJ', canvas.width / 2, canvas.height / 2 - 30);
  ctx.font = '10px "Press Start 2P"'; ctx.fillStyle = '#ffdd00';
  ctx.fillText(`SCORE: ${game.score}`, canvas.width / 2, canvas.height / 2 + 10);
  ctx.fillText(`BESTE: ${game.best}`, canvas.width / 2, canvas.height / 2 + 35);
  ctx.fillStyle = '#39ff14';
  ctx.fillText('KLIK OM OPNIEUW TE PROBEREN', canvas.width / 2, canvas.height / 2 + 70);
  ctx.textAlign = 'left';
}

export function drawIdleScreen() {
  drawBackground();
  ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '14px "Press Start 2P"'; ctx.fillStyle = '#ffdd00'; ctx.textAlign = 'center';
  ctx.fillText('CODEBIRD', canvas.width / 2, canvas.height / 2 - 40);
  ctx.font = '8px "Press Start 2P"'; ctx.fillStyle = '#e0e0ff';
  ctx.fillText('STEL JE BLOKKEN IN', canvas.width / 2, canvas.height / 2 + 10);
  ctx.fillText('DRUK DAN OP START SPEL', canvas.width / 2, canvas.height / 2 + 35);
  ctx.textAlign = 'left';
}

// ── Collision handling ────────────────────────────────────────────────────────

function handleCollision() {
  const b = game.bird, action = window.GAME_CONFIG.collisionAction;
  spawnParticles(b.x, b.y, '#ff2244', 10);

  if (action === 'bounce') {
    b.vy = -window.GAME_CONFIG.jumpForce;
    b.invincible = 40;
    b.y = Math.max(30, Math.min(canvas.height - 50, b.y));
  } else if (action === 'life') {
    game.lives--;
    updateUI();
    b.invincible = 60;
    b.vy = -window.GAME_CONFIG.jumpForce;
    if (game.lives <= 0) triggerGameOver();
  } else {
    triggerGameOver();
  }
}

export function triggerGameOver() {
  game.running = false;
  game.state = 'gameover';
  document.getElementById('hintText').textContent = 'KLIK OP CANVAS OM OPNIEUW TE STARTEN';
  document.getElementById('runBtn').textContent = '▶ START SPEL';
  document.getElementById('runBtn').classList.remove('running');
  drawBackground();
  for (const p of game.pipes) drawPipe(p);
  drawBird(game.bird);
  drawGameOverOverlay();
}

// ── Public API ────────────────────────────────────────────────────────────────

export function initGame() {
  game.score = 0; game.frame = 0;
  game.lives = window.GAME_CONFIG.startLives;
  game.pipes = []; game.particles = [];
  game.bird = createBird();
  game.state = 'playing'; game.running = true;
  updateUI();
}

export function handleJump() {
  game.bird.vy = -window.GAME_CONFIG.jumpForce;
}

export function gameLoop() {
  if (!game.running) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();

  const cfg = window.GAME_CONFIG, b = game.bird;

  // Physics: gravity + move
  b.vy += cfg.gravity * 0.15;
  b.y += b.vy * 0.5;
  if (b.invincible > 0) b.invincible--;

  // Spawn pipes
  game.frame++;
  if (game.frame % cfg.pipeInterval === 0) {
    const minTop = 60, maxTop = canvas.height - cfg.pipeGap - 60;
    const gapTop = minTop + Math.random() * (maxTop - minTop);
    game.pipes.push({ x: canvas.width + 10, gapTop, gapBottom: gapTop + cfg.pipeGap, w: 52, scored: false });
  }

  // Move, draw and score pipes
  for (let i = game.pipes.length - 1; i >= 0; i--) {
    game.pipes[i].x -= cfg.pipeSpeed;
    drawPipe(game.pipes[i]);
    if (!game.pipes[i].scored && game.pipes[i].x + game.pipes[i].w < b.x) {
      game.pipes[i].scored = true;
      game.score++;
      if (game.score > game.best) game.best = game.score;
      spawnParticles(b.x, b.y, '#ffdd00', 5);
      updateUI();
    }
    if (game.pipes[i].x + game.pipes[i].w < 0) game.pipes.splice(i, 1);
  }

  // AABB collision (2 px shrink)
  if (b.invincible === 0) {
    const bs = b.size / 2 - 2;
    let hit = false;
    if (b.y + bs > canvas.height - 20 || b.y - bs < 0) hit = true;
    for (const p of game.pipes) {
      if (b.x + bs > p.x && b.x - bs < p.x + p.w) {
        if (b.y - bs < p.gapTop || b.y + bs > p.gapBottom) hit = true;
      }
    }
    if (hit) handleCollision();
  }

  // Particles
  for (let i = game.particles.length - 1; i >= 0; i--) {
    const p = game.particles[i];
    p.x += p.vx; p.y += p.vy; p.vy += 0.2; p.life -= 0.05;
    if (p.life <= 0) { game.particles.splice(i, 1); continue; }
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
    ctx.globalAlpha = 1;
  }

  drawBird(b);
  drawHUD();
  requestAnimationFrame(gameLoop);
}
