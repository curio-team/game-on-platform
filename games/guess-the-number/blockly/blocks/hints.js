import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['guess_hints'] = {
  init() {
    this.appendDummyInput()
      .appendField('💡 hint style:')
      .appendField(new Blockly.FieldDropdown([
        ['basic (too high / too low)', 'basic'],
        ['temperature (hot & cold)', 'temperature'],
        ['no hints', 'none'],
      ]), 'STYLE');
    this.setColour('#4a90d9');
    this.setTooltip('Controls what hint is shown after each wrong guess.');
  },
};
javascriptGenerator.forBlock['guess_hints'] = (block) => {
  const style = block.getFieldValue('STYLE');
  return `window.GAME_CONFIG.hintStyle = '${style}';\n`;
};
