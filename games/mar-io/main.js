import '/src/styles/main.css';
import './blockly/blocks/index.js';

import { toolboxConfig, DEFAULT_WORKSPACE_XML } from './blockly/toolbox.js';
import { resetConfig } from './config.js';
import { game, gpKeys, initGame, gameLoop, drawIdleScreen, handleJump } from './engine.js';
import { initPlatform } from '/src/platform.js';
import { DEFAULT_LEVEL_DATA } from '/src/mario/defaultLevel.js';
import { initLevelEditor } from '/src/levelEditor.js';

initPlatform({
  toolboxConfig,
  defaultWorkspaceXML: DEFAULT_WORKSPACE_XML,

  resetConfig,
  clampConfig() {
    const c = window.GAME_CONFIG;
    c.gravity = Math.max(1, Math.min(30, c.gravity));
    c.jumpForce = Math.max(1, Math.min(25, c.jumpForce));
    c.runSpeed = Math.max(0.5, Math.min(10, c.runSpeed));
    c.marioSize = Math.max(0.5, Math.min(2, c.marioSize));
    c.levelLength = Math.max(2, Math.min(10, c.levelLength));
    c.gapCount = Math.max(0, Math.min(10, c.gapCount));
    c.pipeCount = Math.max(0, Math.min(15, c.pipeCount));
    c.platformCount = Math.max(0, Math.min(15, c.platformCount));
    c.coinCount = Math.max(0, Math.min(50, c.coinCount));
    c.goombaCount = Math.max(0, Math.min(20, c.goombaCount));
    c.koopaCount = Math.max(0, Math.min(10, c.koopaCount));
    c.enemySpeed = Math.max(0.2, Math.min(5, c.enemySpeed));
    c.startLives = Math.max(1, Math.min(10, c.startLives));
    c.coinValue = Math.max(10, Math.min(1000, c.coinValue));
  },

  initGame,
  gameLoop,
  stopGame() { game.running = false; game.state = 'idle'; drawIdleScreen(); },
  drawIdleScreen,

  handleInput: () => handleJump(),
  isRunning: () => game.running,
  canRestart: () => game.state === 'gameover' || game.state === 'win' || game.state === 'idle',
  getGpKeys: () => gpKeys,

  runningHint: '← → LOPEN | SPATIE SPRINGEN | SPRING OP VIJANDEN',

  handleKeydown(e) {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.code)) {
      e.preventDefault();
    }
  },
});

window.addEventListener('load', () => initLevelEditor(DEFAULT_LEVEL_DATA));
