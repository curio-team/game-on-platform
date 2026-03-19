# 'Game On' Platform

An interactive coding platform for young people to experience programming at a high level — no syntax required. Players use visual **puzzle blocks** (powered by [Blockly](https://developers.google.com/blockly)) to configure or partially program games, then immediately play what they built.

## What it is

- A **game selection screen** that links to individual playable games.
- Each game has a **split view**: the canvas on the left, a Blockly workspace on the right.
- Players drag blocks together, hit **Run Game**, and their code runs live inside the canvas.

## Games

| Game | Style | What you program |
|---|---|---|
| 🐦 **CodeBird** | Config | Gravity, jump force, pipe speed, gap, lives, colors |
| 🐦+ **CodeBird++** | Program game loop | Every-frame physics, pipe spawning, collision handling, input — entirely in Blockly |
| 🔢 **Guess the Number** | Config | Number range, hints, rules |

**Config** games let you tweak parameters and see the effect. **Program game loop** games require you to wire up physics, spawning, and win/lose logic yourself using event blocks — closer to real programming.

## Tech stack

- [Vite](https://vitejs.dev/) — dev server and bundler
- [Blockly](https://developers.google.com/blockly) — visual block editor
- Vanilla JS + Canvas API

## Setup

**Requirements:** Node.js 20.19+ or 22.12+

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```
