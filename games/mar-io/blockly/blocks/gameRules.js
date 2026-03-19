import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['rules_lives'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🎮 startlevens');
    this.appendDummyInput().appendField('(1 = hardcore, 5 = relaxed)');
    this.setColour('#7b5ea7');
    this.setTooltip('Aantal levens bij de start.');
  },
};
javascriptGenerator.forBlock['rules_lives'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.GAME_CONFIG.startLives = ${val};\n`;
};

Blockly.Blocks['rules_coin_value'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🎮 muntwaarde');
    this.appendDummyInput().appendField('punten per munt (10-1000)');
    this.setColour('#7b5ea7');
    this.setTooltip('Hoeveel punten een munt waard is.');
  },
};
javascriptGenerator.forBlock['rules_coin_value'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '100';
  return `window.GAME_CONFIG.coinValue = ${val};\n`;
};
