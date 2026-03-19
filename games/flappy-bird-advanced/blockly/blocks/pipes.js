import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';
// ── Statement: update all pipes ─────────────────────────────────────────────────────
Blockly.Blocks['pipe_update'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ verplaats alle pijpen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Verplaatst alle pijpen naar links met de ingestelde snelheid. Verwijdert pijpen die van het scherm zijn. Activeert "Wanneer een pijp is gepasseerd" als de vogel er voorbij komt.');
  },
};
javascriptGenerator.forBlock['pipe_update'] = () => `window.__pipes.update();\n`;
// ── Statement: spawn a pipe ───────────────────────────────────────────────────
Blockly.Blocks['pipe_spawn_now'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ maak een nieuwe pijp');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Maakt een nieuw pijppaar aan aan de rechterrand van het scherm. Gebruik in "elke N frames" om de frequentie te regelen.');
  },
};
javascriptGenerator.forBlock['pipe_spawn_now'] = () => `window.__pipes.spawn();\n`;

// ── Statement: set pipe speed ─────────────────────────────────────────────────
Blockly.Blocks['pipe_set_speed'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ zet pijpsnelheid op');
    this.appendDummyInput().appendField('pixels/frame (probeer 3)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('Hoe snel pijpen naar links schuiven. Hoger = moeilijker. Veilig bereik: 1-10.');
  },
};
javascriptGenerator.forBlock['pipe_set_speed'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '3';
  return `window.__pipes.setSpeed(${val});\n`;
};

// ── Statement: set pipe gap ───────────────────────────────────────────────────
Blockly.Blocks['pipe_set_gap'] = {
  init() {
    this.appendValueInput('VALUE').setCheck('Number').appendField('🏗️ zet pijpopening op');
    this.appendDummyInput().appendField('pixels (80=moeilijk, 200=makkelijk)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4a90d9');
    this.setTooltip('De verticale opening tussen de bovenste en onderste pijp. Kleiner = lastiger om door te passen.');
  },
};
javascriptGenerator.forBlock['pipe_set_gap'] = (block, generator) => {
  const val = generator.valueToCode(block, 'VALUE', Order.ATOMIC) || '130';
  return `window.__pipes.setGap(${val});\n`;
};

// ── Value: nearest pipe X ─────────────────────────────────────────────────────
Blockly.Blocks['nearest_pipe_x'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ dichtstbijzijnde pijp X');
    this.setOutput(true, 'Number');
    this.setColour('#4a90d9');
    this.setTooltip('X-positie van de linkerrand van de dichtstbijzijnde aankomende pijp. Handig voor autopilot-logica!');
  },
};
javascriptGenerator.forBlock['nearest_pipe_x'] = () => [`window.__pipes.getNearestX()`, Order.FUNCTION_CALL];

// ── Value: nearest pipe gap top ───────────────────────────────────────────────
Blockly.Blocks['nearest_pipe_gap_top'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ bovenkant opening dichtste pijp Y');
    this.setOutput(true, 'Number');
    this.setColour('#4a90d9');
    this.setTooltip('Y-positie van de bovenkant van de opening in de dichtstbijzijnde pijp.');
  },
};
javascriptGenerator.forBlock['nearest_pipe_gap_top'] = () => [`window.__pipes.getGapTop()`, Order.FUNCTION_CALL];

// ── Value: nearest pipe gap bottom ───────────────────────────────────────────
Blockly.Blocks['nearest_pipe_gap_bottom'] = {
  init() {
    this.appendDummyInput().appendField('🏗️ onderkant opening dichtste pijp Y');
    this.setOutput(true, 'Number');
    this.setColour('#4a90d9');
    this.setTooltip('Y-positie van de onderkant van de opening in de dichtstbijzijnde pijp.');
  },
};
javascriptGenerator.forBlock['nearest_pipe_gap_bottom'] = () => [`window.__pipes.getGapBottom()`, Order.FUNCTION_CALL];
