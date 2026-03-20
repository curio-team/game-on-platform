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
    document.getElementById('hintText').textContent = gamePlugin.runningHint || 'SPEL IS BEZIG';
  }

  function stopGame() {
    gamePlugin.stopGame();
    document.getElementById('runBtn').textContent = '▶ START SPEL';
    document.getElementById('runBtn').classList.remove('running');
    document.getElementById('hintText').textContent = '▶ DRUK OP START SPEL OM TE BEGINNEN';
  }

  window.addEventListener('load', () => {
    initBlockly(gamePlugin.toolboxConfig, gamePlugin.defaultWorkspaceXML);
    gamePlugin.drawIdleScreen();

    document.getElementById('tabBlocks').addEventListener('click', () => showTab('blocks'));
    document.getElementById('tabCode').addEventListener('click', () => showTab('code'));
    if (document.getElementById('tabLevel')) {
      document.getElementById('tabLevel').addEventListener('click', () => showTab('level'));
    }

    document.getElementById('runBtn').addEventListener('click', () => {
      if (gamePlugin.isRunning()) stopGame(); else applyAndRun();
    });

    document.getElementById('gameCanvas').addEventListener('click', (e) => {
      if (gamePlugin.isRunning()) {
        gamePlugin.handleInput(e);
      } else {
        document.getElementById('runBtn').click();
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
          document.getElementById('runBtn').click();
        }
      }
    });

    window.addEventListener('resize', () => {
      const ws = getWorkspace();
      if (ws) Blockly.svgResize(ws);
    });

    startGamepadPolling();
  });

  // ── Gamepad / XInput support ──────────────────────────────────────────────
  // Uses the Web Gamepad API (navigator.getGamepads) which covers XInput
  // controllers (Xbox, etc.) as well as most other USB/Bluetooth gamepads.
  //
  // Button mapping (Standard Gamepad layout):
  //   0  = A (South)       → primary action / jump / flap / submit
  //   1  = B (East)        → same as A (alternate jump/flap)
  //   9  = Start           → toggle start/stop game
  //   12 = D-pad Up        → jump (mario)
  //   14 = D-pad Left      → move left / decrease guess
  //   15 = D-pad Right     → move right / increase guess
  //   Axis 0 = Left stick horizontal
  //
  // For mario-style engines the plugin exposes getGpKeys() which returns a
  // reference to a separate `gpKeys` map that is OR-ed with game.keys inside
  // the engine each frame — this way keyboard and gamepad never interfere.
  function startGamepadPolling() {
    const DEADZONE = 0.4;
    let prevBtns = null;
    let prevAxisLeft = false;
    let prevAxisRight = false;

    function poll() {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      const gp = Array.from(gamepads).find(g => g && g.connected);

      if (gp) {
        const cur = gp.buttons.map(b => (typeof b === 'object' ? b.pressed : b > 0.5));

        // Reset prev state on first connect or if button count changes
        if (!prevBtns || prevBtns.length !== cur.length) {
          prevBtns = cur.map(() => false);
        }

        const axisH = gp.axes[0] ?? 0;
        const curLeft = cur[14] || axisH < -DEADZONE;
        const curRight = cur[15] || axisH > DEADZONE;
        const curJump = cur[0] || cur[1] || cur[12]; // A, B, or D-pad Up

        const prevLeft = prevBtns[14] || prevAxisLeft;
        const prevRight = prevBtns[15] || prevAxisRight;

        const justBtnPressed = (i) => cur[i] && !prevBtns[i];
        const justLeft = curLeft && !prevLeft;
        const justRight = curRight && !prevRight;

        // Start button: toggle game
        if (justBtnPressed(9)) {
          document.getElementById('runBtn').click();
        }

        // Mario-style engines expose getGpKeys() — write continuous state each frame
        const gpKeys = gamePlugin.getGpKeys?.();
        if (gpKeys) {
          gpKeys['ArrowLeft'] = curLeft;
          gpKeys['KeyA'] = curLeft;
          gpKeys['ArrowRight'] = curRight;
          gpKeys['KeyD'] = curRight;
          gpKeys['Space'] = curJump;
          gpKeys['ArrowUp'] = curJump;
          gpKeys['KeyW'] = curJump;
        }

        // A/B button: start game when not running (all game types)
        if ((justBtnPressed(0) || justBtnPressed(1)) && !gamePlugin.isRunning()) {
          document.getElementById('runBtn').click();
        }

        // A/B button: primary action while running (all game types)
        // - Flappy: flap  - Guess: submit  - Mario: jump (handleJump checks grounded)
        // - Mar-io advanced: fires onJump Blockly hooks
        if ((justBtnPressed(0) || justBtnPressed(1)) && gamePlugin.isRunning()) {
          gamePlugin.handleInput(null);
        }

        // D-pad / analog stick edges for guess-the-number arrow navigation
        if (!gpKeys && gamePlugin.isRunning() && gamePlugin.handleKeydown) {
          const fakeEvt = (code) => ({ code, preventDefault() { } });
          if (justLeft) gamePlugin.handleKeydown(fakeEvt('ArrowLeft'));
          if (justRight) gamePlugin.handleKeydown(fakeEvt('ArrowRight'));
        }

        prevAxisLeft = axisH < -DEADZONE;
        prevAxisRight = axisH > DEADZONE;
        prevBtns = cur;
      }

      requestAnimationFrame(poll);
    }

    requestAnimationFrame(poll);
  }
}
