import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

// ── Statement: spawn a pipe ───────────────────────────────────────────────────
Blockly.Blocks['pipe_spawn_now'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ spawn a new pipe');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Creates a new pipe pair at the right edge of the screen. Use inside "every N frames" to control frequency.');
  },
};
javascriptGenerator.forBlock['pipe_spawn_now'] = () => `window.__pipes.spawn();\n`;

// ── Statement: set pipe speed ─────────────────────────────────────────────────
Blockly.Blocks['pipe_set_speed'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ set pipe speed to');
    this.appendDummyInput().appendField('pixels/frame (try 3)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('How fast pipes scroll left. Higher = harder. Safe range: 1–10.');
  },
};
javascriptGenerator.forBlock['pipe_set_speed'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.__pipes.setSpeed(${val});\n`;
};

// ── Statement: set pipe gap ───────────────────────────────────────────────────
Blockly.Blocks['pipe_set_gap'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ set pipe gap to');
    this.appendDummyInput().appendField('pixels (80=hard, 200=easy)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('The vertical opening between the top and bottom pipe. Smaller = harder to fit through.');
  },
};
javascriptGenerator.forBlock['pipe_set_gap'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '130';
  return `window.__pipes.setGap(${val});\n`;
};

// ── Value: nearest pipe X ─────────────────────────────────────────────────────
Blockly.Blocks['nearest_pipe_x'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ nearest pipe X');
    this.setOutput(true, 'Number');
    this.setColour('#4a90d9');
    this.setTooltip('X position of the left edge of the nearest upcoming pipe. Useful for auto-pilot logic!');
  },
};
javascriptGenerator.forBlock['nearest_pipe_x'] = () => [`window.__pipes.getNearestX()`, Order.FUNCTION_CALL];

// ── Value: nearest pipe gap top ───────────────────────────────────────────────
Blockly.Blocks['nearest_pipe_gap_top'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ nearest pipe gap top Y');
    this.setOutput(true, 'Number');
    this.setColour('#4a90d9');
    this.setTooltip('Y position of the top of the opening in the nearest pipe.');
  },
};
javascriptGenerator.forBlock['nearest_pipe_gap_top'] = () => [`window.__pipes.getGapTop()`, Order.FUNCTION_CALL];

// ── Value: nearest pipe gap bottom ───────────────────────────────────────────
Blockly.Blocks['nearest_pipe_gap_bottom'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ nearest pipe gap bottom Y');
    this.setOutput(true, 'Number');
    this.setColour('#4a90d9');
    this.setTooltip('Y position of the bottom of the opening in the nearest pipe.');
  },
};
javascriptGenerator.forBlock['nearest_pipe_gap_bottom'] = () => [`window.__pipes.getGapBottom()`, Order.FUNCTION_CALL];
