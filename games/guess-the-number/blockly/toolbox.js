export const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category', name: '🔢 Getalinstelling', colour: '#7b5ea7', contents: [
        { kind: 'block', type: 'guess_range' },
        { kind: 'block', type: 'guess_attempts' },
      ]
    },
    {
      kind: 'category', name: '💡 Hints', colour: '#4a90d9', contents: [
        { kind: 'block', type: 'guess_hints' },
      ]
    },
    {
      kind: 'category', name: '🎨 Visueel Thema', colour: '#5ea765', contents: [
        { kind: 'block', type: 'guess_bg_color' },
        { kind: 'block', type: 'guess_accent_color' },
      ]
    },
    {
      kind: 'category', name: '🔊 Geluid', colour: '#e67e22', contents: [
        {
          kind: 'block', type: 'guess_sound_too_high',
          inputs: {
            FREQ: { shadow: { type: 'math_number', fields: { NUM: 660 } } },
            DURATION: { shadow: { type: 'math_number', fields: { NUM: 150 } } },
          },
        },
        {
          kind: 'block', type: 'guess_sound_too_low',
          inputs: {
            FREQ: { shadow: { type: 'math_number', fields: { NUM: 440 } } },
            DURATION: { shadow: { type: 'math_number', fields: { NUM: 150 } } },
          },
        },
        {
          kind: 'block', type: 'guess_sound_correct',
          inputs: {
            FREQ: { shadow: { type: 'math_number', fields: { NUM: 523 } } },
            DURATION: { shadow: { type: 'math_number', fields: { NUM: 300 } } },
          },
        },
      ]
    },
    {
      kind: 'category', name: '🔢 Getallen', colour: '#888', contents: [
        { kind: 'block', type: 'math_number', fields: { NUM: 50 } },
      ]
    },
  ],
};

export const DEFAULT_WORKSPACE_XML = `<xml>
  <block type="guess_range"    x="30"  y="30">  <value name="VALUE"><block type="math_number"><field name="NUM">100</field></block></value></block>
  <block type="guess_attempts" x="30"  y="110"> <value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block>
  <block type="guess_hints"    x="30"  y="190"> <field name="STYLE">basic</field></block>
  <block type="guess_bg_color" x="590" y="30">  <field name="COLOR">#0d0d2a</field></block>
  <block type="guess_accent_color" x="550" y="110"><field name="COLOR">#ffdd00</field></block>
  <block type="guess_sound_too_high" x="550" y="200">
    <field name="WAVE">sine</field>
    <value name="FREQ"><block type="math_number"><field name="NUM">660</field></block></value>
    <value name="DURATION"><block type="math_number"><field name="NUM">150</field></block></value>
  </block>
  <block type="guess_sound_too_low"  x="550" y="320">
    <field name="WAVE">sine</field>
    <value name="FREQ"><block type="math_number"><field name="NUM">440</field></block></value>
    <value name="DURATION"><block type="math_number"><field name="NUM">150</field></block></value>
  </block>
  <block type="guess_sound_correct"  x="550" y="440">
    <field name="WAVE">sine</field>
    <value name="FREQ"><block type="math_number"><field name="NUM">523</field></block></value>
    <value name="DURATION"><block type="math_number"><field name="NUM">300</field></block></value>
  </block>
</xml>`;
