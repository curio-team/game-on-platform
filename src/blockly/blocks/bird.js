import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['bird_gravity'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🐦 set gravity to');
    this.appendDummyInput().appendField('(1 = floaty, 20 = heavy)');
    this.setColour('#e6a817');
    this.setTooltip('Controls how fast the bird falls. Low = floaty, High = heavy.');
  },
};
javascriptGenerator.forBlock['bird_gravity'] = function (block, generator) {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '8';
  return `window.GAME_CONFIG.gravity = ${val};\n`;
};

Blockly.Blocks['bird_jump'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🐦 set jump strength to');
    this.appendDummyInput().appendField('(1 = weak, 20 = super jump)');
    this.setColour('#e6a817');
    this.setTooltip('How high the bird jumps when you click or press space.');
  },
};
javascriptGenerator.forBlock['bird_jump'] = function (block, generator) {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '12';
  return `window.GAME_CONFIG.jumpForce = ${val};\n`;
};

Blockly.Blocks['bird_size'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🐦 set bird size to');
    this.appendDummyInput().appendField('(pixels, default 20)');
    this.setColour('#e6a817');
    this.setTooltip('Size of the bird in pixels.');
  },
};
javascriptGenerator.forBlock['bird_size'] = function (block, generator) {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '20';
  return `window.GAME_CONFIG.birdSize = ${val};\n`;
};
