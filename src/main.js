import './style.css';
import { initTheme } from './js/theme.js';
import { renderSidebar, renderToolsGrid } from './js/ui.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSidebar();
  renderToolsGrid();
  
  // Basic search functionality for home grid
  const searchInput = document.getElementById('tool-search');
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.tool-card');
    const navItems = document.querySelectorAll('.nav-item:not([data-id="home"])');
    
    cards.forEach(card => {
      const title = card.querySelector('.tool-card-title').textContent.toLowerCase();
      const desc = card.querySelector('.tool-card-desc').textContent.toLowerCase();
      if (title.includes(term) || desc.includes(term)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    navItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(term)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
