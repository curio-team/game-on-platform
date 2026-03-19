const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

export const game = {
  running: false, score: 0, best: 0, lives: 3,
  frame: 0, bird: null, pipes: [], particles: [],
  state: 'idle',
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function shadeColor(hex, amount) {
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
  return { x: 80, y: canvas.height / 2, vy: 0, invincible: 0, size: window.GAME_CONFIG.birdSize || 20 };
}

// ── Draw routines ─────────────────────────────────────────────────────────────

function drawBackground() {
  const sky = window.GAME_CONFIG.skyColor || '#1a1a4e';
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  const seed = (sky.charCodeAt(1) || 1) * 37;
  for (let i = 0; i < 20; i++) {
    ctx.fillRect((seed * (i * 73 + 1)) % canvas.width, (seed * (i * 37 + 7)) % (canvas.height * 0.7), 2, 2);
  }

  ctx.fillStyle = '#3a2a0a'; ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
  ctx.fillStyle = '#5a4a1a'; ctx.fillRect(0, canvas.height - 20, canvas.width, 4);
  ctx.fillStyle = '#2a8a0a';
  for (let gx = 0; gx < canvas.width; gx += 16) {
    const offset = ((game.frame * (window.GAME_CONFIG.pipeSpeed || 3) * 0.5) | 0) % 16;
    ctx.fillRect((gx - offset + canvas.width) % canvas.width, canvas.height - 22, 4, 4);
  }
}

function drawBird(b) {
  const s = b.size;
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate(Math.min(Math.PI / 4, Math.max(-Math.PI / 6, b.vy * 0.04)));
  if (b.invincible > 0 && Math.floor(b.invincible / 3) % 2 === 0) { ctx.restore(); return; }
  const c = window.GAME_CONFIG.birdColor || '#ffdd00';
  ctx.fillStyle = c; ctx.fillRect(-s / 2, -s / 2, s, s);
  ctx.fillStyle = shadeColor(c, -30); ctx.fillRect(-s / 2, s / 4 + Math.sin(game.frame * 0.3) * 3, s * 0.7, s * 0.3);
  ctx.fillStyle = '#fff'; ctx.fillRect(s / 4, -s / 4, s / 4, s / 4);
  ctx.fillStyle = '#000'; ctx.fillRect(s / 4 + 2, -s / 4 + 2, s / 8, s / 8);
  ctx.fillStyle = '#ff8800'; ctx.fillRect(s / 2, -s / 8, s / 4, s / 8);
  ctx.restore();
}

function drawPipe(pipe) {
  const pc = window.GAME_CONFIG.pipeColor || '#39ff14', dark = shadeColor(pc, -50), W = pipe.w;
  ctx.fillStyle = pc; ctx.fillRect(pipe.x, pipe.gapBottom, W, canvas.height - pipe.gapBottom);
  ctx.fillStyle = dark; ctx.fillRect(pipe.x, pipe.gapBottom, 6, canvas.height - pipe.gapBottom);
  ctx.fillStyle = shadeColor(pc, 30); ctx.fillRect(pipe.x + W - 6, pipe.gapBottom, 6, canvas.height - pipe.gapBottom);
  ctx.fillStyle = pc; ctx.fillRect(pipe.x - 4, pipe.gapBottom, W + 8, 16);
  ctx.fillStyle = dark; ctx.fillRect(pipe.x - 4, pipe.gapBottom, 6, 16);
  ctx.fillStyle = pc; ctx.fillRect(pipe.x, 0, W, pipe.gapTop);
  ctx.fillStyle = dark; ctx.fillRect(pipe.x, 0, 6, pipe.gapTop);
  ctx.fillStyle = shadeColor(pc, 30); ctx.fillRect(pipe.x + W - 6, 0, 6, pipe.gapTop);
  ctx.fillStyle = pc; ctx.fillRect(pipe.x - 4, pipe.gapTop - 16, W + 8, 16);
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
  ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 30);
  ctx.font = '10px "Press Start 2P"'; ctx.fillStyle = '#ffdd00';
  ctx.fillText(`SCORE: ${game.score}`, canvas.width / 2, canvas.height / 2 + 10);
  ctx.fillText(`BEST: ${game.best}`, canvas.width / 2, canvas.height / 2 + 35);
  ctx.fillStyle = '#39ff14';
  ctx.fillText('CLICK TO RETRY', canvas.width / 2, canvas.height / 2 + 70);
  ctx.textAlign = 'left';
}

export function drawIdleScreen() {
  drawBackground();
  ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '14px "Press Start 2P"'; ctx.fillStyle = '#ffdd00'; ctx.textAlign = 'center';
  ctx.fillText('CODEBIRD', canvas.width / 2, canvas.height / 2 - 50);
  ctx.fillText('ADVANCED', canvas.width / 2, canvas.height / 2 - 22);
  ctx.font = '8px "Press Start 2P"'; ctx.fillStyle = '#e0e0ff';
  ctx.fillText('WRITE THE GAME LOOP', canvas.width / 2, canvas.height / 2 + 15);
  ctx.fillText('THEN PRESS RUN GAME', canvas.width / 2, canvas.height / 2 + 38);
  ctx.textAlign = 'left';
}

// ── Blockly API setup ─────────────────────────────────────────────────────────

