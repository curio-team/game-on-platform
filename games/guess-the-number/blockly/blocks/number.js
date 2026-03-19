import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['guess_range'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🔢 getalbereik: 1 tot');
    this.appendDummyInput().appendField('(10 = makkelijk, 1000 = moeilijk)');
    this.setColour('#7b5ea7');
    this.setTooltip('Het geheime getal wordt gekozen van 1 tot en met deze waarde.');
  },
};
javascriptGenerator.forBlock['guess_range'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '100';
  return `window.GAME_CONFIG.maxNumber = ${val};\n`;
};

Blockly.Blocks['guess_attempts'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🎮 maximale pogingen');
    this.appendDummyInput().appendField('(3 = pittig, 20 = makkelijk)');
    this.setColour('#7b5ea7');
    this.setTooltip('Hoeveel pogingen de speler krijgt voordat die verliest.');
  },
};
javascriptGenerator.forBlock['guess_attempts'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '10';
  return `window.GAME_CONFIG.maxAttempts = ${val};\n`;
};
