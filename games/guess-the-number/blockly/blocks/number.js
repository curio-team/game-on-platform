import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['guess_range'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🔢 number range: 1 to');
    this.appendDummyInput().appendField('(10 = easy, 1000 = hard)');
    this.setColour('#7b5ea7');
    this.setTooltip('The secret number will be picked from 1 up to this value.');
  },
};
javascriptGenerator.forBlock['guess_range'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '100';
  return `window.GAME_CONFIG.maxNumber = ${val};\n`;
};

Blockly.Blocks['guess_attempts'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🎮 max guesses');
    this.appendDummyInput().appendField('(3 = brutal, 20 = easy)');
    this.setColour('#7b5ea7');
    this.setTooltip('How many guesses the player gets before losing.');
  },
};
javascriptGenerator.forBlock['guess_attempts'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '10';
  return `window.GAME_CONFIG.maxAttempts = ${val};\n`;
};
