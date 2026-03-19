import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

// ── Hat block: Every game frame ───────────────────────────────────────────────
Blockly.Blocks['event_every_frame'] = {
  init() {
    this.appendDummyInput().appendField('🎮 Every game frame:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Code inside here runs every frame (~60× per second). Apply gravity, check collisions, and spawn pipes here.');
  },
};
javascriptGenerator.forBlock['event_every_frame'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onFrame.push(function() {\n${body}});\n`;
};

// ── Hat block: When player taps / clicks ─────────────────────────────────────
Blockly.Blocks['event_on_flap'] = {
  init() {
    this.appendDummyInput().appendField('👆 When player taps / clicks:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Runs when the player clicks the canvas or presses Space. Make the bird flap here!');
  },
};
javascriptGenerator.forBlock['event_on_flap'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onFlap.push(function() {\n${body}});\n`;
};

// ── Hat block: When game starts ───────────────────────────────────────────────
Blockly.Blocks['event_game_start'] = {
  init() {
    this.appendDummyInput().appendField('🚀 When game starts:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Runs once when the game launches. Set lives, pipe speed, colors, etc. here.');
  },
};
javascriptGenerator.forBlock['event_game_start'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onStart.push(function() {\n${body}});\n`;
};

// ── Hat block: When a pipe is passed ─────────────────────────────────────────
Blockly.Blocks['event_on_score'] = {
  init() {
    this.appendDummyInput().appendField('🏆 When a pipe is passed:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour('#e63946');
    this.setTooltip('Runs automatically each time the bird successfully passes through a pipe gap.');
  },
};
javascriptGenerator.forBlock['event_on_score'] = (block, generator) => {
  const body = generator.statementToCode(block, 'DO');
  return `window.__gameHooks.onScore.push(function() {\n${body}});\n`;
};
