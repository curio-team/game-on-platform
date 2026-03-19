import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['enemy_goombas'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('👾 aantal Goombas');
    this.appendDummyInput().appendField('(0 = geen, 15 = invasie!)');
    this.setColour('#c84c0c');
    this.setTooltip('Aantal Goombas in het level.');
  },
};
javascriptGenerator.forBlock['enemy_goombas'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '5';
  return `window.GAME_CONFIG.goombaCount = ${val};\n`;
};

Blockly.Blocks['enemy_koopas'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('👾 aantal Koopa\'s');
    this.appendDummyInput().appendField('(0 = geen, 8 = gevaarlijk)');
    this.setColour('#c84c0c');
    this.setTooltip('Aantal Koopa Troopas in het level.');
  },
};
javascriptGenerator.forBlock['enemy_koopas'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '2';
  return `window.GAME_CONFIG.koopaCount = ${val};\n`;
};

Blockly.Blocks['enemy_speed'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('👾 vijandsnelheid');
    this.appendDummyInput().appendField('(0.5 = sloom, 4 = erg snel)');
    this.setColour('#c84c0c');
    this.setTooltip('Hoe snel vijanden lopen.');
  },
};
javascriptGenerator.forBlock['enemy_speed'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '1';
  return `window.GAME_CONFIG.enemySpeed = ${val};\n`;
};

Blockly.Blocks['enemy_stomp'] = {
  init() {
    this.appendDummyInput()
      .appendField('👾 bij stampen:')
      .appendField(new Blockly.FieldDropdown([
        ['pletten 🦶', 'squish'],
        ['hoog lanceren 🚀', 'launch'],
        ['laten exploderen 💥', 'explode'],
      ]), 'ACTION');
    this.setColour('#c84c0c');
    this.setTooltip('Wat er gebeurt als je op een vijand springt.');
  },
};
javascriptGenerator.forBlock['enemy_stomp'] = (block) => {
  const action = block.getFieldValue('ACTION');
  return `window.GAME_CONFIG.stompAction = '${action}';\n`;
};
