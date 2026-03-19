import '/src/styles/main.css';
import './blockly/blocks/index.js';          // registers all custom blocks (side-effect)

import { toolboxConfig, DEFAULT_WORKSPACE_XML } from './blockly/toolbox.js';
import { resetConfig } from './config.js';
import { game, initGame, gameLoop, drawIdleScreen, handleInput, handleKeydown } from './engine.js';
import { initPlatform } from '/src/platform.js';

initPlatform({
  // ── Blockly ──────────────────────────────────────────────────────────────
  toolboxConfig,
  defaultWorkspaceXML: DEFAULT_WORKSPACE_XML,

  // ── Config lifecycle ─────────────────────────────────────────────────────
  resetConfig,
  clampConfig() {
    const c = window.GAME_CONFIG;
    c.maxNumber = Math.max(2, Math.min(10000, Math.round(c.maxNumber)));
    c.maxAttempts = Math.max(1, Math.min(100, Math.round(c.maxAttempts)));
  },

  // ── Game lifecycle ────────────────────────────────────────────────────────
  initGame,
  gameLoop,
  stopGame() { game.running = false; game.state = 'idle'; drawIdleScreen(); },
  drawIdleScreen,

  // ── Input ─────────────────────────────────────────────────────────────────
  handleInput,
  handleKeydown,

  // ── State queries ─────────────────────────────────────────────────────────
  isRunning: () => game.running,
  canRestart: () => game.state === 'won' || game.state === 'gameover' || game.state === 'idle',

  // ── UI ────────────────────────────────────────────────────────────────────
  runningHint: '◄ ► to adjust guess  |  SPACE to submit',
});
