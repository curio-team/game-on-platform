import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

// ── Statement: game over ──────────────────────────────────────────────────────
Blockly.Blocks['game_game_over'] = {
  init() {
    this.appendDummyInput().appendField('💀 trigger game over');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false); // terminal block — nothing runs after this
    this.setColour('#7b5ea7');
    this.setTooltip('Ends the game immediately and shows the game-over screen.');
  },
};
javascriptGenerator.forBlock['game_game_over'] = () => `window.__game.over();\n`;

// ── Statement: lose a life ────────────────────────────────────────────────────
Blockly.Blocks['game_lose_life'] = {
  init() {
    this.appendDummyInput().appendField('❤️ lose a life');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Subtracts one life and makes the bird briefly invincible. Triggers game over when lives reach zero.');
  },
};
javascriptGenerator.forBlock['game_lose_life'] = () => `window.__game.loseLife();\n`;

// ── Statement: set lives ──────────────────────────────────────────────────────
Blockly.Blocks['game_set_lives'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('❤️ set lives to');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Set the starting number of lives. Put this inside "When game starts".');
  },
};
javascriptGenerator.forBlock['game_set_lives'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.__game.setLives(${val});\n`;
};

// ── Statement: add to score ───────────────────────────────────────────────────
Blockly.Blocks['game_add_score'] = {
  init() {
    this.appendValueInput('AMOUNT').setCheck('Number').appendField('🏆 add');
    this.appendDummyInput().appendField('to score');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Add bonus points to the score. (The score already increases automatically when passing pipes.)');
  },
};
javascriptGenerator.forBlock['game_add_score'] = (block, generator) => {
  const amount = generator.valueToCode(block, 'AMOUNT', Order.ATOMIC) || '1';
  return `window.__game.addScore(${amount});\n`;
};

// ── Value: score ──────────────────────────────────────────────────────────────
Blockly.Blocks['game_get_score'] = {
  init() {
    this.appendDummyInput().appendField('🏆 score');
    this.setOutput(true, 'Number');
    this.setColour('#7b5ea7');
    this.setTooltip('The current score.');
  },
};
javascriptGenerator.forBlock['game_get_score'] = () => [`window.__game.getScore()`, Order.FUNCTION_CALL];

// ── Value: lives ──────────────────────────────────────────────────────────────
Blockly.Blocks['game_get_lives'] = {
  init() {
    this.appendDummyInput().appendField('❤️ lives remaining');
    this.setOutput(true, 'Number');
    this.setColour('#7b5ea7');
    this.setTooltip('The number of lives the player has left.');
  },
};
javascriptGenerator.forBlock['game_get_lives'] = () => [`window.__game.getLives()`, Order.FUNCTION_CALL];

// ── Statement: spark effect ───────────────────────────────────────────────────
Blockly.Blocks['game_spark_effect'] = {
  init() {
    this.appendDummyInput().appendField('✨ spark effect at bird');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Bursts a shower of particles around the bird. Fun for celebrations!');
  },
};
javascriptGenerator.forBlock['game_spark_effect'] = () => `window.__game.spawnParticles();\n`;

// ── Value: frame number ───────────────────────────────────────────────────────
Blockly.Blocks['game_get_frame'] = {
  init() {
    this.appendDummyInput().appendField('⏱️ frame number');
    this.setOutput(true, 'Number');
    this.setColour('#e6a817');
    this.setTooltip('How many frames have passed since the game started. 60 frames ≈ 1 second.');
  },
};
javascriptGenerator.forBlock['game_get_frame'] = () => [`window.__game.getFrame()`, Order.FUNCTION_CALL];

// ── Statement: every N frames ─────────────────────────────────────────────────
Blockly.Blocks['game_every_n_frames'] = {
  init() {
    this.appendValueInput('FRAMES').setCheck('Number').appendField('⏱️ every');
    this.appendDummyInput().appendField('frames:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e6a817');
    this.setTooltip('Runs the inner blocks once every N game frames. 90 frames ≈ 1.5 seconds. Use this to spawn pipes.');
  },
};
javascriptGenerator.forBlock['game_every_n_frames'] = (block, generator) => {
  const frames = generator.valueToCode(block, 'FRAMES', Order.ATOMIC) || '60';
  const body = generator.statementToCode(block, 'DO');
  return `if (window.__game.getFrame() % ${frames} === 0) {\n${body}}\n`;
};
