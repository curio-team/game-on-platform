import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['look_sky'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 luchtkleur');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_sky'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#5c94fc'";
  return `window.GAME_CONFIG.skyColor = ${color};\n`;
};

Blockly.Blocks['look_ground'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 grondkleur');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_ground'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#c84c0c'";
  return `window.GAME_CONFIG.groundColor = ${color};\n`;
};

Blockly.Blocks['look_mario'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 Mario-kleur');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_mario'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#e60000'";
  return `window.GAME_CONFIG.marioColor = ${color};\n`;
};

Blockly.Blocks['look_blocks'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 blokkleur');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_blocks'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#e6a817'";
  return `window.GAME_CONFIG.blockColor = ${color};\n`;
};

Blockly.Blocks['look_pipes'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 buiskleur');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_pipes'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#00a800'";
  return `window.GAME_CONFIG.pipeColor = ${color};\n`;
};

Blockly.Blocks['look_enemies'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 vijandkleur');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_enemies'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#c84c0c'";
  return `window.GAME_CONFIG.enemyColor = ${color};\n`;
};
