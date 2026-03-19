import './styles/main.css';

// Register custom block definitions (side effects).
import './blockly/blocks/index.js';

import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { initBlockly, getWorkspace } from './blockly/setup.js';
import { resetConfig } from './game/config.js';
import { game, initGame, gameLoop, drawIdleScreen, handleJump } from './game/engine.js';
import { showTab } from './tabs.js';
import { formatCode } from './ui.js';

// ── App actions ───────────────────────────────────────────────────────────────

function applyAndRun() {
  game.running = false;
  game.state = 'idle';

  // Re-apply block config to a fresh default.
  resetConfig();
  try {
    const code = javascriptGenerator.workspaceToCode(getWorkspace());
    // eslint-disable-next-line no-eval
    eval(code);
    document.getElementById('codeOutput').innerHTML = formatCode(code);
  } catch (e) {
    console.warn('Block code error:', e);
  }

  // Clamp to safe gameplay ranges.
  const c = window.GAME_CONFIG;
  c.gravity = Math.max(0.5, Math.min(30, c.gravity));
  c.jumpForce = Math.max(1, Math.min(30, c.jumpForce));
  c.birdSize = Math.max(10, Math.min(50, c.birdSize));
  c.pipeSpeed = Math.max(0.5, Math.min(15, c.pipeSpeed));
  c.pipeGap = Math.max(60, Math.min(280, c.pipeGap));
  c.pipeInterval = Math.max(30, Math.min(300, c.pipeInterval));
  c.startLives = Math.max(1, Math.min(10, c.startLives));

  initGame();
  gameLoop();

  const runBtn = document.getElementById('runBtn');
  runBtn.textContent = '⏹ STOP';
  runBtn.classList.add('running');
  document.getElementById('hintText').textContent = 'CLICK CANVAS or SPACE to flap!';
}

function stopGame() {
  game.running = false;
  game.state = 'idle';
  drawIdleScreen();

  const runBtn = document.getElementById('runBtn');
  runBtn.textContent = '▶ RUN GAME';
  runBtn.classList.remove('running');
  document.getElementById('hintText').textContent = '▶ PRESS RUN GAME TO START';
}

function handleCanvasClick() {
  if (!game.running) {
    if (game.state === 'gameover' || game.state === 'idle') {
      // Restart with the same config as the last run.
      initGame();
      gameLoop();
      document.getElementById('runBtn').textContent = '⏹ STOP';
      document.getElementById('runBtn').classList.add('running');
      document.getElementById('hintText').textContent = 'CLICK CANVAS or SPACE to flap!';
    }
  } else {
    handleJump();
  }
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────

window.addEventListener('load', () => {
  initBlockly();
  drawIdleScreen();

  document.getElementById('tabBlocks').addEventListener('click', () => showTab('blocks'));
  document.getElementById('tabCode').addEventListener('click', () => showTab('code'));

  document.getElementById('runBtn').addEventListener('click', () => {
    if (game.running) stopGame(); else applyAndRun();
  });

  document.getElementById('gameCanvas').addEventListener('click', handleCanvasClick);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (game.running) handleJump(); else handleCanvasClick();
    }
  });

  window.addEventListener('resize', () => {
    const ws = getWorkspace();
    if (ws) Blockly.svgResize(ws);
  });
});
