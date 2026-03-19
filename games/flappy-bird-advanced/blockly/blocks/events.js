import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

// ── Hat block: Every game frame ───────────────────────────────────────────────
Blockly.Blocks['event_every_frame'] = {
  init() {
    this.appendDummyInput().appendField('🎮 Elke spelframe:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Code hierin draait elke frame (~60x per seconde). Pas zwaartekracht toe, controleer botsingen en spawn pijpen hier.');
  },
};
javascriptGenerator.forBlock['event_every_frame'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onFrame.push(function() {\n${body}});\n`;
};

// ── Hat block: When player taps / clicks ─────────────────────────────────────
Blockly.Blocks['event_on_flap'] = {
  init() {
    this.appendDummyInput().appendField('👆 Wanneer speler tikt / klikt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait wanneer de speler op het canvas klikt of op Spatie drukt. Laat de vogel hier flapperen!');
  },
};
javascriptGenerator.forBlock['event_on_flap'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onFlap.push(function() {\n${body}});\n`;
};

// ── Hat block: When game starts ───────────────────────────────────────────────
Blockly.Blocks['event_game_start'] = {
  init() {
    this.appendDummyInput().appendField('🚀 Wanneer het spel start:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait een keer wanneer het spel start. Zet levens, pijpsnelheid, kleuren enz. hier.');
  },
};
javascriptGenerator.forBlock['event_game_start'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onStart.push(function() {\n${body}});\n`;
};

// ── Hat block: When a pipe is passed ─────────────────────────────────────────
Blockly.Blocks['event_on_score'] = {
  init() {
    this.appendDummyInput().appendField('🏆 Wanneer een pijp is gepasseerd:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait automatisch telkens als de vogel succesvol door een pijpopening gaat.');
  },
};
javascriptGenerator.forBlock['event_on_score'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onScore.push(function() {\n${body}});\n`;
};

// ── Hat block: When bird collides with a pipe ───────────────────────────────────────
Blockly.Blocks['event_on_collision'] = {
  init() {
    this.appendDummyInput().appendField('💥 Wanneer vogel een pijp raakt:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait automatisch wanneer de vogel een pijp raakt. Verlies hier een leven of activeer spel voorbij.');
  },
};
javascriptGenerator.forBlock['event_on_collision'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onCollision.push(function() {\n${body}});\n`;
};

// ── Hat block: When bird goes out of bounds ──────────────────────────────────────
Blockly.Blocks['event_on_out_of_bounds'] = {
  init() {
    this.appendDummyInput().appendField('🚧 Wanneer vogel buiten beeld:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Draait automatisch wanneer de vogel de grond raakt of boven het scherm vliegt.');
  },
};
javascriptGenerator.forBlock['event_on_out_of_bounds'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onOutOfBounds.push(function() {\n${body}});\n`;
};
