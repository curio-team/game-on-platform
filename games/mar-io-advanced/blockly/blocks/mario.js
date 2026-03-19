import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

// ── Statement: apply gravity ──────────────────────────────────────────────────
Blockly.Blocks['mario_apply_gravity'] = {
  init() {
    this.appendValueInput('AMOUNT').setCheck('Number').appendField('\ud83c\udfc3 pas zwaartekracht toe');
    this.appendDummyInput().appendField('(per frame, probeer 0.7)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e60000');
    this.setTooltip('Voegt toe aan Mario\'s daalsnelheid en verplaatst hem verticaal. Roep dit elke frame aan.');
  },
};
javascriptGenerator.forBlock['mario_apply_gravity'] = (block, gen) => {
  const val = gen.valueToCode(block, 'AMOUNT', Order.ATOMIC) || '0.7';
  return `window.__mario.applyGravity(${val});\n`;
};

// ── Statement: move (reads arrow keys) ────────────────────────────────────────
Blockly.Blocks['mario_move'] = {
  init() {
    this.appendValueInput('SPEED').setCheck('Number').appendField('\ud83c\udfc3 beweeg Mario met snelheid');
    this.appendDummyInput().appendField('(leest pijltjestoetsen)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e60000');
    this.setTooltip('Beweegt Mario links/rechts op basis van welke pijltjestoets is ingedrukt.');
  },
};
javascriptGenerator.forBlock['mario_move'] = (block, gen) => {
  const val = gen.valueToCode(block, 'SPEED', Order.ATOMIC) || '3';
  return `window.__mario.move(${val});\n`;
};

// ── Statement: jump ───────────────────────────────────────────────────────────
Blockly.Blocks['mario_jump'] = {
  init() {
    this.appendValueInput('FORCE').setCheck('Number').appendField('\ud83c\udfc3 Mario springt met kracht');
    this.appendDummyInput().appendField('(probeer 10)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e60000');
    this.setTooltip('Laat Mario springen als hij op de grond staat. Zet dit in "Wanneer speler springt".');
  },
};
javascriptGenerator.forBlock['mario_jump'] = (block, gen) => {
  const val = gen.valueToCode(block, 'FORCE', Order.ATOMIC) || '10';
  return `window.__mario.jump(${val});\n`;
};

// ── Statement: bounce (for stomps) ────────────────────────────────────────────
Blockly.Blocks['mario_bounce'] = {
  init() {
    this.appendValueInput('FORCE').setCheck('Number').appendField('\ud83c\udfc3 Mario stuitert met kracht');
    this.appendDummyInput().appendField('(na stampen, probeer 7)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e60000');
    this.setTooltip('Stuurt Mario omhoog (ook als hij niet op de grond staat). Handig na een vijand-stamp.');
  },
};
javascriptGenerator.forBlock['mario_bounce'] = (block, gen) => {
  const val = gen.valueToCode(block, 'FORCE', Order.ATOMIC) || '7';
  return `window.__mario.bounce(${val});\n`;
};

// ── Statement: set invincible ─────────────────────────────────────────────────
Blockly.Blocks['mario_set_invincible'] = {
  init() {
    this.appendValueInput('FRAMES').setCheck('Number').appendField('\ud83c\udfc3 maak onkwetsbaar voor');
    this.appendDummyInput().appendField('frames (60 \u2248 1 sec)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e60000');
    this.setTooltip('Mario kan tijdelijk niet geraakt worden. Knippert op het scherm.');
  },
};
javascriptGenerator.forBlock['mario_set_invincible'] = (block, gen) => {
  const val = gen.valueToCode(block, 'FRAMES', Order.ATOMIC) || '60';
  return `window.__mario.setInvincible(${val});\n`;
};

// ── Values ────────────────────────────────────────────────────────────────────
Blockly.Blocks['mario_get_x'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfc3 Mario X-positie');
    this.setOutput(true, 'Number');
    this.setColour('#e60000');
  },
};
javascriptGenerator.forBlock['mario_get_x'] = () => [`window.__mario.getX()`, Order.FUNCTION_CALL];

Blockly.Blocks['mario_get_y'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfc3 Mario Y-positie');
    this.setOutput(true, 'Number');
    this.setColour('#e60000');
  },
};
javascriptGenerator.forBlock['mario_get_y'] = () => [`window.__mario.getY()`, Order.FUNCTION_CALL];

Blockly.Blocks['mario_get_vy'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfc3 Mario verticale snelheid');
    this.setOutput(true, 'Number');
    this.setColour('#e60000');
  },
};
javascriptGenerator.forBlock['mario_get_vy'] = () => [`window.__mario.getVelocityY()`, Order.FUNCTION_CALL];

Blockly.Blocks['mario_is_grounded'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfc3 Mario staat op de grond');
    this.setOutput(true, 'Boolean');
    this.setColour('#e60000');
  },
};
javascriptGenerator.forBlock['mario_is_grounded'] = () => [`window.__mario.isGrounded()`, Order.FUNCTION_CALL];

Blockly.Blocks['mario_is_falling'] = {
  init() {
    this.appendDummyInput().appendField('\ud83c\udfc3 Mario valt');
    this.setOutput(true, 'Boolean');
    this.setColour('#e60000');
  },
};
javascriptGenerator.forBlock['mario_is_falling'] = () => [`window.__mario.isFalling()`, Order.FUNCTION_CALL];
