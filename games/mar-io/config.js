export const DEFAULT_CONFIG = {
  // Mario physics
  gravity: 12,
  jumpForce: 10,
  runSpeed: 3,
  marioSize: 1,

  // World
  levelLength: 4,
  gapCount: 2,
  pipeCount: 3,
  platformCount: 4,
  coinCount: 15,

  // Enemies
  goombaCount: 5,
  koopaCount: 2,
  enemySpeed: 1,
  stompAction: 'squish',

  // Game rules
  startLives: 3,
  coinValue: 100,

  // Theme
  skyColor: '#5c94fc',
  groundColor: '#c84c0c',
  marioColor: '#e60000',
  blockColor: '#e6a817',
  pipeColor: '#00a800',
  enemyColor: '#c84c0c',
};

export function resetConfig() {
  window.GAME_CONFIG = { ...DEFAULT_CONFIG };
}

resetConfig();
