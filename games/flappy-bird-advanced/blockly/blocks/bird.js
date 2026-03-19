import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

// ── Statement: apply gravity ──────────────────────────────────────────────────
Blockly.Blocks['bird_apply_gravity'] = {
  init() {
    this.appendValueInput('AMOUNT').setCheck('Number').appendField('🐦 apply gravity');
    this.appendDummyInput().appendField('(per frame, try 1.2)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e6a817');
    this.setTooltip('Adds to the bird\'s downward speed and moves it. Higher = falls faster. Call this every frame.');
  },
};
javascriptGenerator.forBlock['bird_apply_gravity'] = (block, generator) => {
  const amount = generator.valueToCode(block, 'AMOUNT', Order.ATOMIC) || '1.2';
  return `window.__bird.applyGravity(${amount});\n`;
};

// ── Statement: flap ───────────────────────────────────────────────────────────
Blockly.Blocks['bird_flap'] = {
  init() {
    this.appendValueInput('FORCE').setCheck('Number').appendField('🐦 bird flap with force');
    this.appendDummyInput().appendField('(try 12)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e6a817');
    this.setTooltip('Launches the bird upward. Higher force = jumps higher. Put this inside "When player taps".');
  },
};
javascriptGenerator.forBlock['bird_flap'] = (block, generator) => {
  const force = generator.valueToCode(block, 'FORCE', Order.ATOMIC) || '12';
  return `window.__bird.flap(${force});\n`;
};

// ── Boolean: bird hits a pipe ─────────────────────────────────────────────────
Blockly.Blocks['bird_is_colliding'] = {
  init() {
    this.appendDummyInput().appendField('🐦 bird hits a pipe');
    this.setOutput(true, 'Boolean');
    this.setColour('#e6a817');
    this.setTooltip('True when the bird overlaps with any pipe. Use inside an "if" block to trigger game over or lose a life.');
  },
};
javascriptGenerator.forBlock['bird_is_colliding'] = () => [`window.__bird.isColliding()`, Order.FUNCTION_CALL];

// ── Boolean: bird off screen ──────────────────────────────────────────────────
Blockly.Blocks['bird_is_out_of_bounds'] = {
  init() {
    this.appendDummyInput().appendField('🐦 bird off screen');
    this.setOutput(true, 'Boolean');
    this.setColour('#e6a817');
    this.setTooltip('True when the bird flies above the top edge or hits the ground.');
  },
};
javascriptGenerator.forBlock['bird_is_out_of_bounds'] = () => [`window.__bird.isOutOfBounds()`, Order.FUNCTION_CALL];

// ── Value: bird Y position ────────────────────────────────────────────────────
Blockly.Blocks['bird_get_y'] = {
  init() {
    this.appendDummyInput().appendField('🐦 bird Y position');
    this.setOutput(true, 'Number');
    this.setColour('#e6a817');
    this.setTooltip('Current vertical position of the bird in pixels (0 = top, 420 = bottom).');
  },
};
javascriptGenerator.forBlock['bird_get_y'] = () => [`window.__bird.getY()`, Order.FUNCTION_CALL];

// ── Value: bird vertical velocity ────────────────────────────────────────────
Blockly.Blocks['bird_get_velocity'] = {
  init() {
    this.appendDummyInput().appendField('🐦 bird vertical speed');
    this.setOutput(true, 'Number');
    this.setColour('#e6a817');
    this.setTooltip('Current vertical speed: negative = moving up, positive = moving down.');
  },
};
javascriptGenerator.forBlock['bird_get_velocity'] = () => [`window.__bird.getVelocity()`, Order.FUNCTION_CALL];
