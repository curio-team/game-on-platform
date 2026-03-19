import * as Blockly from 'blockly/core';
import { FieldColour } from '@blockly/field-colour';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['guess_bg_color'] = {
  init() {
    this.appendDummyInput()
      .appendField('🎨 background color')
      .appendField(new FieldColour('#0d0d2a'), 'COLOR');
    this.setColour('#5ea765');
    this.setTooltip('Background colour of the game screen.');
  },
};
javascriptGenerator.forBlock['guess_bg_color'] = (block) =>
  `window.GAME_CONFIG.bgColor = '${block.getFieldValue('COLOR')}';\n`;

Blockly.Blocks['guess_accent_color'] = {
  init() {
    this.appendDummyInput()
      .appendField('🎨 accent color')
      .appendField(new FieldColour('#ffdd00'), 'COLOR');
    this.setColour('#5ea765');
    this.setTooltip('Colour used for buttons, text and highlights.');
  },
};
javascriptGenerator.forBlock['guess_accent_color'] = (block) =>
  `window.GAME_CONFIG.accentColor = '${block.getFieldValue('COLOR')}';\n`;
