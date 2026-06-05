import * as Blockly from 'blockly/core';
import { FieldColour } from '@blockly/field-colour';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['color_picker'] = {
  init() {
    this.appendDummyInput().appendField(new FieldColour('#ffffff'), 'COLOR');
    this.setOutput(true, 'Colour');
    this.setColour('#5ea765');
    this.setTooltip('Een kleurwaarde.');
  },
};
javascriptGenerator.forBlock['color_picker'] = (block) => {
  const color = block.getFieldValue('COLOR');
  return [`'${color}'`, Order.ATOMIC];
};

Blockly.Blocks['random_branch'] = {
  init() {
    this.appendDummyInput().appendField('🎲 willekeurige keuze');
    this.appendStatementInput('BRANCH_A').appendField('pad A');
    this.appendStatementInput('BRANCH_B').appendField('pad B');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5b80a5');
    this.setTooltip('Voert willekeurig pad A of pad B uit (50/50 kans).');
  },
};
javascriptGenerator.forBlock['random_branch'] = (block, generator) => {
  const branchA = generator.statementToCode(block, 'BRANCH_A');
  const branchB = generator.statementToCode(block, 'BRANCH_B');
  return `if (Math.random() < 0.5) {\n${branchA}} else {\n${branchB}}\n`;
};
