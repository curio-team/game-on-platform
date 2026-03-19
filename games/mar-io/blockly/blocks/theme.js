import * as Blockly from 'blockly/core';
import { FieldColour } from '@blockly/field-colour';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['look_sky'] = {
  init() {
    this.appendDummyInput().appendField('🎨 luchtkleur').appendField(new FieldColour('#5c94fc'), 'COLOR');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_sky'] = (block) =>
  `window.GAME_CONFIG.skyColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['look_ground'] = {
  init() {
    this.appendDummyInput().appendField('🎨 grondkleur').appendField(new FieldColour('#c84c0c'), 'COLOR');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_ground'] = (block) =>
  `window.GAME_CONFIG.groundColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['look_mario'] = {
  init() {
    this.appendDummyInput().appendField('🎨 Mario-kleur').appendField(new FieldColour('#e60000'), 'COLOR');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_mario'] = (block) =>
  `window.GAME_CONFIG.marioColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['look_blocks'] = {
  init() {
    this.appendDummyInput().appendField('🎨 blokkleur').appendField(new FieldColour('#e6a817'), 'COLOR');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_blocks'] = (block) =>
  `window.GAME_CONFIG.blockColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['look_pipes'] = {
  init() {
    this.appendDummyInput().appendField('🎨 pijpkleur').appendField(new FieldColour('#00a800'), 'COLOR');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_pipes'] = (block) =>
  `window.GAME_CONFIG.pipeColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['look_enemies'] = {
  init() {
    this.appendDummyInput().appendField('🎨 vijandkleur').appendField(new FieldColour('#c84c0c'), 'COLOR');
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['look_enemies'] = (block) =>
  `window.GAME_CONFIG.enemyColor = '${block.getFieldValue('COLOR')}';\n`;
