import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['guess_bg_color'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 achtergrondkleur');
    this.setColour('#5ea765');
    this.setTooltip('Achtergrondkleur van het spelscherm.');
  },
};
javascriptGenerator.forBlock['guess_bg_color'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#0d0d2a'";
  return `window.GAME_CONFIG.bgColor = ${color};\n`;
};

Blockly.Blocks['guess_accent_color'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 accentkleur');
    this.setColour('#5ea765');
    this.setTooltip('Kleur voor knoppen, tekst en accenten.');
  },
};
javascriptGenerator.forBlock['guess_accent_color'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#ffdd00'";
  return `window.GAME_CONFIG.accentColor = ${color};\n`;
};
