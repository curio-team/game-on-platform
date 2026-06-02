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
    const dur  = generator.valueToCode(block, 'DURATION', Order.ATOMIC) || String(defDur);
    const wave = block.getFieldValue('WAVE') || defWave;
    return `window.GAME_CONFIG.sounds = window.GAME_CONFIG.sounds || {};\n`
         + `window.GAME_CONFIG.sounds.${configKey} = { freq: ${freq}, dur: ${dur}, wave: '${wave}' };\n`;
  };
}

defineSoundBlock('mario_sound_on_jump',  'sprong-geluid',  'onJump',  500, 130, 'square', 'Geluid wanneer Mario springt.');
defineSoundBlock('mario_sound_on_coin',  'munt-geluid',    'onCoin',  1320, 80, 'sine',   'Geluid wanneer Mario een munt pakt.');
defineSoundBlock('mario_sound_on_stomp', 'stomp-geluid',   'onStomp', 250, 100, 'square', 'Geluid wanneer Mario een vijand verplettert.');
defineSoundBlock('mario_sound_on_hurt',  'pijn-geluid',    'onHurt',  350, 250, 'square', 'Geluid wanneer Mario geraakt wordt.');
