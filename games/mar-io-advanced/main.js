import '/src/styles/main.css';
import './blockly/blocks/index.js';

import { toolboxConfig, DEFAULT_WORKSPACE_XML } from './blockly/toolbox.js';
import { resetConfig } from './config.js';
import { game, initGame, gameLoop, drawIdleScreen, handleJump } from './engine.js';
import { initPlatform } from '/src/platform.js';
import { DEFAULT_LEVEL_DATA } from '/src/mario/defaultLevel.js';
import { initLevelEditor } from '/src/levelEditor.js';

initPlatform({
  toolboxConfig,
  defaultWorkspaceXML: DEFAULT_WORKSPACE_XML,

  resetConfig,
  clampConfig() {
    // Theme-only config — no physics to clamp (those are in Blockly now)
  },

  initGame,
  gameLoop,
  stopGame() { game.running = false; game.state = 'idle'; drawIdleScreen(); },
  drawIdleScreen,

  handleInput: () => handleJump(),
  isRunning: () => game.running,
  canRestart: () => game.state === 'gameover' || game.state === 'win' || game.state === 'idle',

  runningHint: '← → LOPEN | SPATIE SPRINGEN | SPRING OP VIJANDEN',

  handleKeydown(e) {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.code)) {
      e.preventDefault();
    }
  },
});

window.addEventListener('load', () => initLevelEditor(DEFAULT_LEVEL_DATA));
