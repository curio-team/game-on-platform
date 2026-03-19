import * as Blockly from 'blockly/core';
import { FieldColour } from '@blockly/field-colour';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['theme_sky'] = {
  init() {
    this.appendDummyInput()
      .appendField('🎨 sky color')
      .appendField(new FieldColour('#1a1a4e'), 'COLOR');
    this.setColour('#5ea765');
    this.setTooltip('Background sky colour of the game.');
  },
};
javascriptGenerator.forBlock['theme_sky'] = function (block) {
  const color = block.getFieldValue('COLOR');
  return `window.GAME_CONFIG.skyColor = '${color}';\n`;
};

Blockly.Blocks['theme_bird_color'] = {
  init() {
    this.appendDummyInput()
      .appendField('🎨 bird color')
      .appendField(new FieldColour('#ffdd00'), 'COLOR');
    this.setColour('#5ea765');
    this.setTooltip('Colour of the bird.');
  },
};
javascriptGenerator.forBlock['theme_bird_color'] = function (block) {
  const color = block.getFieldValue('COLOR');
  return `window.GAME_CONFIG.birdColor = '${color}';\n`;
};

Blockly.Blocks['theme_pipe_color'] = {
  init() {
    this.appendDummyInput()
      .appendField('🎨 pipe color')
      .appendField(new FieldColour('#39ff14'), 'COLOR');
    this.setColour('#5ea765');
    this.setTooltip('Colour of the pipes.');
  },
};
javascriptGenerator.forBlock['theme_pipe_color'] = function (block) {
  const color = block.getFieldValue('COLOR');
  return `window.GAME_CONFIG.pipeColor = '${color}';\n`;
};
