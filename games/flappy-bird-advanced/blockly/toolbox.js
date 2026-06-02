export const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category', name: '🎮 Gebeurtenissen', colour: '#e63946', contents: [
        { kind: 'block', type: 'event_game_start' },
        { kind: 'block', type: 'event_every_frame' },
        { kind: 'block', type: 'event_on_flap' },
        { kind: 'block', type: 'event_on_score' },
        { kind: 'block', type: 'event_on_collision' },
        { kind: 'block', type: 'event_on_out_of_bounds' },
      ],
    },
    {
      kind: 'category', name: '🐦 Vogel', colour: '#e6a817', contents: [
        {
          kind: 'block', type: 'bird_apply_gravity',
          inputs: { AMOUNT: { shadow: { type: 'math_number', fields: { NUM: 1.2 } } } },
        },
        {
          kind: 'block', type: 'bird_flap',
          inputs: { FORCE: { shadow: { type: 'math_number', fields: { NUM: 12 } } } },
        },
        { kind: 'block', type: 'bird_is_colliding' },
        { kind: 'block', type: 'bird_is_out_of_bounds' },
        { kind: 'block', type: 'bird_get_y' },
        { kind: 'block', type: 'bird_get_velocity' },
      ],
    },
    {
      kind: 'category', name: '🏗️ Pipes', colour: '#4a90d9', contents: [
        { kind: 'block', type: 'pipe_update' },
        { kind: 'block', type: 'pipe_spawn_now' },
        {
          kind: 'block', type: 'pipe_set_speed',
          inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 3 } } } },
        },
        {
          kind: 'block', type: 'pipe_set_gap',
          inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 130 } } } },
        },
        { kind: 'block', type: 'nearest_pipe_x' },
        { kind: 'block', type: 'nearest_pipe_gap_top' },
        { kind: 'block', type: 'nearest_pipe_gap_bottom' },
      ],
    },
    {
      kind: 'category', name: '🏆 Spel', colour: '#7b5ea7', contents: [
        { kind: 'block', type: 'game_game_over' },
        { kind: 'block', type: 'game_lose_life' },
        {
          kind: 'block', type: 'game_set_lives',
          inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 3 } } } },
        },
        {
          kind: 'block', type: 'game_add_score',
          inputs: { AMOUNT: { shadow: { type: 'math_number', fields: { NUM: 1 } } } },
        },
        { kind: 'block', type: 'game_get_score' },
        { kind: 'block', type: 'game_get_lives' },
        { kind: 'block', type: 'game_spark_effect' },
      ],
    },
    {
      kind: 'category', name: '⏱️ Timing', colour: '#e6a817', contents: [
        {
          kind: 'block', type: 'game_every_n_frames',
          inputs: { FRAMES: { shadow: { type: 'math_number', fields: { NUM: 90 } } } },
        },
        { kind: 'block', type: 'game_get_frame' },
        {
          kind: 'block', type: 'game_wait_ms',
          inputs: { DELAY: { shadow: { type: 'math_number', fields: { NUM: 1000 } } } },
        },
      ],
    },
    {
      kind: 'category', name: '🎨 Thema', colour: '#5ea765', contents: [
        { kind: 'block', type: 'theme_sky' },
        { kind: 'block', type: 'theme_bird_color' },
        { kind: 'block', type: 'theme_pipe_color' },
      ],
    },
    {
      kind: 'category', name: '🔊 Geluid', colour: '#e67e22', contents: [
        {
          kind: 'block', type: 'sound_play',
          inputs: {
            FREQ: { shadow: { type: 'math_number', fields: { NUM: 440 } } },
            DURATION: { shadow: { type: 'math_number', fields: { NUM: 200 } } },
          },
        },
      ],
    },
    {
      kind: 'category', name: '✅ Logica', colour: '#5b80a5', contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_negate' },
        { kind: 'block', type: 'logic_boolean' },
      ],
    },
    {
      kind: 'category', name: '🔢 Rekenen', colour: '#5b67a5', contents: [
        { kind: 'block', type: 'math_number', fields: { NUM: 10 } },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' },
        { kind: 'block', type: 'math_constrain' },
        { kind: 'block', type: 'math_random_int' },
      ],
    },
    {
      kind: 'category', name: '📦 Variabelen', colour: '#a55b5b', custom: 'VARIABLE',
    },
  ],
};

/**
 * Default workspace — a complete working Flappy Bird game, fully Blockly-driven.
 *
 * 🚀 Game start: set lives, pipe speed, pipe gap
 * 🎮 Every frame: apply gravity → update pipes → every 90 frames spawn a pipe
 * 👆 On flap: bird flap with force 12
 * 🏆 On score: add 1 to score + spark effect
 * 💥 On collision: lose a life
 * 🚧 On out of bounds: game over
 */
export const DEFAULT_WORKSPACE_XML = `<xml>
  <block type="event_game_start" x="20" y="20">
    <statement name="DO">
      <block type="game_set_lives">
        <value name="VALUE">
          <block type="math_number"><field name="NUM">3</field></block>
        </value>
        <next>
          <block type="pipe_set_speed">
            <value name="VALUE">
              <block type="math_number"><field name="NUM">3</field></block>
            </value>
            <next>
              <block type="pipe_set_gap">
                <value name="VALUE">
                  <block type="math_number"><field name="NUM">130</field></block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_every_frame" x="20" y="260">
    <statement name="DO">
      <block type="bird_apply_gravity">
        <value name="AMOUNT">
          <block type="math_number"><field name="NUM">1.2</field></block>
        </value>
        <next>
          <block type="pipe_update">
            <next>
              <block type="game_every_n_frames">
                <value name="FRAMES">
                  <block type="math_number"><field name="NUM">90</field></block>
                </value>
                <statement name="DO">
                  <block type="pipe_spawn_now"></block>
                </statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_flap" x="560" y="20">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">square</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">600</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">100</field></block></value>
        <next>
          <block type="bird_flap">
            <value name="FORCE">
              <block type="math_number"><field name="NUM">12</field></block>
            </value>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_score" x="560" y="200">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">sine</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">880</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">120</field></block></value>
        <next>
          <block type="game_add_score">
            <value name="AMOUNT">
              <block type="math_number"><field name="NUM">1</field></block>
            </value>
            <next>
              <block type="game_spark_effect"></block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_collision" x="560" y="420">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">sawtooth</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">200</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">250</field></block></value>
        <next>
          <block type="game_lose_life"></block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_out_of_bounds" x="560" y="580">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">square</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">350</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">250</field></block></value>
        <next>
          <block type="game_game_over"></block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;
