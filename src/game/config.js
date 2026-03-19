export const DEFAULT_CONFIG = {
  gravity: 8,
  jumpForce: 12,
  birdSize: 20,
  pipeSpeed: 3,
  pipeGap: 130,
  pipeInterval: 90,
  startLives: 3,
  collisionAction: 'bounce',
  skyColor: '#1a1a4e',
  birdColor: '#ffdd00',
  pipeColor: '#39ff14',
};

export function resetConfig() {
  window.GAME_CONFIG = { ...DEFAULT_CONFIG };
}

// Ensure GAME_CONFIG exists as soon as this module is imported.
resetConfig();
