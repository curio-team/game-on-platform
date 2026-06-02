import * as Blockly from 'blockly/core';
import { javascriptGenerator, Order } from 'blockly/javascript';

const WAVE_DROPDOWN = [
  ['blokgolf', 'square'],
  ['sinus', 'sine'],
  ['zaagtand', 'sawtooth'],
  ['driehoek', 'triangle'],
];

function defineSoundBlock(type, label, configKey, defFreq, defDur, defWave, tooltip) {
  Blockly.Blocks[type] = {
    init() {
      this.appendValueInput('FREQ').setCheck('Number').appendField(`🔊 ${label}  freq`);
      this.appendValueInput('DURATION').setCheck('Number').appendField('Hz   duur');
      this.appendDummyInput()
        .appendField('ms   golfvorm')
        .appendField(new Blockly.FieldDropdown(WAVE_DROPDOWN), 'WAVE');
      this.setColour('#e67e22');
      this.setTooltip(tooltip);
    },
  };
  javascriptGenerator.forBlock[type] = (block, generator) => {
    const freq = generator.valueToCode(block, 'FREQ', Order.ATOMIC) || String(defFreq);
    const dur = generator.valueToCode(block, 'DURATION', Order.ATOMIC) || String(defDur);
    const wave = block.getFieldValue('WAVE') || defWave;
    return `window.GAME_CONFIG.sounds = window.GAME_CONFIG.sounds || {};\n`
      + `window.GAME_CONFIG.sounds.${configKey} = { freq: ${freq}, dur: ${dur}, wave: '${wave}' };\n`;
  };
}

defineSoundBlock('sound_on_flap', 'vlap-geluid', 'onFlap', 600, 100, 'square', 'Geluid wanneer de vogel flapt.');
defineSoundBlock('sound_on_score', 'score-geluid', 'onScore', 880, 120, 'sine', 'Geluid wanneer de vogel tussen de buizen vliegt.');
defineSoundBlock('sound_on_hit', 'botsingsgeluid', 'onHit', 200, 250, 'sawtooth', 'Geluid wanneer de vogel ergens tegenaan botst.');
