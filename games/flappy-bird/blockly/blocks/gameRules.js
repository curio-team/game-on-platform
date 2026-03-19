import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['game_lives'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🎮 startlevens');
    this.appendDummyInput().appendField('(1 = een kans, 5 = vergevingsgezind)');
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_lives'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.GAME_CONFIG.startLives = ${val};\n`;
};

Blockly.Blocks['game_collision'] = {
  init() {
    this.appendDummyInput()
      .appendField('🎮 bij botsing:')
      .appendField(new Blockly.FieldDropdown([
        ['stuiter terug 🏀', 'bounce'],
        ['verlies een leven ❤️', 'life'],
        ['spel voorbij 💀', 'gameover'],
      ]), 'ACTION');
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_collision'] = (block) => {
  const action = block.getFieldValue('ACTION');
  return `window.GAME_CONFIG.collisionAction = '${action}';\n`;
};
