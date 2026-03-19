import * as Blockly from 'blockly/core';
import { FieldColour } from '@blockly/field-colour';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['theme_sky'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfa8 luchtkleur').appendField(new FieldColour('#5c94fc'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_sky'] = (block) =>
  `window.GAME_CONFIG.skyColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['theme_ground'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfa8 grondkleur').appendField(new FieldColour('#c84c0c'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_ground'] = (block) =>
  `window.GAME_CONFIG.groundColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['theme_mario'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfa8 Mario-kleur').appendField(new FieldColour('#e60000'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_mario'] = (block) =>
  `window.GAME_CONFIG.marioColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['theme_blocks'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfa8 blokkleur').appendField(new FieldColour('#e6a817'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_blocks'] = (block) =>
  `window.GAME_CONFIG.blockColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['theme_pipes'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfa8 pijpkleur').appendField(new FieldColour('#00a800'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_pipes'] = (block) =>
  `window.GAME_CONFIG.pipeColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['theme_enemies'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfa8 vijandkleur').appendField(new FieldColour('#c84c0c'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
  },
};
javascriptGenerator.forBlock['theme_enemies'] = (block) =>
  `window.GAME_CONFIG.enemyColor = '${block.getFieldValue('COLOR')}';\n`;
