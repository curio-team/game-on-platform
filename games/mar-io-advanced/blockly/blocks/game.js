import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

Blockly.Blocks['game_game_over'] = {
  init() {
    this.appendDummyInput().appendField('\ud83d\udc80 activeer game over');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false);
    this.setColour('#7b5ea7');
    this.setTooltip('Beëindigt het spel direct.');
  },
};
javascriptGenerator.forBlock['game_game_over'] = () => `window.__game.over();\n`;

Blockly.Blocks['game_win'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfc6 level gehaald!');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false);
    this.setColour('#7b5ea7');
    this.setTooltip('Wint het level en toont het win-scherm.');
  },
};
javascriptGenerator.forBlock['game_win'] = () => `window.__game.win();\n`;

Blockly.Blocks['game_set_lives'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\u2764\ufe0f zet levens op');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_set_lives'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.__game.setLives(${val});\n`;
};

Blockly.Blocks['game_lose_life'] = {
  init() {
    this.appendDummyInput().appendField('\u2764\ufe0f verlies een leven');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Trekt een leven af. Activeert game over als levens op zijn.');
  },
};
javascriptGenerator.forBlock['game_lose_life'] = () => `window.__game.loseLife();\n`;

Blockly.Blocks['game_add_score'] = {
  init() {
    this.appendValueInput('AMOUNT').setCheck('Number').appendField('\ud83c\udfc6 voeg');
    this.appendDummyInput().appendField('toe aan score');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_add_score'] = (block, gen) => {
  const val = gen.valueToCode(block, 'AMOUNT', Order.ATOMIC) || '100';
  return `window.__game.addScore(${val});\n`;
};

Blockly.Blocks['game_add_coin'] = {
  init() {
    this.appendValueInput('AMOUNT').setCheck('Number').appendField('\ud83e\ude99 voeg');
    this.appendDummyInput().appendField('munt(en) toe');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_add_coin'] = (block, gen) => {
  const val = gen.valueToCode(block, 'AMOUNT', Order.ATOMIC) || '1';
  return `window.__game.addCoin(${val});\n`;
};

Blockly.Blocks['game_get_score'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfc6 score');
    this.setOutput(true, 'Number');
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_get_score'] = () => [`window.__game.getScore()`, Order.FUNCTION_CALL];

Blockly.Blocks['game_get_lives'] = {
  init() {
    this.appendDummyInput().appendField('\u2764\ufe0f levens over');
    this.setOutput(true, 'Number');
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_get_lives'] = () => [`window.__game.getLives()`, Order.FUNCTION_CALL];

Blockly.Blocks['game_get_coins'] = {
  init() {
    this.appendDummyInput().appendField('\ud83e\ude99 munten verzameld');
    this.setOutput(true, 'Number');
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_get_coins'] = () => [`window.__game.getCoins()`, Order.FUNCTION_CALL];

Blockly.Blocks['game_get_frame'] = {
  init() {
    this.appendDummyInput().appendField('\u23f1\ufe0f framenummer');
    this.setOutput(true, 'Number');
    this.setColour('#e6a817');
  },
};
javascriptGenerator.forBlock['game_get_frame'] = () => [`window.__game.getFrame()`, Order.FUNCTION_CALL];

Blockly.Blocks['game_every_n_frames'] = {
  init() {
    this.appendValueInput('FRAMES').setCheck('Number').appendField('\u23f1\ufe0f elke');
    this.appendDummyInput().appendField('frames:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e6a817');
    this.setTooltip('Draait de binnenste blokken een keer elke N game frames. 60 frames \u2248 1 seconde.');
  },
};
javascriptGenerator.forBlock['game_every_n_frames'] = (block, gen) => {
  const frames = gen.valueToCode(block, 'FRAMES', Order.ATOMIC) || '60';
  const body = gen.statementToCode(block, 'DO');
  return `if (window.__game.getFrame() % ${frames} === 0) {\n${body}}\n`;
};

Blockly.Blocks['game_spark_effect'] = {
  init() {
    this.appendDummyInput().appendField('\u2728 vonkeffect bij Mario');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
  },
};
javascriptGenerator.forBlock['game_spark_effect'] = () => `window.__game.spawnParticles();\n`;
