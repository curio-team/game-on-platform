import { defineConfig } from 'vite';

export default defineConfig({
  // For github pages we need to set the base path as it will be https://curio-team.github.io/game-on-platform/:
  base: '/game-on-platform/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        flappyBird: 'games/flappy-bird/index.html',
        flappyBirdAdvanced: 'games/flappy-bird-advanced/index.html',
        guessTheNumber: 'games/guess-the-number/index.html',
        marIo: 'games/mar-io/index.html',
        marIoAdvanced: 'games/mar-io-advanced/index.html',
      },
    },
  },
});