function setupAPI() {
  window.__bird = {
    flap(force = 12) {
      game.bird.vy = -Math.abs(+force || 12);
    },
    applyGravity(amount = 1.2) {
      game.bird.vy += +amount || 1.2;
      game.bird.y += game.bird.vy * 0.5;
    },
    isColliding() {
      if (!game.bird || game.bird.invincible > 0) return false;
      const b = game.bird, bs = b.size / 2 - 2;
      for (const p of game.pipes) {
        if (b.x + bs > p.x && b.x - bs < p.x + p.w) {
          if (b.y - bs < p.gapTop || b.y + bs > p.gapBottom) return true;
        }
      }
      return false;
    },
    isOutOfBounds() {
      if (!game.bird) return false;
      const b = game.bird, bs = b.size / 2;
      return b.y + bs > canvas.height - 20 || b.y - bs < 0;
    },
    getY() { return game.bird ? game.bird.y : 0; },
    getVelocity() { return game.bird ? game.bird.vy : 0; },
  };

  window.__pipes = {
    spawn() {
      const gap = window.GAME_CONFIG.pipeGap || 130;
      const minTop = 60, maxTop = canvas.height - gap - 60;
      const gapTop = minTop + Math.random() * (maxTop - minTop);
      game.pipes.push({ x: canvas.width + 10, gapTop, gapBottom: gapTop + gap, w: 52, scored: false });
    },
    setSpeed(v) { window.GAME_CONFIG.pipeSpeed = Math.max(0.1, Math.min(20, +v || 3)); },
    setGap(g) { window.GAME_CONFIG.pipeGap = Math.max(40, Math.min(300, +g || 130)); },
    getNearestX() {
      const bx = game.bird ? game.bird.x : 80;
      for (const p of game.pipes) if (p.x + p.w >= bx) return p.x;
      return canvas.width;
    },
    getGapTop() {
      const bx = game.bird ? game.bird.x : 80;
      for (const p of game.pipes) if (p.x + p.w >= bx) return p.gapTop;
      return 0;
    },
    getGapBottom() {
      const bx = game.bird ? game.bird.x : 80;
      for (const p of game.pipes) if (p.x + p.w >= bx) return p.gapBottom;
      return canvas.height;
    },
  };

  window.__game = {
    over() { triggerGameOver(); },
    loseLife() {
      game.lives--;
      updateUI();
      if (game.bird) { game.bird.invincible = 60; game.bird.vy = -10; }
      if (game.lives <= 0) triggerGameOver();
    },
    setLives(n) { game.lives = Math.max(0, Math.min(20, +n || 3)); updateUI(); },
    addScore(n = 1) { game.score += +n || 0; if (game.score > game.best) game.best = game.score; updateUI(); },
    getScore() { return game.score; },
    getLives() { return game.lives; },
    getFrame() { return game.frame; },
    spawnParticles() { if (game.bird) spawnParticles(game.bird.x, game.bird.y, '#ffdd00', 8); },
  };
}

// ── Game Over ─────────────────────────────────────────────────────────────────

export function triggerGameOver() {
  if (!game.running) return;
  game.running = false;
  game.state = 'gameover';
  document.getElementById('hintText').textContent = 'CLICK CANVAS TO RESTART';
  document.getElementById('runBtn').textContent = '▶ RUN GAME';
  document.getElementById('runBtn').classList.remove('running');
  drawBackground();
  for (const p of game.pipes) drawPipe(p);
  if (game.bird) drawBird(game.bird);
  drawGameOverOverlay();
}

// ── Public API ────────────────────────────────────────────────────────────────

export function initGame() {
  game.score = 0; game.frame = 0;
  game.lives = 3;
  game.pipes = []; game.particles = [];
  game.bird = createBird();
  game.state = 'playing'; game.running = true;
  updateUI();
  setupAPI();

  const hooks = window.__gameHooks;
  if (hooks) for (const fn of hooks.onStart) try { fn(); } catch (e) { console.warn('onStart error:', e); }
}

export function handleFlap() {
  const hooks = window.__gameHooks;
  if (hooks) for (const fn of hooks.onFlap) try { fn(); } catch (e) { console.warn('onFlap error:', e); }
}

export function gameLoop() {
  if (!game.running) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();

  game.frame++;
  if (game.bird && game.bird.invincible > 0) game.bird.invincible--;

  // Call user's frame hooks — they apply gravity, spawn pipes, check collisions, etc.
  const hooks = window.__gameHooks;
  if (hooks) {
    for (const fn of hooks.onFrame) {
      try { fn(); } catch (e) { console.warn('Frame hook error:', e); }
      if (!game.running) return; // hook triggered game over
    }
  }

  if (!game.running) return;

  // Engine auto-moves pipes and fires onScore when the bird passes one
  const speed = window.GAME_CONFIG.pipeSpeed || 3;
  for (let i = game.pipes.length - 1; i >= 0; i--) {
    const pipe = game.pipes[i];
    pipe.x -= speed;
    drawPipe(pipe);
    if (!pipe.scored && game.bird && pipe.x + pipe.w < game.bird.x) {
      pipe.scored = true;
      game.score++;
      if (game.score > game.best) game.best = game.score;
      spawnParticles(game.bird.x, game.bird.y, '#ffdd00', 5);
      updateUI();
      if (hooks) for (const fn of hooks.onScore) try { fn(); } catch { }
    }
    if (pipe.x + pipe.w < 0) game.pipes.splice(i, 1);
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

  if (game.bird) drawBird(game.bird);
  drawHUD();
  requestAnimationFrame(gameLoop);
}
