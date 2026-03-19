import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['guess_hints'] = {
  init() {
    this.appendDummyInput()
      .appendField('💡 hintstijl:')
      .appendField(new Blockly.FieldDropdown([
        ['basis (te hoog / te laag)', 'basic'],
        ['temperatuur (heet & koud)', 'temperature'],
        ['geen hints', 'none'],
      ]), 'STYLE');
    this.setColour('#4a90d9');
    this.setTooltip('Bepaalt welke hint wordt getoond na elke foute gok.');
  },
};
javascriptGenerator.forBlock['guess_hints'] = (block) => {
  const style = block.getFieldValue('STYLE');
  return `window.GAME_CONFIG.hintStyle = '${style}';\n`;
};
