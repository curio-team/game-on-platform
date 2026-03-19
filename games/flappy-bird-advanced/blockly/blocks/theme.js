import * as Blockly from 'blockly/core';
import { FieldColour } from '@blockly/field-colour';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['theme_sky'] = {
  init() {
    this.appendDummyInput().appendField('🎨 sky color').appendField(new FieldColour('#1a1a4e'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
    this.setTooltip('Sets the background sky color.');
  },
};
javascriptGenerator.forBlock['theme_sky'] = (block) =>
  `window.GAME_CONFIG.skyColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['theme_bird_color'] = {
  init() {
    this.appendDummyInput().appendField('🎨 bird color').appendField(new FieldColour('#ffdd00'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
    this.setTooltip('Sets the bird\'s body color.');
  },
};
javascriptGenerator.forBlock['theme_bird_color'] = (block) =>
  `window.GAME_CONFIG.birdColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['theme_pipe_color'] = {
  init() {
    this.appendDummyInput().appendField('🎨 pipe color').appendField(new FieldColour('#39ff14'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
    this.setTooltip('Sets the color of all pipes.');
  },
};
javascriptGenerator.forBlock['theme_pipe_color'] = (block) =>
  `window.GAME_CONFIG.pipeColor = '${block.getFieldValue('COLOR')}';\n`;
