import"./main-BwBGk5hN.js";var e=[{id:`flappy-bird`,title:`CodeBird`,description:`Program the physics, pipes and visuals of a Flappy Bird clone.`,icon:`🐦`,color:`#e6a817`},{id:`flappy-bird-advanced`,title:`CodeBird++`,description:`Write the actual game loop — gravity, pipes, collisions — entirely in Blockly.`,icon:`🐦+`,color:`#e63946`},{id:`guess-the-number`,title:`Guess the Number`,description:`Configure the range, hints and rules of a number-guessing game.`,icon:`🔢`,color:`#7b5ea7`}],t=document.getElementById(`gameCards`);for(let n of e){let e=document.createElement(`a`);e.href=`./games/${n.id}/`,e.className=`game-card`,e.style.setProperty(`--card-color`,n.color),e.innerHTML=`
    <div class="game-card-icon">${n.icon}</div>
    <div class="game-card-title">${n.title}</div>
    <div class="game-card-desc">${n.description}</div>
    <div class="game-card-play">▶ PLAY &amp; CODE</div>
  `,t.appendChild(e)}