import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

// ── Statement: apply gravity ──────────────────────────────────────────────────
Blockly.Blocks['bird_apply_gravity'] = {
  init() {
    this.appendValueInput('AMOUNT').setCheck('Number').appendField('🐦 pas zwaartekracht toe');
    this.appendDummyInput().appendField('(per frame, probeer 1.2)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e6a817');
    this.setTooltip('Voegt toe aan de daalsnelheid van de vogel en verplaatst hem. Hoger = sneller vallen. Roep dit elke frame aan.');
  },
};
javascriptGenerator.forBlock['bird_apply_gravity'] = (block, generator) => {
  const amount = generator.valueToCode(block, 'AMOUNT', Order.ATOMIC) || '1.2';
  return `window.__bird.applyGravity(${amount});\n`;
};

// ── Statement: flap ───────────────────────────────────────────────────────────
Blockly.Blocks['bird_flap'] = {
  init() {
    this.appendValueInput('FORCE').setCheck('Number').appendField('🐦 vogel klapt met kracht');
    this.appendDummyInput().appendField('(probeer 12)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#e6a817');
    this.setTooltip('Stuurt de vogel omhoog. Meer kracht = hogere sprong. Zet dit in "Wanneer speler tikt".');
  },
};
javascriptGenerator.forBlock['bird_flap'] = (block, generator) => {
  const force = generator.valueToCode(block, 'FORCE', Order.ATOMIC) || '12';
  return `window.__bird.flap(${force});\n`;
};

// ── Boolean: bird hits a pipe ─────────────────────────────────────────────────
Blockly.Blocks['bird_is_colliding'] = {
  init() {
    this.appendDummyInput().appendField('🐦 vogel raakt een pijp');
    this.setOutput(true, 'Boolean');
    this.setColour('#e6a817');
    this.setTooltip('Waar als de vogel een pijp raakt. Gebruik dit in een "als"-blok om spel voorbij te activeren of een leven te verliezen.');
  },
};
javascriptGenerator.forBlock['bird_is_colliding'] = () => [`window.__bird.isColliding()`, Order.FUNCTION_CALL];

// ── Boolean: bird off screen ──────────────────────────────────────────────────
Blockly.Blocks['bird_is_out_of_bounds'] = {
  init() {
    this.appendDummyInput().appendField('🐦 vogel buiten beeld');
    this.setOutput(true, 'Boolean');
    this.setColour('#e6a817');
    this.setTooltip('Waar als de vogel boven de bovenrand vliegt of de grond raakt.');
  },
};
javascriptGenerator.forBlock['bird_is_out_of_bounds'] = () => [`window.__bird.isOutOfBounds()`, Order.FUNCTION_CALL];

// ── Value: bird Y position ────────────────────────────────────────────────────
Blockly.Blocks['bird_get_y'] = {
  init() {
    this.appendDummyInput().appendField('🐦 vogel Y-positie');
    this.setOutput(true, 'Number');
    this.setColour('#e6a817');
    this.setTooltip('Huidige verticale positie van de vogel in pixels (0 = boven, 420 = onder).');
  },
};
javascriptGenerator.forBlock['bird_get_y'] = () => [`window.__bird.getY()`, Order.FUNCTION_CALL];

// ── Value: bird vertical velocity ────────────────────────────────────────────
Blockly.Blocks['bird_get_velocity'] = {
  init() {
    this.appendDummyInput().appendField('🐦 verticale vogelsnelheid');
    this.setOutput(true, 'Number');
    this.setColour('#e6a817');
    this.setTooltip('Huidige verticale snelheid: negatief = omhoog, positief = omlaag.');
  },
};
javascriptGenerator.forBlock['bird_get_velocity'] = () => [`window.__bird.getVelocity()`, Order.FUNCTION_CALL];
