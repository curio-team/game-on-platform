import '/src/styles/main.css';
import './blockly/blocks/index.js';         // registers all custom block definitions

import { toolboxConfig, DEFAULT_WORKSPACE_XML } from './blockly/toolbox.js';
import { resetConfig } from './config.js';
import { game, initGame, gameLoop, drawIdleScreen, handleFlap } from './engine.js';
import { initPlatform } from '/src/platform.js';

initPlatform({
  // ── Blockly ───────────────────────────────────────────────────────────────
  toolboxConfig,
  defaultWorkspaceXML: DEFAULT_WORKSPACE_XML,

  // ── Config lifecycle ──────────────────────────────────────────────────────
  resetConfig,
  clampConfig() {
    const c = window.GAME_CONFIG;
    if (c.pipeSpeed !== undefined) c.pipeSpeed = Math.max(0.1, Math.min(20, c.pipeSpeed));
    if (c.pipeGap !== undefined) c.pipeGap = Math.max(40, Math.min(300, c.pipeGap));
    if (c.birdSize !== undefined) c.birdSize = Math.max(10, Math.min(50, c.birdSize));
  },

  // ── Game lifecycle ────────────────────────────────────────────────────────
  initGame,
  gameLoop,
  stopGame() { game.running = false; game.state = 'idle'; drawIdleScreen(); },
  drawIdleScreen,

  // ── Input ─────────────────────────────────────────────────────────────────
  handleInput: () => handleFlap(),

  // ── State queries ─────────────────────────────────────────────────────────
  isRunning: () => game.running,
  canRestart: () => game.state === 'gameover' || game.state === 'idle',

  // ── UI ────────────────────────────────────────────────────────────────────
  runningHint: 'KLIK of SPATIE om te flapperen!',
});
