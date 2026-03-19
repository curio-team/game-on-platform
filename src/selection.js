import './styles/main.css';
import { games } from './games.js';

const container = document.getElementById('gameCards');

for (const g of games) {
  const card = document.createElement('a');
  card.href = `./games/${g.id}/`;
  card.className = 'game-card';
  card.style.setProperty('--card-color', g.color);
  card.innerHTML = `
    <div class="game-card-icon">${g.icon}</div>
    <div class="game-card-title">${g.title}</div>
    <div class="game-card-desc">${g.description}</div>
    <div class="game-card-play">▶ SPEEL &amp; CODEER</div>
  `;
  container.appendChild(card);
}
