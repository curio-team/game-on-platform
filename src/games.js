/**
 * Game registry — add an entry here whenever a new game folder is created.
 *
 * Each entry maps to a folder at  games/<id>/
 * with an index.html page that is automatically linked from the selection screen.
 */
export const games = [
  {
    id: 'flappy-bird',
    title: 'CodeBird',
    description: 'Programmeer de fysica, pijpen en visuals van een Flappy Bird-kloon.',
    icon: '🐦',
    color: '#e6a817',
  },
  {
    id: 'flappy-bird-advanced',
    title: 'CodeBird++',
    description: 'Schrijf de echte ‘game loop’ - zwaartekracht, pijpen en botsingen - volledig in Blockly.',
    icon: '🐦+',
    color: '#e63946',
  },
  {
    id: 'guess-the-number',
    title: 'Raad het Getal',
    description: 'Stel het bereik, hints en regels van een raadspel met getallen in.',
    icon: '🔢',
    color: '#7b5ea7',
  },
  {
    id: 'mar-io',
    title: 'marIO',
    description: 'Bouw je eigen Mario-level met vijanden, obstakels en power-ups via Blockly.',
    icon: '🍄',
    color: '#e60000',
  },
  {
    id: 'mar-io-advanced',
    title: 'marIO++',
    description: 'Schrijf de echte game loop — zwaartekracht, vijanden en botsingen — volledig in Blockly.',
    icon: '🍄+',
    color: '#e63946',
  },
];
