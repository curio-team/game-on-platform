import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

// ── Statement: game over ──────────────────────────────────────────────────────
Blockly.Blocks['game_game_over'] = {
  init() {
    this.appendDummyInput().appendField('💀 activeer spel voorbij');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false); // terminal block — nothing runs after this
    this.setColour('#7b5ea7');
    this.setTooltip('Beeindigt het spel direct en toont het scherm spel voorbij.');
  },
};
javascriptGenerator.forBlock['game_game_over'] = () => `window.__game.over();\n`;

// ── Statement: lose a life ────────────────────────────────────────────────────
Blockly.Blocks['game_lose_life'] = {
  init() {
    this.appendDummyInput().appendField('❤️ verlies een leven');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Trekt een leven af en maakt de vogel kort onkwetsbaar. Activeert spel voorbij als levens nul zijn.');
  },
};
javascriptGenerator.forBlock['game_lose_life'] = () => `window.__game.loseLife();\n`;

// ── Statement: set lives ──────────────────────────────────────────────────────
Blockly.Blocks['game_set_lives'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('❤️ zet levens op');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Stel het startaantal levens in. Zet dit in "Wanneer het spel start".');
  },
};
javascriptGenerator.forBlock['game_set_lives'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.__game.setLives(${val});\n`;
};

// ── Statement: add to score ───────────────────────────────────────────────────
Blockly.Blocks['game_add_score'] = {
  init() {
    this.appendValueInput('AMOUNT').setCheck('Number').appendField('🏆 voeg');
    this.appendDummyInput().appendField('toe aan score');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Voeg bonuspunten toe aan de score. (De score stijgt al automatisch bij pijpen passeren.)');
  },
};
javascriptGenerator.forBlock['game_add_score'] = (block, generator) => {
  const amount = generator.valueToCode(block, 'AMOUNT', Order.ATOMIC) || '1';
  return `window.__game.addScore(${amount});\n`;
};

// ── Value: score ──────────────────────────────────────────────────────────────
Blockly.Blocks['game_get_score'] = {
  init() {
    this.appendDummyInput().appendField('🏆 score');
    this.setOutput(true, 'Number');
    this.setColour('#7b5ea7');
    this.setTooltip('De huidige score.');
  },
};
javascriptGenerator.forBlock['game_get_score'] = () => [`window.__game.getScore()`, Order.FUNCTION_CALL];

// ── Value: lives ──────────────────────────────────────────────────────────────
Blockly.Blocks['game_get_lives'] = {
  init() {
    this.appendDummyInput().appendField('❤️ levens over');
    this.setOutput(true, 'Number');
    this.setColour('#7b5ea7');
    this.setTooltip('Het aantal levens dat de speler nog heeft.');
  },
};
javascriptGenerator.forBlock['game_get_lives'] = () => [`window.__game.getLives()`, Order.FUNCTION_CALL];

// ── Statement: spark effect ───────────────────────────────────────────────────
Blockly.Blocks['game_spark_effect'] = {
  init() {
    this.appendDummyInput().appendField('✨ vonkeffect bij vogel');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b5ea7');
    this.setTooltip('Laat een wolk deeltjes rond de vogel ontploffen. Leuk voor vieringen!');
  },
};
javascriptGenerator.forBlock['game_spark_effect'] = () => `window.__game.spawnParticles();\n`;

// ── Value: frame number ───────────────────────────────────────────────────────
Blockly.Blocks['game_get_frame'] = {
  init() {
    this.appendDummyInput().appendField('⏱️ framenummer');
    this.setOutput(true, 'Number');
    this.setColour('#e6a817');
    this.setTooltip('Hoeveel frames er zijn verstreken sinds de start. 60 frames ~= 1 seconde.');
  },
};
javascriptGenerator.forBlock['game_get_frame'] = () => [`window.__game.getFrame()`, Order.FUNCTION_CALL];

// ── Statement: every N frames ─────────────────────────────────────────────────
Blockly.Blocks['game_every_n_frames'] = {
  init() {
    this.appendValueInput('FRAMES').setCheck('Number').appendField('⏱️ elke');
    this.appendDummyInput().appendField('frames:');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e6a817');
    this.setTooltip('Draait de binnenste blokken een keer elke N game frames. 90 frames ~= 1.5 seconde. Gebruik dit om pijpen te spawnen.');
  },
};
javascriptGenerator.forBlock['game_every_n_frames'] = (block, generator) => {
  const frames = generator.valueToCode(block, 'FRAMES', Order.ATOMIC) || '60';
  const body = generator.statementToCode(block, 'DO');
  return `if (window.__game.getFrame() % ${frames} === 0) {\n${body}}\n`;
};
