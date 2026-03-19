/** Toolbox definition as a JavaScript object (Blockly v10+ JSON format). */
export const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '🐦 Bird Physics',
      colour: '#e6a817',
      contents: [
        { kind: 'block', type: 'bird_gravity' },
        { kind: 'block', type: 'bird_jump' },
        { kind: 'block', type: 'bird_size' },
      ],
    },
    {
      kind: 'category',
      name: '🏗️ Pipes',
      colour: '#4a90d9',
      contents: [
        { kind: 'block', type: 'pipe_speed' },
        { kind: 'block', type: 'pipe_gap' },
        { kind: 'block', type: 'pipe_interval' },
      ],
    },
    {
      kind: 'category',
      name: '🎮 Game Rules',
      colour: '#7b5ea7',
      contents: [
        { kind: 'block', type: 'game_lives' },
        { kind: 'block', type: 'game_collision' },
      ],
    },
    {
      kind: 'category',
      name: '🎨 Visual Theme',
      colour: '#5ea765',
      contents: [
        { kind: 'block', type: 'theme_sky' },
        { kind: 'block', type: 'theme_bird_color' },
        { kind: 'block', type: 'theme_pipe_color' },
      ],
    },
    {
      kind: 'category',
      name: '🔢 Numbers',
      colour: '#888',
      contents: [
        { kind: 'block', type: 'math_number', fields: { NUM: 5 } },
      ],
    },
  ],
};

/** Default blocks pre-loaded into the workspace on first run. */
export const DEFAULT_WORKSPACE_XML = `<xml>
  <block type="bird_gravity" x="30" y="30">
    <value name="VALUE"><block type="math_number"><field name="NUM">8</field></block></value>
  </block>
  <block type="bird_jump" x="30" y="110">
    <value name="VALUE"><block type="math_number"><field name="NUM">12</field></block></value>
  </block>
  <block type="pipe_speed" x="30" y="190">
    <value name="VALUE"><block type="math_number"><field name="NUM">3</field></block></value>
  </block>
  <block type="pipe_gap" x="30" y="270">
    <value name="VALUE"><block type="math_number"><field name="NUM">130</field></block></value>
  </block>
  <block type="game_lives" x="30" y="350">
    <value name="VALUE"><block type="math_number"><field name="NUM">3</field></block></value>
  </block>
  <block type="pipe_interval" x="500" y="70">
    <value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value>
  </block>
  <block type="theme_sky" x="500" y="150">
    <field name="COLOR">#1a1a4e</field>
  </block>
  <block type="theme_bird_color" x="500" y="230">
    <field name="COLOR">#ffdd00</field>
  </block>
  <block type="theme_pipe_color" x="500" y="300">
    <field name="COLOR">#39ff14</field>
  </block>
  <block type="game_collision" x="500" y="390">
    <field name="ACTION">bounce</field>
  </block>
</xml>`;
