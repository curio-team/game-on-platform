export const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category', name: '🏃 Mario-fysica', colour: '#e60000', contents: [
        { kind: 'block', type: 'phys_gravity' },
        { kind: 'block', type: 'phys_jump' },
        { kind: 'block', type: 'phys_speed' },
        { kind: 'block', type: 'phys_size' },
      ],
    },
    {
      kind: 'category', name: '👾 Vijanden', colour: '#c84c0c', contents: [
        { kind: 'block', type: 'enemy_speed' },
        { kind: 'block', type: 'enemy_stomp' },
      ],
    },
    {
      kind: 'category', name: '🎮 Spelregels', colour: '#7b5ea7', contents: [
        { kind: 'block', type: 'rules_lives' },
        { kind: 'block', type: 'rules_coin_value' },
      ],
    },
    {
      kind: 'category', name: '🎨 Visueel Thema', colour: '#5ea765', contents: [
        { kind: 'block', type: 'look_sky' },
        { kind: 'block', type: 'look_ground' },
        { kind: 'block', type: 'look_mario' },
        { kind: 'block', type: 'look_blocks' },
        { kind: 'block', type: 'look_pipes' },
        { kind: 'block', type: 'look_enemies' },
      ],
    },
    {
      kind: 'category', name: '🔢 Getallen', colour: '#888', contents: [
        { kind: 'block', type: 'math_number', fields: { NUM: 5 } },
      ],
    },
  ],
};

export const DEFAULT_WORKSPACE_XML = `<xml>
  <block type="phys_gravity"  x="30"  y="30">  <value name="VALUE"><block type="math_number"><field name="NUM">12</field></block></value></block>
  <block type="phys_jump"     x="30"  y="110"> <value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block>
  <block type="phys_speed"    x="30"  y="190"> <value name="VALUE"><block type="math_number"><field name="NUM">3</field></block></value></block>
  <block type="rules_lives"   x="30"  y="270"> <value name="VALUE"><block type="math_number"><field name="NUM">3</field></block></value></block>
  <block type="enemy_speed"   x="30"  y="350"> <value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value></block>
  <block type="enemy_stomp"   x="30"  y="430"> <field name="ACTION">squish</field></block>
  <block type="look_sky"      x="280" y="30">  <field name="COLOR">#5c94fc</field></block>
  <block type="look_mario"    x="280" y="100"> <field name="COLOR">#e60000</field></block>
</xml>`;
