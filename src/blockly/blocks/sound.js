import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';
import '/src/sound.js'; // ensures window.__sound is set for eval'd code

Blockly.Blocks['sound_play'] = {
  init() {
    this.appendValueInput('FREQ')
      .setCheck('Number')
      .appendField('🔊 speel geluid  freq');
    this.appendValueInput('DURATION')
      .setCheck('Number')
      .appendField('Hz   duur');
    this.appendDummyInput()
      .appendField('ms   golfvorm')
      .appendField(new Blockly.FieldDropdown([
        ['blokgolf', 'square'],
        ['sinus', 'sine'],
        ['zaagtand', 'sawtooth'],
        ['driehoek', 'triangle'],
      ]), 'WAVE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e67e22');
    this.setTooltip('Speel een toon af. Frequentie in Hz (bijv. 440 = la), duur in milliseconden (bijv. 200).');
  },
};

javascriptGenerator.forBlock['sound_play'] = (block, generator) => {
  const freq = generator.valueToCode(block, 'FREQ', Order.ATOMIC) || '440';
  const dur = generator.valueToCode(block, 'DURATION', Order.ATOMIC) || '200';
  const wave = block.getFieldValue('WAVE') || 'square';
  return `window.__sound.play(${freq}, ${dur}, '${wave}');\n`;
};
