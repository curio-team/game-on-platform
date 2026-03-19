import '/src/styles/main.css';
import './blockly/blocks/index.js';          // registers all custom blocks (side-effect)

import { toolboxConfig, DEFAULT_WORKSPACE_XML } from './blockly/toolbox.js';
import { resetConfig } from './config.js';
import { game, initGame, gameLoop, drawIdleScreen, handleJump } from './engine.js';
import { initPlatform } from '/src/platform.js';

initPlatform({
  // ── Blockly ──────────────────────────────────────────────────────────────
  toolboxConfig,
  defaultWorkspaceXML: DEFAULT_WORKSPACE_XML,

  // ── Config lifecycle ─────────────────────────────────────────────────────
  resetConfig,
  clampConfig() {
    const c = window.GAME_CONFIG;
    c.gravity = Math.max(0.5, Math.min(30, c.gravity));
    c.jumpForce = Math.max(1, Math.min(30, c.jumpForce));
    c.birdSize = Math.max(10, Math.min(50, c.birdSize));
    c.pipeSpeed = Math.max(0.5, Math.min(15, c.pipeSpeed));
    c.pipeGap = Math.max(60, Math.min(280, c.pipeGap));
    c.pipeInterval = Math.max(30, Math.min(300, c.pipeInterval));
    c.startLives = Math.max(1, Math.min(10, c.startLives));
  },

  // ── Game lifecycle ────────────────────────────────────────────────────────
  initGame,
  gameLoop,
  stopGame() { game.running = false; game.state = 'idle'; drawIdleScreen(); },
  drawIdleScreen,

  // ── Input ─────────────────────────────────────────────────────────────────
  handleInput: () => handleJump(), // Space or canvas click during gameplay

  // ── State queries ─────────────────────────────────────────────────────────
  isRunning: () => game.running,
  canRestart: () => game.state === 'gameover' || game.state === 'idle',

  // ── UI ────────────────────────────────────────────────────────────────────
  runningHint: 'CLICK CANVAS or SPACE to flap!',
});
