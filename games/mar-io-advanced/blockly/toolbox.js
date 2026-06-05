export const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category', name: '\ud83c\udfae Gebeurtenissen', colour: '#e63946', contents: [
        { kind: 'block', type: 'event_game_start' },
        { kind: 'block', type: 'event_every_frame' },
        { kind: 'block', type: 'event_on_jump' },
        { kind: 'block', type: 'event_on_stomp' },
        { kind: 'block', type: 'event_on_hurt' },
        { kind: 'block', type: 'event_on_coin' },
        { kind: 'block', type: 'event_on_block_hit' },
        { kind: 'block', type: 'event_on_fall' },
        { kind: 'block', type: 'event_on_flag' },
      ],
    },
    {
      kind: 'category', name: '\ud83c\udfc3 Mario', colour: '#e60000', contents: [
        {
          kind: 'block', type: 'mario_apply_gravity',
          inputs: { AMOUNT: { shadow: { type: 'math_number', fields: { NUM: 0.7 } } } },
        },
        {
          kind: 'block', type: 'mario_move',
          inputs: { SPEED: { shadow: { type: 'math_number', fields: { NUM: 3 } } } },
        },
        {
          kind: 'block', type: 'mario_jump',
          inputs: { FORCE: { shadow: { type: 'math_number', fields: { NUM: 10 } } } },
        },
        {
          kind: 'block', type: 'mario_bounce',
          inputs: { FORCE: { shadow: { type: 'math_number', fields: { NUM: 7 } } } },
        },
        {
          kind: 'block', type: 'mario_set_invincible',
          inputs: { FRAMES: { shadow: { type: 'math_number', fields: { NUM: 60 } } } },
        },
        { kind: 'block', type: 'mario_get_x' },
        { kind: 'block', type: 'mario_get_y' },
        { kind: 'block', type: 'mario_get_vy' },
        { kind: 'block', type: 'mario_is_grounded' },
        { kind: 'block', type: 'mario_is_falling' },
      ],
    },
    {
      kind: 'category', name: '\ud83c\udf0d Wereld', colour: '#4a90d9', contents: [
        { kind: 'block', type: 'world_generate' },
        {
          kind: 'block', type: 'world_set_enemy_speed',
          inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 1 } } } },
        },
        { kind: 'block', type: 'world_check_landing' },
        { kind: 'block', type: 'world_check_coins' },
        { kind: 'block', type: 'world_check_enemies' },
        { kind: 'block', type: 'world_update_enemies' },
        { kind: 'block', type: 'world_check_pit' },
        { kind: 'block', type: 'world_check_flagpole' },
        { kind: 'block', type: 'world_update_camera' },
        { kind: 'block', type: 'world_respawn' },
        { kind: 'block', type: 'world_enemy_count' },
        { kind: 'block', type: 'world_coin_count' },
      ],
    },
    {
      kind: 'category', name: '\ud83c\udfc6 Spel', colour: '#7b5ea7', contents: [
        { kind: 'block', type: 'game_game_over' },
        { kind: 'block', type: 'game_win' },
        {
          kind: 'block', type: 'game_set_lives',
          inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 3 } } } },
        },
        { kind: 'block', type: 'game_lose_life' },
        {
          kind: 'block', type: 'game_add_score',
          inputs: { AMOUNT: { shadow: { type: 'math_number', fields: { NUM: 100 } } } },
        },
        {
          kind: 'block', type: 'game_add_coin',
          inputs: { AMOUNT: { shadow: { type: 'math_number', fields: { NUM: 1 } } } },
        },
        { kind: 'block', type: 'game_get_score' },
        { kind: 'block', type: 'game_get_lives' },
        { kind: 'block', type: 'game_get_coins' },
        { kind: 'block', type: 'game_spark_effect' },
      ],
    },
    {
      kind: 'category', name: '\u23f1\ufe0f Timing', colour: '#e6a817', contents: [
        {
          kind: 'block', type: 'game_every_n_frames',
          inputs: { FRAMES: { shadow: { type: 'math_number', fields: { NUM: 60 } } } },
        },
        { kind: 'block', type: 'game_get_frame' },
        {
          kind: 'block', type: 'game_wait_ms',
          inputs: { DELAY: { shadow: { type: 'math_number', fields: { NUM: 1000 } } } },
        },
      ],
    },
    {
      kind: 'category', name: '\ud83c\udfa8 Thema', colour: '#5ea765', contents: [
        {
          kind: 'block', type: 'theme_sky',
          inputs: { COLOR: { shadow: { type: 'color_picker', fields: { COLOR: '#5c94fc' } } } },
        },
        {
          kind: 'block', type: 'theme_ground',
          inputs: { COLOR: { shadow: { type: 'color_picker', fields: { COLOR: '#c84c0c' } } } },
        },
        {
          kind: 'block', type: 'theme_mario',
          inputs: { COLOR: { shadow: { type: 'color_picker', fields: { COLOR: '#e60000' } } } },
        },
        {
          kind: 'block', type: 'theme_blocks',
          inputs: { COLOR: { shadow: { type: 'color_picker', fields: { COLOR: '#e6a817' } } } },
        },
        {
          kind: 'block', type: 'theme_pipes',
          inputs: { COLOR: { shadow: { type: 'color_picker', fields: { COLOR: '#00a800' } } } },
        },
        {
          kind: 'block', type: 'theme_enemies',
          inputs: { COLOR: { shadow: { type: 'color_picker', fields: { COLOR: '#c84c0c' } } } },
        },
        { kind: 'block', type: 'color_picker' },
      ],
    },
    {
      kind: 'category', name: '\ud83d\udd0a Geluid', colour: '#e67e22', contents: [
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
      kind: 'category', name: '\u2705 Logica', colour: '#5b80a5', contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_negate' },
        { kind: 'block', type: 'logic_boolean' },
        { kind: 'block', type: 'random_branch' },
      ],
    },
    {
      kind: 'category', name: '\ud83d\udd22 Rekenen', colour: '#5b67a5', contents: [
        { kind: 'block', type: 'math_number', fields: { NUM: 10 } },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' },
        { kind: 'block', type: 'math_constrain' },
        { kind: 'block', type: 'math_random_int' },
      ],
    },
    {
      kind: 'category', name: '\ud83d\udce6 Variabelen', colour: '#a55b5b', custom: 'VARIABLE',
    },
  ],
};

