import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['theme_sky'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 luchtkleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_sky'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#5c94fc'";
  return `window.GAME_CONFIG.skyColor = ${color};\n`;
};

Blockly.Blocks['theme_ground'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 grondkleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_ground'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#c84c0c'";
  return `window.GAME_CONFIG.groundColor = ${color};\n`;
};

Blockly.Blocks['theme_mario'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 Mario-kleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_mario'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#e60000'";
  return `window.GAME_CONFIG.marioColor = ${color};\n`;
};

Blockly.Blocks['theme_blocks'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 blokkleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_blocks'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#e6a817'";
  return `window.GAME_CONFIG.blockColor = ${color};\n`;
};

Blockly.Blocks['theme_pipes'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 buiskleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_pipes'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#00a800'";
  return `window.GAME_CONFIG.pipeColor = ${color};\n`;
};

Blockly.Blocks['theme_enemies'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 vijandkleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_enemies'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#c84c0c'";
  return `window.GAME_CONFIG.enemyColor = ${color};\n`;
};
