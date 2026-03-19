export const DEFAULT_CONFIG = {
  maxNumber: 100,     // secret is in range [1, maxNumber]
  maxAttempts: 10,      // guesses allowed before losing
  hintStyle: 'basic', // 'basic' | 'temperature' | 'none'
  bgColor: '#0d0d2a',
  accentColor: '#ffdd00',
};

export function resetConfig() {
  window.GAME_CONFIG = { ...DEFAULT_CONFIG };
}

resetConfig();
