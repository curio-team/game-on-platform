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
  const origin = window.location.origin;
  const isPopout = new URLSearchParams(window.location.search).get('popout') === '1';

  const MSG = {
    READY: 'POP_OUT_READY',
    RUN_CODE: 'POP_OUT_RUN_CODE',
    REQUEST_CODE: 'POP_OUT_REQUEST_CODE',
    PROVIDE_CODE: 'POP_OUT_PROVIDE_CODE',
    HOT_RELOAD_CODE: 'POP_OUT_HOT_RELOAD_CODE',
    STOP: 'POP_OUT_STOP',
    STATE: 'POP_OUT_STATE',
    INPUT_PRIMARY: 'POP_OUT_INPUT_PRIMARY',
    INPUT_CANVAS_CLICK: 'POP_OUT_INPUT_CANVAS_CLICK',
  };

  let initialRunText = '';
  let initialHintText = '';

  // Main window (not popout): keeps the popup reference + state.
  let popoutWindow = null;
  let popoutReady = false;
  let popoutRunning = false;
  let pendingRunCode = null;
  let pendingHotReloadCode = null;
  let hotReloadTimer = null;
  const HOT_RELOAD_DEBOUNCE_MS = 250;

  // Popout window: remembers the last generated code so its Run button works.
  let lastReceivedCode = null;
  let pendingRunAfterCode = false;

  function setRunningUI() {
    const runBtn = document.getElementById('runBtn');
    const hintText = document.getElementById('hintText');
    if (!runBtn || !hintText) return;
    runBtn.textContent = '⏹ STOP';
    runBtn.classList.add('running');
    hintText.textContent = gamePlugin.runningHint || 'SPEL IS BEZIG';
  }

  function setIdleUI() {
    const runBtn = document.getElementById('runBtn');
    const hintText = document.getElementById('hintText');
    if (!runBtn || !hintText) return;
    runBtn.textContent = initialRunText || '▶ START SPEL';
    runBtn.classList.remove('running');
    hintText.textContent = initialHintText || '▶ DRUK OP START SPEL OM TE BEGINNEN';
  }

  function notifyOpenerState(running) {
    if (!isPopout) return;
    try {
      if (window.opener && !window.opener.closed) {
        window.opener.postMessage({ type: MSG.STATE, running }, origin);
      }
    } catch {
      // ignore (opener might be gone / blocked)
    }
  }

  function applyCodeAndRun(code) {
    gamePlugin.resetConfig();
    try {
      // eslint-disable-next-line no-eval
      eval(code);
      const codeOutput = document.getElementById('codeOutput');
      if (codeOutput) codeOutput.innerHTML = formatCode(code);
    } catch (e) {
      console.warn('Block code error:', e);
    }

    gamePlugin.clampConfig();
    gamePlugin.initGame();
    gamePlugin.gameLoop();
    setRunningUI();
    notifyOpenerState(true);
  }

  function applyCodeHotReload(code) {
    // Hot reload while the game is already running:
    // - resetConfig() ensures hook arrays don't accumulate duplicates
    // - eval(code) re-registers window.GAME_CONFIG and __gameHooks
    // - clampConfig() makes the values safe
    gamePlugin.resetConfig();
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (e) {
      console.warn('Hot reload code error:', e);
    }
    gamePlugin.clampConfig();
  }

  function applyAndRunFromWorkspace() {
    const code = javascriptGenerator.workspaceToCode(getWorkspace());
    applyCodeAndRun(code);
  }

  function stopLocalGame() {
    gamePlugin.stopGame();
    setIdleUI();
    notifyOpenerState(false);
  }

  function popoutActive() {
    return !isPopout && popoutWindow && !popoutWindow.closed;
  }

  function sendToPopout(msg) {
    if (!popoutActive()) return false;
    try {
      popoutWindow.postMessage(msg, origin);
      return true;
    } catch {
      return false;
    }
  }

  function sendToOpener(msg) {
    if (isPopout) {
      try {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage(msg, origin);
          return true;
        }
      } catch {
        // ignore
      }
    }
    return false;
  }

  function requestCodeFromOpener() {
    pendingRunAfterCode = true;
    const hintText = document.getElementById('hintText');
    if (hintText) hintText.textContent = 'WACHT OP CODE...';
    sendToOpener({ type: MSG.REQUEST_CODE });
  }

  function getScaledOffsets(canvasEl, mouseEvent) {
    const rect = canvasEl.getBoundingClientRect();
    const scaleX = rect.width ? canvasEl.width / rect.width : 1;
    const scaleY = rect.height ? canvasEl.height / rect.height : 1;
    const clientX = mouseEvent?.clientX ?? rect.left;
    const clientY = mouseEvent?.clientY ?? rect.top;
    return {
      offsetX: Math.max(0, Math.min(canvasEl.width, (clientX - rect.left) * scaleX)),
      offsetY: Math.max(0, Math.min(canvasEl.height, (clientY - rect.top) * scaleY)),
    };
  }

  function fitCanvasToViewport() {
    if (!isPopout) return;
    const canvasEl = document.getElementById('gameCanvas');
    if (!canvasEl) return;
    const panel = document.querySelector('.game-panel');
    if (!panel) return;

    const panelStyle = window.getComputedStyle(panel);
    const paddingLeft = parseFloat(panelStyle.paddingLeft || '0') || 0;
    const paddingRight = parseFloat(panelStyle.paddingRight || '0') || 0;
    const paddingTop = parseFloat(panelStyle.paddingTop || '0') || 0;
    const paddingBottom = parseFloat(panelStyle.paddingBottom || '0') || 0;
    const gap = parseFloat(panelStyle.gap || '0') || 0;

    const panelW = panel.clientWidth - paddingLeft - paddingRight;
    const panelH = panel.clientHeight - paddingTop - paddingBottom;
    if (!(panelW > 0 && panelH > 0)) return;

    const panelLabel = panel.querySelector('.panel-label');
    const gameInfo = panel.querySelector('.game-info');
    const hintEl = panel.querySelector('#hintText')?.closest('.hint') || panel.querySelector('.hint');

    const labelH = panelLabel ? panelLabel.getBoundingClientRect().height : 0;
    const infoH = gameInfo ? gameInfo.getBoundingClientRect().height : 0;
    const hintH = hintEl ? hintEl.getBoundingClientRect().height : 0;

    const otherCount =
      (panelLabel ? 1 : 0) +
      (gameInfo ? 1 : 0) +
      (hintEl ? 1 : 0);
    const totalChildCount = 1 /* canvas */ + otherCount;
    const gapsH = Math.max(0, totalChildCount - 1) * gap;

    const availableHForCanvas = panelH - labelH - infoH - hintH - gapsH;
    if (!(availableHForCanvas > 0)) return;

    const scale = Math.max(
      0.01,
      Math.min(panelW / canvasEl.width, availableHForCanvas / canvasEl.height)
    );

    canvasEl.style.width = `${canvasEl.width * scale}px`;
    canvasEl.style.height = `${canvasEl.height * scale}px`;
  }

  window.addEventListener('load', () => {
    initBlockly(gamePlugin.toolboxConfig, gamePlugin.defaultWorkspaceXML);
    gamePlugin.drawIdleScreen();

    // Hot reload: while the game is running, apply new Blockly parameters/hooks
    // whenever the workspace changes (debounced).
    if (!isPopout) {
      const ws = getWorkspace();
      if (ws?.addChangeListener) {
        ws.addChangeListener(() => {
          // Debounce rapid drag/connect actions.
          if (hotReloadTimer) clearTimeout(hotReloadTimer);
          hotReloadTimer = setTimeout(() => {
            hotReloadTimer = null;

            const runningInPopout = popoutActive() && popoutRunning;
            const runningLocally = gamePlugin.isRunning();
            if (!runningInPopout && !runningLocally) return;

            let code = null;
            try {
              code = javascriptGenerator.workspaceToCode(getWorkspace());
            } catch (e) {
              console.warn('Hot reload code generation error:', e);
              return;
            }

            if (runningInPopout) {
              if (popoutReady) sendToPopout({ type: MSG.HOT_RELOAD_CODE, code });
              else pendingHotReloadCode = code;
            } else if (runningLocally) {
              applyCodeHotReload(code);
              const codeOutput = document.getElementById('codeOutput');
              if (codeOutput) codeOutput.innerHTML = formatCode(code);
            }
          }, HOT_RELOAD_DEBOUNCE_MS);
        });
      }
    }

    const runBtnEl = document.getElementById('runBtn');
    const hintTextEl = document.getElementById('hintText');
    initialRunText = runBtnEl?.textContent ?? '';
    initialHintText = hintTextEl?.textContent ?? '';

    if (isPopout) {
      document.body.classList.add('popout-mode');
      // Blockly stays in the DOM but we don't want it visible in the popout.
      const codePanel = document.querySelector('.code-panel');
      if (codePanel) codePanel.style.display = 'none';

      // First layout pass: fit the canvas without distorting aspect ratio.
      requestAnimationFrame(() => {
        fitCanvasToViewport();
      });
    } else {
      // Inject a Pop-out button next to the existing Run button.
      let popoutBtn = document.getElementById('popoutBtn');
      if (!popoutBtn) {
        popoutBtn = document.createElement('button');
        popoutBtn.id = 'popoutBtn';
        popoutBtn.className = 'popout-btn';
        popoutBtn.type = 'button';
        popoutBtn.textContent = '↗ POP-UIT';
        runBtnEl?.insertAdjacentElement('afterend', popoutBtn);
      }

      const openPopout = () => {
        if (popoutWindow && !popoutWindow.closed) {
          popoutWindow.focus();
          return;
        }

        // Stop any local loop to avoid double-running.
        if (gamePlugin.isRunning()) stopLocalGame();

        popoutReady = false;
        popoutRunning = false;
        pendingRunCode = null;
        pendingHotReloadCode = null;

        const url = new URL(window.location.href);
        url.searchParams.set('popout', '1');

        // Note: no noopener here; we need window.opener messaging.
        popoutWindow = window.open(
          url.toString(),
          'game-on-platform-popout',
          'width=980,height=760'
        );

        if (!popoutWindow) return; // popup blocked
        popoutWindow.focus();
        setIdleUI();
      };

      popoutBtn?.addEventListener('click', openPopout);

      // Receive popout status and "ready" signals.
      window.addEventListener('message', (event) => {
        if (event.origin !== origin) return;
        if (!popoutWindow || event.source !== popoutWindow) return;
        const msg = event.data;
        if (!msg || typeof msg !== 'object') return;

        if (msg.type === MSG.READY) {
          popoutReady = true;
          // If blocks changed during the handshake, prefer the most recent code.
          const codeToRun = pendingHotReloadCode ?? pendingRunCode;
          pendingRunCode = null;
          pendingHotReloadCode = null;
          if (codeToRun) sendToPopout({ type: MSG.RUN_CODE, code: codeToRun });
          return;
        }

        if (msg.type === MSG.STATE) {
          popoutRunning = !!msg.running;
          if (popoutRunning) setRunningUI(); else setIdleUI();
        }

        // Popout can request latest Blockly code (e.g. when user presses Run only in popout).
        if (msg.type === MSG.REQUEST_CODE) {
          try {
            const code = javascriptGenerator.workspaceToCode(getWorkspace());
            popoutWindow.postMessage({ type: MSG.PROVIDE_CODE, code }, origin);
          } catch (e) {
            console.warn('Code request error:', e);
          }
        }

        if (msg.type === MSG.HOT_RELOAD_CODE) {
          // Main never receives this; popout receives hot reload messages.
          return;
        }
      });
    }

    document.getElementById('tabBlocks').addEventListener('click', () => showTab('blocks'));
    document.getElementById('tabCode').addEventListener('click', () => showTab('code'));
    if (document.getElementById('tabLevel')) {
      document.getElementById('tabLevel').addEventListener('click', () => showTab('level'));
    }

    if (isPopout) {
      // Popout receives commands from the main window.
      window.addEventListener('message', (event) => {
        if (event.origin !== origin) return;
        const msg = event.data;
        if (!msg || typeof msg !== 'object') return;

        if (msg.type === MSG.RUN_CODE) {
          lastReceivedCode = msg.code;
          pendingRunAfterCode = false;
          applyCodeAndRun(lastReceivedCode);
          return;
        }
        if (msg.type === MSG.HOT_RELOAD_CODE) {
          // Apply updated parameters/hooks without resetting world/state.
          if (gamePlugin.isRunning && gamePlugin.isRunning()) {
            applyCodeHotReload(msg.code);
          }
          return;
        }
        if (msg.type === MSG.PROVIDE_CODE) {
          lastReceivedCode = msg.code;
          if (pendingRunAfterCode && !gamePlugin.isRunning()) {
            pendingRunAfterCode = false;
            applyCodeAndRun(lastReceivedCode);
          }
          return;
        }
        if (msg.type === MSG.STOP) {
          if (gamePlugin.isRunning()) stopLocalGame();
          return;
        }
        if (msg.type === MSG.INPUT_PRIMARY) {
          if (gamePlugin.isRunning()) gamePlugin.handleInput(null);
          return;
        }
        if (msg.type === MSG.INPUT_CANVAS_CLICK) {
          if (gamePlugin.isRunning()) {
            const e = { offsetX: msg.offsetX, offsetY: msg.offsetY };
            gamePlugin.handleInput(e);
          }
        }
      });

      // Tell the opener we are ready to accept RUN_CODE messages.
      try {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage({ type: MSG.READY }, origin);
        }
      } catch {
        // ignore
      }
    }

    document.getElementById('runBtn').addEventListener('click', () => {
      if (isPopout) {
        if (gamePlugin.isRunning()) stopLocalGame();
        else if (lastReceivedCode) applyCodeAndRun(lastReceivedCode);
        else requestCodeFromOpener();
        return;
      }

      if (popoutActive()) {
        if (popoutRunning) {
          sendToPopout({ type: MSG.STOP });
          popoutRunning = false;
          pendingHotReloadCode = null;
          setIdleUI();
          return;
        }

        pendingHotReloadCode = null;
        const code = javascriptGenerator.workspaceToCode(getWorkspace());
        const codeOutput = document.getElementById('codeOutput');
        if (codeOutput) codeOutput.innerHTML = formatCode(code);

        // We only send once the popout told us it is ready.
        if (!popoutReady) pendingRunCode = code;
        else sendToPopout({ type: MSG.RUN_CODE, code });

        popoutRunning = true;
        setRunningUI();
        popoutWindow?.focus?.();
        return;
      }

      if (gamePlugin.isRunning()) stopLocalGame(); else applyAndRunFromWorkspace();
    });

    document.getElementById('gameCanvas').addEventListener('click', (e) => {
      if (popoutActive()) {
        if (popoutRunning) {
          const canvasEl = document.getElementById('gameCanvas');
          const scaled = getScaledOffsets(canvasEl, e);
          sendToPopout({
            type: MSG.INPUT_CANVAS_CLICK,
            offsetX: scaled.offsetX,
            offsetY: scaled.offsetY,
          });
        } else {
          document.getElementById('runBtn').click();
        }
        return;
      }

      if (gamePlugin.isRunning()) {
        const canvasEl = document.getElementById('gameCanvas');
        const scaled = getScaledOffsets(canvasEl, e);
        gamePlugin.handleInput({ offsetX: scaled.offsetX, offsetY: scaled.offsetY });
      }
      else document.getElementById('runBtn').click();
    });

    document.addEventListener('keydown', (e) => {
      if (popoutActive()) {
        // Only "primary" input (Space) is forwarded in main-window mode.
        // Arrow keys are handled once focus is in the popout window.
        if (e.code === 'Space') {
          e.preventDefault();
          if (popoutRunning) sendToPopout({ type: MSG.INPUT_PRIMARY });
          else document.getElementById('runBtn').click();
        }
        return;
      }

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

    if (isPopout) {
      window.addEventListener('resize', () => fitCanvasToViewport());
      // In case fonts load and change layout.
      setTimeout(() => fitCanvasToViewport(), 200);
    }

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
      // In main-window mode, we let the popout handle controller input.
      if (!isPopout && popoutActive()) {
        requestAnimationFrame(poll);
        return;
      }

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
