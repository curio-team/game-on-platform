import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['pipe_speed'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ zet pijpsnelheid op');
    this.appendDummyInput().appendField('(1 = langzaam, 10 = erg snel)');
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['pipe_speed'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.GAME_CONFIG.pipeSpeed = ${val};\n`;
};

Blockly.Blocks['pipe_gap'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ zet pijpopening op');
    this.appendDummyInput().appendField('(pixels, 80 = moeilijk, 200 = makkelijk)');
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['pipe_gap'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '130';
  return `window.GAME_CONFIG.pipeGap = ${val};\n`;
};

Blockly.Blocks['pipe_interval'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ nieuwe pijp elke');
    this.appendDummyInput().appendField('frames (60=1sec, 30=vaak)');
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['pipe_interval'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '90';
  return `window.GAME_CONFIG.pipeInterval = ${val};\n`;
};
