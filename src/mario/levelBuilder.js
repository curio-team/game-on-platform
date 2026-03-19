/**
 * Shared level-builder for the marIO games.
 *
 * Converts the JSON level format (tile coordinates) into the runtime world
 * object consumed by both mar-io and mar-io-advanced engines.
 *
 * @param {object} levelData   - JSON level (see src/mario/defaultLevel.js)
 * @param {number} TILE        - tile size in pixels (16)
 * @param {number} GROUND_Y    - canvas y where ground surface starts
 * @param {number} canvasWidth - game canvas width in pixels
 */
export function buildWorldFromJSON(levelData, TILE, GROUND_Y, canvasWidth) {
  const cfg = window.GAME_CONFIG;
  const screens = Math.max(2, Math.min(10, levelData.screens || 4));
  const levelW = screens * canvasWidth;
  const speed = Math.max(0.2, Math.min(5, cfg.enemySpeed || 1));

  const world = {
    width: levelW,
    groundGaps: [],
    blocks: [],
    pipes: [],
    enemies: [],
    coins: [],
    flagpole: { x: levelW - 80, y: GROUND_Y - 10 * TILE, height: 10 * TILE },
  };

  for (const g of (levelData.groundGaps || []))
    world.groundGaps.push({ x1: g.col * TILE, x2: (g.col + g.width) * TILE });

  for (const b of (levelData.blocks || []))
    world.blocks.push({ x: b.col * TILE, y: b.row * TILE, w: TILE, h: TILE, type: b.type, hit: false });

  for (const p of (levelData.pipes || [])) {
    const h = p.height * TILE;
    world.pipes.push({ x: p.col * TILE, y: GROUND_Y - h, w: TILE * 2, h });
  }

  for (const c of (levelData.coins || []))
    world.coins.push({ x: c.col * TILE + 4, y: c.row * TILE, collected: false });

  for (const e of (levelData.enemies || [])) {
    if (e.type === 'goomba') {
      world.enemies.push({
        x: e.col * TILE, y: GROUND_Y - TILE, w: TILE, h: TILE,
        type: 'goomba', vx: -speed, alive: true, frame: 0, squishTimer: 0,
      });
    } else if (e.type === 'koopa') {
      world.enemies.push({
        x: e.col * TILE, y: GROUND_Y - Math.round(TILE * 1.5),
        w: TILE, h: Math.round(TILE * 1.5),
        type: 'koopa', vx: -speed, alive: true, frame: 0, squishTimer: 0,
      });
    }
  }

  return world;
}
