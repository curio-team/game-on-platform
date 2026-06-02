let _ctx = null;

function getCtx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (_ctx.state === 'suspended') _ctx.resume().catch(() => {});
  return _ctx;
}

/**
 * Play a synthesized tone via Web Audio API.
 * @param {number} freq      - Start frequency in Hz (20–20000)
 * @param {number} duration  - Duration in milliseconds
 * @param {string} waveType  - 'sine' | 'square' | 'sawtooth' | 'triangle'
 * @param {number|null} freqEnd - End frequency for a sweep (null = flat tone)
 * @param {number} volume    - Volume 0–1 (default 0.25)
 */
export function playSound(freq = 440, duration = 200, waveType = 'square', freqEnd = null, volume = 0.25) {
  try {
    const ctx = getCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const validTypes = ['sine', 'square', 'sawtooth', 'triangle'];
    osc.type = validTypes.includes(waveType) ? waveType : 'square';
    osc.frequency.setValueAtTime(Math.max(20, +freq || 440), now);
    if (freqEnd !== null) {
      osc.frequency.linearRampToValueAtTime(Math.max(20, +freqEnd), now + duration / 1000);
    }

    const dur = Math.max(0.01, duration / 1000);
    const vol = Math.max(0, Math.min(1, +volume || 0.25));
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(vol, now + Math.min(0.005, dur / 2));
    gain.gain.setValueAtTime(vol, now + Math.max(dur - 0.02, dur / 2));
    gain.gain.linearRampToValueAtTime(0, now + dur);

    osc.start(now);
    osc.stop(now + dur + 0.01);
  } catch (_) {
    // Silently fail — Web Audio unavailable or browser autoplay policy
  }
}

export const Sounds = {
  flap:      () => playSound(600, 100, 'square', 300, 0.2),
  jump:      () => playSound(500, 130, 'square', 900, 0.2),
  score:     () => playSound(880, 120, 'sine', 1320, 0.25),
  coin:      () => playSound(1320, 80, 'sine', 1760, 0.25),
  stomp:     () => playSound(250, 100, 'square', 60, 0.3),
  collision: () => playSound(200, 250, 'sawtooth', 60, 0.3),
  hurt:      () => playSound(350, 250, 'square', 100, 0.3),
  blockHit:  () => playSound(400, 80, 'square', 600, 0.2),
  tooHigh:   () => playSound(660, 150, 'sine', 440, 0.2),
  tooLow:    () => playSound(440, 150, 'sine', 660, 0.2),
  correct:   () => {
    playSound(523, 100, 'sine');
    setTimeout(() => playSound(659, 100, 'sine'), 100);
    setTimeout(() => playSound(1047, 250, 'sine'), 200);
  },
  gameOver: () => {
    playSound(400, 180, 'sine', 280);
    setTimeout(() => playSound(280, 180, 'sine', 180), 200);
    setTimeout(() => playSound(180, 350, 'sine', 80), 400);
  },
  win: () => {
    [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => playSound(f, 130, 'sine'), i * 110));
  },
};

// Expose for Blockly-generated code evaluated via eval()
window.__sound = { play: playSound };
