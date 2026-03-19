/**
 * Default level definition shared by marIO and marIO++.
 *
 * Coordinate system:
 *   col = x / 16  (tile column, left to right)
 *   row = y / 16  (tile row, top to bottom)
 *   Ground surface is at row 24 (GROUND_Y ≈ 388 px on a 420 px canvas).
 *   Playable rows: 0 – 23.
 */
export const DEFAULT_LEVEL_DATA = {
  screens: 4,

  // Ground gaps: {col, width} — tile columns without ground
  groundGaps: [
    { col: 19, width: 2 },
    { col: 38, width: 3 },
    { col: 61, width: 2 },
  ],

  // Floating blocks: {col, row, type} — type is 'brick' or 'question'
  blocks: [
    // Platform 1 — cols 7-9, row 19
    { col: 7, row: 19, type: 'brick' },
    { col: 8, row: 19, type: 'question' },
    { col: 9, row: 19, type: 'brick' },
    // Platform 2 — cols 23-24, row 18
    { col: 23, row: 18, type: 'question' },
    { col: 24, row: 18, type: 'brick' },
    // Platform 3 — cols 32-35, row 20
    { col: 32, row: 20, type: 'brick' },
    { col: 33, row: 20, type: 'question' },
    { col: 34, row: 20, type: 'question' },
    { col: 35, row: 20, type: 'brick' },
    // Platform 4 — cols 45-47, row 18
    { col: 45, row: 18, type: 'brick' },
    { col: 46, row: 18, type: 'question' },
    { col: 47, row: 18, type: 'brick' },
    // Platform 5 — cols 55-56, row 19
    { col: 55, row: 19, type: 'question' },
    { col: 56, row: 19, type: 'question' },
    // Platform 6 — cols 65-68, row 18
    { col: 65, row: 18, type: 'brick' },
    { col: 66, row: 18, type: 'question' },
    { col: 67, row: 18, type: 'brick' },
    { col: 68, row: 18, type: 'brick' },
    // Platform 7 — cols 76-77, row 20
    { col: 76, row: 20, type: 'question' },
    { col: 77, row: 20, type: 'brick' },
  ],

  // Pipes: {col, height} — left-edge column; height in tiles (sits on ground)
  pipes: [
    { col: 12, height: 3 },
    { col: 29, height: 2 },
    { col: 51, height: 4 },
    { col: 71, height: 3 },
  ],

  // Coins: {col, row}
  coins: [
    { col: 7, row: 17 }, { col: 8, row: 17 }, { col: 9, row: 17 },
    { col: 23, row: 16 },
    { col: 45, row: 16 }, { col: 46, row: 16 }, { col: 47, row: 16 },
    { col: 55, row: 17 }, { col: 56, row: 17 },
    { col: 65, row: 15 }, { col: 66, row: 15 }, { col: 67, row: 15 },
    // Ground-level coins
    { col: 26, row: 22 }, { col: 27, row: 22 },
    { col: 54, row: 22 },
    { col: 73, row: 22 }, { col: 74, row: 22 },
  ],

  // Enemies: {col, type} — placed at ground level; type is 'goomba' or 'koopa'
  enemies: [
    { col: 16, type: 'goomba' },
    { col: 26, type: 'goomba' },
    { col: 35, type: 'koopa' },
    { col: 44, type: 'goomba' },
    { col: 58, type: 'goomba' },
    { col: 63, type: 'goomba' },
    { col: 74, type: 'koopa' },
    { col: 79, type: 'goomba' },
  ],
};
