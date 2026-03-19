import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['bird_gravity'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🐦 zet zwaartekracht op');
    this.appendDummyInput().appendField('(1 = licht, 20 = zwaar)');
    this.setColour('#e6a817');
    this.setTooltip('Bepaalt hoe snel de vogel valt.');
  },
};
javascriptGenerator.forBlock['bird_gravity'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '8';
  return `window.GAME_CONFIG.gravity = ${val};\n`;
};

Blockly.Blocks['bird_jump'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🐦 zet sprongkracht op');
    this.appendDummyInput().appendField('(1 = zwak, 20 = supersprong)');
    this.setColour('#e6a817');
    this.setTooltip('Hoe hoog de vogel springt bij klik/spatie.');
  },
};
javascriptGenerator.forBlock['bird_jump'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '12';
  return `window.GAME_CONFIG.jumpForce = ${val};\n`;
};

Blockly.Blocks['bird_size'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🐦 zet vogelgrootte op');
    this.appendDummyInput().appendField('(pixels, standaard 20)');
    this.setColour('#e6a817');
    this.setTooltip('Grootte van de vogel in pixels.');
  },
};
javascriptGenerator.forBlock['bird_size'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '20';
  return `window.GAME_CONFIG.birdSize = ${val};\n`;
};
