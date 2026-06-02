import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['game_wait_ms'] = {
  init() {
    this.appendValueInput('DELAY').setCheck('Number').appendField('⏰ wacht');
    this.appendDummyInput().appendField('ms dan:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e6a817');
    this.setTooltip('Voert de binnenste blokken uit na een vertraging in milliseconden. Handig voor muziek of getimede effecten.');
  },
};

javascriptGenerator.forBlock['game_wait_ms'] = (block, gen) => {
  const delay = gen.valueToCode(block, 'DELAY', Order.ATOMIC) || '0';
  const body = gen.statementToCode(block, 'DO');
  return `setTimeout(() => {\n${body}}, ${delay});\n`;
};
