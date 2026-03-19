export const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category', name: '🔢 Number Setup', colour: '#7b5ea7', contents: [
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
      kind: 'category', name: '🎨 Visual Theme', colour: '#5ea765', contents: [
        { kind: 'block', type: 'guess_bg_color' },
        { kind: 'block', type: 'guess_accent_color' },
      ]
    },
    {
      kind: 'category', name: '🔢 Numbers', colour: '#888', contents: [
        { kind: 'block', type: 'math_number', fields: { NUM: 50 } },
      ]
    },
  ],
};

export const DEFAULT_WORKSPACE_XML = `<xml>
  <block type="guess_range"    x="30"  y="30">  <value name="VALUE"><block type="math_number"><field name="NUM">100</field></block></value></block>
  <block type="guess_attempts" x="30"  y="110"> <value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block>
  <block type="guess_hints"    x="30"  y="190"> <field name="STYLE">basic</field></block>
  <block type="guess_bg_color" x="400" y="30">  <field name="COLOR">#0d0d2a</field></block>
  <block type="guess_accent_color" x="400" y="110"><field name="COLOR">#ffdd00</field></block>
</xml>`;
