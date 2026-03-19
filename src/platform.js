/**
 * Shared platform bootstrapper.
 *
 * Each game's main.js calls `initPlatform(gamePlugin)` with a plugin object
 * that satisfies this interface:
 *
 *   gamePlugin = {
 *     toolboxConfig        – Blockly toolbox config object
 *     defaultWorkspaceXML  – XML string for the initial Blockly workspace
 *     resetConfig()        – resets window.GAME_CONFIG to game defaults
 *     clampConfig()        – clamps window.GAME_CONFIG to safe ranges after eval
 *     initGame()           – resets game state (called before gameLoop)
 *     gameLoop()           – starts the canvas render/update loop
 *     stopGame()           – halts the loop (sets internal running=false)
 *     drawIdleScreen()     – renders the idle/splash canvas frame
 *     handleInput(e)       – called on canvas-click (MouseEvent) or Space (null)
 *                            during gameplay; games interpret e.offsetX for zones
 *     isRunning()          – returns boolean: is the game loop active?
 *     canRestart()         – returns boolean: can the player restart from canvas?
 *     runningHint          – string shown in the hint bar while the game runs
 *     handleKeydown?(e)    – optional: game-specific keydown handler (arrow keys etc.)
 *   }
 */

import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { initBlockly, getWorkspace } from './blockly/setup.js';
import { showTab } from './tabs.js';
import { formatCode } from './ui.js';

export function initPlatform(gamePlugin) {

  function applyAndRun() {
    gamePlugin.resetConfig();
    try {
      const code = javascriptGenerator.workspaceToCode(getWorkspace());
      // eval executes Blockly-generated `window.GAME_CONFIG.x = value` assignments
      // eslint-disable-next-line no-eval
      eval(code);
      document.getElementById('codeOutput').innerHTML = formatCode(code);
    } catch (e) { console.warn('Block code error:', e); }

    gamePlugin.clampConfig();
    gamePlugin.initGame();
    gamePlugin.gameLoop();

    document.getElementById('runBtn').textContent = '⏹ STOP';
    document.getElementById('runBtn').classList.add('running');
    document.getElementById('hintText').textContent = gamePlugin.runningHint || 'GAME IS RUNNING';
  }

  function stopGame() {
    gamePlugin.stopGame();
    document.getElementById('runBtn').textContent = '▶ RUN GAME';
    document.getElementById('runBtn').classList.remove('running');
    document.getElementById('hintText').textContent = '▶ PRESS RUN GAME TO START';
  }

  function handleCanvasInteraction() {
    if (gamePlugin.canRestart()) {
      gamePlugin.initGame();
      gamePlugin.gameLoop();
      document.getElementById('runBtn').textContent = '⏹ STOP';
      document.getElementById('runBtn').classList.add('running');
      document.getElementById('hintText').textContent = gamePlugin.runningHint || 'GAME IS RUNNING';
    }
  }

  window.addEventListener('load', () => {
    initBlockly(gamePlugin.toolboxConfig, gamePlugin.defaultWorkspaceXML);
    gamePlugin.drawIdleScreen();

    document.getElementById('tabBlocks').addEventListener('click', () => showTab('blocks'));
    document.getElementById('tabCode').addEventListener('click', () => showTab('code'));

    document.getElementById('runBtn').addEventListener('click', () => {
      if (gamePlugin.isRunning()) stopGame(); else applyAndRun();
    });

    document.getElementById('gameCanvas').addEventListener('click', (e) => {
      if (gamePlugin.isRunning()) {
        gamePlugin.handleInput(e);
      } else {
        handleCanvasInteraction();
      }
    });

    document.addEventListener('keydown', (e) => {
      // Forward all keys to the game first (arrow keys, Enter, etc.)
      if (gamePlugin.handleKeydown) gamePlugin.handleKeydown(e);

      // Space = universal start / primary input
      if (e.code === 'Space') {
        e.preventDefault();
        if (gamePlugin.isRunning()) {
          gamePlugin.handleInput(null);
        } else {
          handleCanvasInteraction();
        }
      }
    });

    window.addEventListener('resize', () => {
      const ws = getWorkspace();
      if (ws) Blockly.svgResize(ws);
    });
  });
}
