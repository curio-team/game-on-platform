import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['event_game_start'] = {
  init() {
    this.appendDummyInput().appendField('\ud83d\ude80 Wanneer het spel start:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait eenmalig bij de start. Genereer het level, stel levens, snelheid en thema hier in.');
  },
};
javascriptGenerator.forBlock['event_game_start'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onStart.push(function() {\n${body}});\n`;
};

Blockly.Blocks['event_every_frame'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfae Elke spelframe:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait ~60x per seconde. Pas zwaartekracht toe, beweeg Mario, controleer landingen, vijanden en munten hier.');
  },
};
javascriptGenerator.forBlock['event_every_frame'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onFrame.push(function() {\n${body}});\n`;
};

Blockly.Blocks['event_on_jump'] = {
  init() {
    this.appendDummyInput().appendField('\ud83d\udc46 Wanneer speler springt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait wanneer de speler op spatie drukt of klikt. Laat Mario hier springen!');
  },
};
javascriptGenerator.forBlock['event_on_jump'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onJump.push(function() {\n${body}});\n`;
};

Blockly.Blocks['event_on_stomp'] = {
  init() {
    this.appendDummyInput().appendField('\ud83e\uddb6 Wanneer vijand gestampt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait wanneer Mario bovenop een vijand landt. Voeg punten toe en laat Mario terugstuiteren!');
  },
};
javascriptGenerator.forBlock['event_on_stomp'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onStomp.push(function() {\n${body}});\n`;
};

Blockly.Blocks['event_on_hurt'] = {
  init() {
    this.appendDummyInput().appendField('\ud83d\udca5 Wanneer Mario geraakt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait wanneer een vijand Mario raakt (van de zijkant). Verlies een leven of maak onkwetsbaar!');
  },
};
javascriptGenerator.forBlock['event_on_hurt'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onHurt.push(function() {\n${body}});\n`;
};

Blockly.Blocks['event_on_coin'] = {
  init() {
    this.appendDummyInput().appendField('\ud83e\ude99 Wanneer munt gepakt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait wanneer Mario een munt oppakt. Voeg punten en munten toe!');
  },
};
javascriptGenerator.forBlock['event_on_coin'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onCoinCollect.push(function() {\n${body}});\n`;
};

Blockly.Blocks['event_on_block_hit'] = {
  init() {
    this.appendDummyInput().appendField('\u2753 Wanneer ?-blok geraakt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait wanneer Mario van onderaf tegen een ?-blok springt.');
  },
};
javascriptGenerator.forBlock['event_on_block_hit'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onBlockHit.push(function() {\n${body}});\n`;
};

Blockly.Blocks['event_on_fall'] = {
  init() {
    this.appendDummyInput().appendField('\ud83d\udd73\ufe0f Wanneer Mario in gat valt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait wanneer Mario van het scherm valt in een gat.');
  },
};
javascriptGenerator.forBlock['event_on_fall'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onFallInPit.push(function() {\n${body}});\n`;
};

Blockly.Blocks['event_on_flag'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfc1 Wanneer vlagpaal bereikt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait wanneer Mario de vlagpaal bereikt aan het einde van het level.');
  },
};
javascriptGenerator.forBlock['event_on_flag'] = (block, gen) => {
  const body = gen.statementToCode(block, 'DO');
  return `window.__gameHooks.onReachFlag.push(function() {\n${body}});\n`;
};
