import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['phys_gravity'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏃 zwaartekracht');
    this.appendDummyInput().appendField('(1 = licht, 20 = zwaar)');
    this.setColour('#e60000');
    this.setTooltip('Hoe snel Mario valt.');
  },
};
javascriptGenerator.forBlock['phys_gravity'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '12';
  return `window.GAME_CONFIG.gravity = ${val};\n`;
};

Blockly.Blocks['phys_jump'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏃 sprongkracht');
    this.appendDummyInput().appendField('(1 = laag, 20 = superhoog)');
    this.setColour('#e60000');
    this.setTooltip('Hoe hoog Mario springt.');
  },
};
javascriptGenerator.forBlock['phys_jump'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '10';
  return `window.GAME_CONFIG.jumpForce = ${val};\n`;
};

Blockly.Blocks['phys_speed'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏃 loopsnelheid');
    this.appendDummyInput().appendField('(1 = langzaam, 8 = erg snel)');
    this.setColour('#e60000');
    this.setTooltip('Hoe snel Mario loopt.');
  },
};
javascriptGenerator.forBlock['phys_speed'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.GAME_CONFIG.runSpeed = ${val};\n`;
};

Blockly.Blocks['phys_size'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏃 Mario-grootte');
    this.appendDummyInput().appendField('(1 = normaal, 2 = dubbel)');
    this.setColour('#e60000');
    this.setTooltip('Schaalfactor van Mario.');
  },
};
javascriptGenerator.forBlock['phys_size'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '1';
  return `window.GAME_CONFIG.marioSize = ${val};\n`;
};
