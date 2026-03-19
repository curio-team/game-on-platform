import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['pipe_speed'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ set pipe speed to');
    this.appendDummyInput().appendField('(1 = slow, 10 = very fast)');
    this.setColour('#4a90d9');
    this.setTooltip('How fast the pipes move across the screen.');
  },
};
javascriptGenerator.forBlock['pipe_speed'] = function (block, generator) {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.GAME_CONFIG.pipeSpeed = ${val};\n`;
};

Blockly.Blocks['pipe_gap'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ set pipe gap to');
    this.appendDummyInput().appendField('(pixels, 80 = hard, 200 = easy)');
    this.setColour('#4a90d9');
    this.setTooltip('The gap between the top and bottom pipe. Bigger = easier.');
  },
};
javascriptGenerator.forBlock['pipe_gap'] = function (block, generator) {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '130';
  return `window.GAME_CONFIG.pipeGap = ${val};\n`;
};

Blockly.Blocks['pipe_interval'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ new pipe every');
    this.appendDummyInput().appendField('frames (60=1sec, 30=frequent)');
    this.setColour('#4a90d9');
    this.setTooltip('How often a new pipe appears. Lower = more pipes = harder.');
  },
};
javascriptGenerator.forBlock['pipe_interval'] = function (block, generator) {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '90';
  return `window.GAME_CONFIG.pipeInterval = ${val};\n`;
};
