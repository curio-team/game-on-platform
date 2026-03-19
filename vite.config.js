import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        flappyBird: 'games/flappy-bird/index.html',
        guessTheNumber: 'games/guess-the-number/index.html',
      },
    },
  },
});
