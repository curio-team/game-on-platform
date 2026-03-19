import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['world_length'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🌍 levellengte');
    this.appendDummyInput().appendField('schermen (2 = kort, 8 = lang)');
    this.setColour('#4a90d9');
    this.setTooltip('Breedte van het level in schermeenheden.');
  },
};
javascriptGenerator.forBlock['world_length'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '4';
  return `window.GAME_CONFIG.levelLength = ${val};\n`;
};

Blockly.Blocks['world_gaps'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🌍 grondgaten');
    this.appendDummyInput().appendField('(0 = geen, 5 = veel gaten)');
    this.setColour('#4a90d9');
    this.setTooltip('Aantal gaten in de grond.');
  },
};
javascriptGenerator.forBlock['world_gaps'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '2';
  return `window.GAME_CONFIG.gapCount = ${val};\n`;
};

Blockly.Blocks['world_pipes'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🌍 pijpen');
    this.appendDummyInput().appendField('(0 = geen, 10 = veel)');
    this.setColour('#4a90d9');
    this.setTooltip('Aantal pijpen in het level.');
  },
};
javascriptGenerator.forBlock['world_pipes'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.GAME_CONFIG.pipeCount = ${val};\n`;
};

Blockly.Blocks['world_platforms'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🌍 zwevende platforms');
    this.appendDummyInput().appendField('(0 = geen, 10 = veel blokken)');
    this.setColour('#4a90d9');
    this.setTooltip('Aantal rijen zwevende blokken.');
  },
};
javascriptGenerator.forBlock['world_platforms'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '4';
  return `window.GAME_CONFIG.platformCount = ${val};\n`;
};

Blockly.Blocks['world_coins'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🌍 munten');
    this.appendDummyInput().appendField('(0 = geen, 30 = schat!)');
    this.setColour('#4a90d9');
    this.setTooltip('Aantal munten verspreid in het level.');
  },
};
javascriptGenerator.forBlock['world_coins'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '15';
  return `window.GAME_CONFIG.coinCount = ${val};\n`;
};
