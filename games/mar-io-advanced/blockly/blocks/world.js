import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

// ── Statement: generate level ─────────────────────────────────────────────────
Blockly.Blocks['world_generate'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d genereer level');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Genereert de wereld met alle blokken, pijpen, munten en vijanden. Zet dit in "Wanneer het spel start".');
  },
};
javascriptGenerator.forBlock['world_generate'] = () => `window.__world.generateLevel();\n`;

// ── Statement: set level length ───────────────────────────────────────────────
Blockly.Blocks['world_set_length'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\ud83c\udf0d levellengte');
    this.appendDummyInput().appendField('schermen (2-10)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Stel de lengte van het level in (in schermeenheden). Zet dit VOOR level genereren.');
  },
};
javascriptGenerator.forBlock['world_set_length'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '4';
  return `window.GAME_CONFIG.levelLength = ${val};\n`;
};

// ── Statement: set gap count ──────────────────────────────────────────────────
Blockly.Blocks['world_set_gaps'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\ud83c\udf0d grondgaten');
    this.appendDummyInput().appendField('(0-10)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_set_gaps'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '2';
  return `window.GAME_CONFIG.gapCount = ${val};\n`;
};

// ── Statement: set pipe count ─────────────────────────────────────────────────
Blockly.Blocks['world_set_pipes'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\ud83c\udf0d pijpen');
    this.appendDummyInput().appendField('(0-15)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_set_pipes'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.GAME_CONFIG.pipeCount = ${val};\n`;
};

// ── Statement: set platform count ─────────────────────────────────────────────
Blockly.Blocks['world_set_platforms'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\ud83c\udf0d zwevende platforms');
    this.appendDummyInput().appendField('(0-15)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_set_platforms'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '4';
  return `window.GAME_CONFIG.platformCount = ${val};\n`;
};

// ── Statement: set coin count ─────────────────────────────────────────────────
Blockly.Blocks['world_set_coins'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\ud83c\udf0d munten');
    this.appendDummyInput().appendField('(0-50)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_set_coins'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '15';
  return `window.GAME_CONFIG.coinCount = ${val};\n`;
};

// ── Statement: set enemy counts ───────────────────────────────────────────────
Blockly.Blocks['world_set_goombas'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\ud83c\udf0d Goombas');
    this.appendDummyInput().appendField('(0-20)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_set_goombas'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '5';
  return `window.GAME_CONFIG.goombaCount = ${val};\n`;
};

Blockly.Blocks['world_set_koopas'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\ud83c\udf0d Koopa\'s');
    this.appendDummyInput().appendField('(0-10)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_set_koopas'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '2';
  return `window.GAME_CONFIG.koopaCount = ${val};\n`;
};

Blockly.Blocks['world_set_enemy_speed'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('\ud83c\udf0d vijandsnelheid');
    this.appendDummyInput().appendField('(0.5-5)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_set_enemy_speed'] = (block, gen) => {
  const val = gen.valueToCode(block, 'VALUE', Order.ATOMIC) || '1';
  return `window.GAME_CONFIG.enemySpeed = ${val};\n`;
};

// ── Statements: per-frame world updates ───────────────────────────────────────
Blockly.Blocks['world_check_landing'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d controleer landingen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Controleert of Mario op grond, blokken of pijpen landt. Controleert ook blokken van onderaf. Roep elke frame aan.');
  },
};
javascriptGenerator.forBlock['world_check_landing'] = () => `window.__world.checkLanding();\n`;

Blockly.Blocks['world_check_coins'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d controleer munten');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Pakt munten op als Mario ze raakt. Activeert "Wanneer munt gepakt" event.');
  },
};
javascriptGenerator.forBlock['world_check_coins'] = () => `window.__world.checkCoins();\n`;

Blockly.Blocks['world_check_enemies'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d controleer vijanden');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Controleert botsingen met vijanden. Activeert "vijand gestampt" of "Mario geraakt" event.');
  },
};
javascriptGenerator.forBlock['world_check_enemies'] = () => `window.__world.checkEnemies();\n`;

Blockly.Blocks['world_update_enemies'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d beweeg vijanden');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Verplaatst alle vijanden, laat ze omkeren bij randen en obstakels.');
  },
};
javascriptGenerator.forBlock['world_update_enemies'] = () => `window.__world.updateEnemies();\n`;

Blockly.Blocks['world_check_pit'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d Mario gevallen in gat');
    this.setOutput(true, 'Boolean');
    this.setColour('#4a90d9');
    this.setTooltip('Waar als Mario onder het scherm is gevallen.');
  },
};
javascriptGenerator.forBlock['world_check_pit'] = () => [`window.__world.checkPit()`, Order.FUNCTION_CALL];

Blockly.Blocks['world_check_flagpole'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d Mario bij vlagpaal');
    this.setOutput(true, 'Boolean');
    this.setColour('#4a90d9');
    this.setTooltip('Waar als Mario de vlagpaal heeft bereikt.');
  },
};
javascriptGenerator.forBlock['world_check_flagpole'] = () => [`window.__world.checkFlagpole()`, Order.FUNCTION_CALL];

Blockly.Blocks['world_update_camera'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d update camera');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Laat de camera Mario volgen. Roep elke frame aan na het bewegen.');
  },
};
javascriptGenerator.forBlock['world_update_camera'] = () => `window.__world.updateCamera();\n`;

Blockly.Blocks['world_respawn'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d respawn Mario');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Plaatst Mario terug op een veilige plek na een val of dood.');
  },
};
javascriptGenerator.forBlock['world_respawn'] = () => `window.__world.respawn();\n`;

// ── Values ────────────────────────────────────────────────────────────────────
Blockly.Blocks['world_enemy_count'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d levende vijanden');
    this.setOutput(true, 'Number');
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_enemy_count'] = () => [`window.__world.getEnemyCount()`, Order.FUNCTION_CALL];

Blockly.Blocks['world_coin_count'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udf0d resterende munten');
    this.setOutput(true, 'Number');
    this.setColour('#4a90d9');
  },
};
javascriptGenerator.forBlock['world_coin_count'] = () => [`window.__world.getCoinCount()`, Order.FUNCTION_CALL];
