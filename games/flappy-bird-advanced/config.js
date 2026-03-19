export const DEFAULT_CONFIG = {
  pipeSpeed: 3,
  pipeGap: 130,
  birdSize: 20,
  skyColor: '#1a1a4e',
  birdColor: '#ffdd00',
  pipeColor: '#39ff14',
};

export function resetConfig() {
  window.GAME_CONFIG = { ...DEFAULT_CONFIG };
  // Reset all Blockly game hooks
  window.__gameHooks = { onStart: [], onFrame: [], onFlap: [], onScore: [] };
}

resetConfig();
