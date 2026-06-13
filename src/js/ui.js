import { toolsData } from './state.js';

export function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = `
    <div class="nav-item active" data-id="home">
      <span>🏠</span> Home / All Tools
    </div>
  ` + toolsData.map(tool => `
    <div class="nav-item" data-id="${tool.id}">
      <span>${tool.icon}</span> ${tool.name}
    </div>
  `).join('');

  nav.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      nav.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const id = e.currentTarget.getAttribute('data-id');
      switchView(id);
    });
  });
}

export function renderToolsGrid() {
  const grid = document.getElementById('tools-grid');
  grid.innerHTML = toolsData.map(tool => `
    <div class="tool-card glass-panel" data-id="${tool.id}">
      <div class="tool-card-icon">${tool.icon}</div>
      <div class="tool-card-title">${tool.name}</div>
      <div class="tool-card-desc">${tool.desc}</div>
      <span class="badge">${tool.category}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      // Update sidebar active state
      document.querySelectorAll('.sidebar-nav .nav-item').forEach(i => i.classList.remove('active'));
      const activeItem = document.querySelector(`.sidebar-nav .nav-item[data-id="${id}"]`);
      if(activeItem) activeItem.classList.add('active');
      
      switchView(id);
    });
  });
}

export function switchView(id) {
  const headerTitle = document.getElementById('header-title');
  const gridView = document.getElementById('tools-grid-view');
  const toolContentArea = document.getElementById('tool-content-area');

  if (id === 'home') {
    headerTitle.innerHTML = `<h1>All Tools</h1><p>Select a tool from the sidebar or search below.</p>`;
    gridView.style.display = 'block';
    toolContentArea.innerHTML = '';
  } else {
    const tool = toolsData.find(t => t.id === id);
    headerTitle.innerHTML = `<h1>${tool.icon} ${tool.name}</h1><p>${tool.desc}</p>`;
    gridView.style.display = 'none';
    
    toolContentArea.innerHTML = `
      <div class="tool-view active glass-panel" style="padding: 2rem;">
        <div id="${tool.id}-container">
           <h2 style="text-align:center; color: var(--text-muted); margin-top: 2rem;">Tool implementation coming soon...</h2>
        </div>
      </div>
    `;
    
    // Dispatch an event so tool modules can initialize themselves
    window.dispatchEvent(new CustomEvent('tool-loaded', { detail: { id: tool.id } }));
  }
}
