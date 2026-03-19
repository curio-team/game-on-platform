export const DEFAULT_CONFIG = {
  // These are lightweight defaults; the advanced version expects Blockly to set most values.
  birdSize: 20,
  skyColor: '#5c94fc',
  groundColor: '#c84c0c',
  marioColor: '#e60000',
  blockColor: '#e6a817',
  pipeColor: '#00a800',
  enemyColor: '#c84c0c',
};

export function resetConfig() {
  window.GAME_CONFIG = { ...DEFAULT_CONFIG };
  window.__gameHooks = {
    onStart: [],
    onFrame: [],
    onJump: [],
    onStomp: [],
    onHurt: [],
    onCoinCollect: [],
    onBlockHit: [],
    onReachFlag: [],
    onFallInPit: [],
  };
}

resetConfig();
