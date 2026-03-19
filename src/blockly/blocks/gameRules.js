import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['game_lives'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🎮 starting lives');
    this.appendDummyInput().appendField('(1 = one chance, 5 = forgiving)');
    this.setColour('#7b5ea7');
    this.setTooltip('How many lives the player starts with.');
  },
};
javascriptGenerator.forBlock['game_lives'] = function (block, generator) {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.GAME_CONFIG.startLives = ${val};\n`;
};

Blockly.Blocks['game_collision'] = {
  init() {
    this.appendDummyInput()
      .appendField('🎮 on collision:')
      .appendField(
        new Blockly.FieldDropdown([
          ['bounce back 🏀', 'bounce'],
          ['lose a life ❤️', 'life'],
          ['game over 💀', 'gameover'],
        ]),
        'ACTION',
      );
    this.setColour('#7b5ea7');
    this.setTooltip('What happens when the bird hits a pipe or wall.');
  },
};
javascriptGenerator.forBlock['game_collision'] = function (block) {
  const action = block.getFieldValue('ACTION');
  return `window.GAME_CONFIG.collisionAction = '${action}';\n`;
};