/**
 * Default workspace — a complete working marIO++ game, fully Blockly-driven.
 *
 * \ud83d\ude80 Game start: set lives, configure world, generate level, set theme
 * \ud83c\udfae Every frame: apply gravity \u2192 move Mario \u2192 check landing \u2192 update enemies \u2192
 *                   check enemies \u2192 check coins \u2192 check pit/flag \u2192 update camera
 * \ud83d\udc46 On jump: Mario jumps with force 10
 * \ud83e\uddb6 On stomp: add 200 score + bounce
 * \ud83d\udca5 On hurt: lose a life + invincible + bounce
 * \ud83e\ude99 On coin: add 1 coin + 100 score
 * \u2753 On block hit: add 1 coin + 100 score
 * \ud83d\udd73\ufe0f On fall in pit: lose life + respawn
 * \ud83c\udfc1 On reach flag: win!
 */
export const DEFAULT_WORKSPACE_XML = `<xml>
  <block type="event_game_start" x="20" y="20">
    <statement name="DO">
      <block type="game_set_lives">
        <value name="VALUE">
          <block type="math_number"><field name="NUM">3</field></block>
        </value>
        <next>
          <block type="world_generate"></block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_every_frame" x="20" y="380">
    <statement name="DO">
      <block type="mario_apply_gravity">
        <value name="AMOUNT">
          <block type="math_number"><field name="NUM">0.7</field></block>
        </value>
        <next>
          <block type="mario_move">
            <value name="SPEED">
              <block type="math_number"><field name="NUM">3</field></block>
            </value>
            <next>
              <block type="world_check_landing">
                <next>
                  <block type="world_update_enemies">
                    <next>
                      <block type="world_check_enemies">
                        <next>
                          <block type="world_check_coins">
                            <next>
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="world_check_pit"></block>
                                </value>
                                <statement name="DO0">
                                  <block type="game_lose_life">
                                    <next>
                                      <block type="world_respawn"></block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0">
                                      <block type="world_check_flagpole"></block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="game_win"></block>
                                    </statement>
                                    <next>
                                      <block type="world_update_camera"></block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_jump" x="560" y="20">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">square</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">500</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">130</field></block></value>
        <next>
          <block type="mario_jump">
            <value name="FORCE">
              <block type="math_number"><field name="NUM">10</field></block>
            </value>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_stomp" x="560" y="200">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">square</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">250</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">100</field></block></value>
        <next>
          <block type="game_add_score">
            <value name="AMOUNT">
              <block type="math_number"><field name="NUM">200</field></block>
            </value>
            <next>
              <block type="mario_bounce">
                <value name="FORCE">
                  <block type="math_number"><field name="NUM">7</field></block>
                </value>
                <next>
                  <block type="game_spark_effect"></block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_hurt" x="560" y="430">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">square</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">350</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">250</field></block></value>
        <next>
          <block type="game_lose_life">
            <next>
              <block type="mario_set_invincible">
                <value name="FRAMES">
                  <block type="math_number"><field name="NUM">60</field></block>
                </value>
                <next>
                  <block type="mario_bounce">
                    <value name="FORCE">
                      <block type="math_number"><field name="NUM">10</field></block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_coin" x="560" y="680">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">sine</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">1320</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">80</field></block></value>
        <next>
          <block type="game_add_coin">
            <value name="AMOUNT">
              <block type="math_number"><field name="NUM">1</field></block>
            </value>
            <next>
              <block type="game_add_score">
                <value name="AMOUNT">
                  <block type="math_number"><field name="NUM">100</field></block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="event_on_block_hit" x="560" y="870">
    <statement name="DO">
      <block type="sound_play">
        <field name="WAVE">square</field>
        <value name="FREQ"><block type="math_number"><field name="NUM">400</field></block></value>
        <value name="DURATION"><block type="math_number"><field name="NUM">80</field></block></value>
        <next>
          <block type="game_add_coin">
            <value name="AMOUNT">
              <block type="math_number"><field name="NUM">1</field></block>
            </value>
            <next>
              <block type="game_add_score">
                <value name="AMOUNT">
                  <block type="math_number"><field name="NUM">100</field></block>
                </value>
                <next>
                  <block type="game_spark_effect"></block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;
