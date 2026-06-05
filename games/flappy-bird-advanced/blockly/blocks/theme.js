import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['theme_sky'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 luchtkleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
    this.setTooltip('Stelt de luchtkleur van de achtergrond in.');
  },
};
javascriptGenerator.forBlock['theme_sky'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#1a1a4e'";
  return `window.GAME_CONFIG.skyColor = ${color};\n`;
};

Blockly.Blocks['theme_bird_color'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 vogelkleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
    this.setTooltip('Stelt de lichaamskleur van de vogel in.');
  },
};
javascriptGenerator.forBlock['theme_bird_color'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#ffdd00'";
  return `window.GAME_CONFIG.birdColor = ${color};\n`;
};

Blockly.Blocks['theme_pipe_color'] = {
  init() {
    this.appendValueInput('COLOR').setCheck('Colour').appendField('🎨 buiskleur');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ea765');
    this.setTooltip('Stelt de kleur van alle buizen in.');
  },
};
javascriptGenerator.forBlock['theme_pipe_color'] = (block, generator) => {
  const color = generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#39ff14'";
  return `window.GAME_CONFIG.pipeColor = ${color};\n`;
};
