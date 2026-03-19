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
    description: 'Program the physics, pipes and visuals of a Flappy Bird clone.',
    icon: '🐦',
    color: '#e6a817',
  },
  {
    id: 'flappy-bird-advanced',
    title: 'CodeBird++',
    description: 'Write the actual game loop — gravity, pipes, collisions — entirely in Blockly.',
    icon: '🐦+',
    color: '#e63946',
  },
  {
    id: 'guess-the-number',
    title: 'Guess the Number',
    description: 'Configure the range, hints and rules of a number-guessing game.',
    icon: '🔢',
    color: '#7b5ea7',
  },
];
