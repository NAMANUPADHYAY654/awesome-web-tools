import './style.css'

// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('theme', target);
});

// Tool Definitions
const tools = [
  { id: 'password-generator', title: 'Password Generator', icon: '🔑', module: () => import('./tools/password-generator.js') },
  { id: 'json-formatter', title: 'JSON Formatter', icon: '{}', module: () => import('./tools/json-formatter.js') },
  { id: 'base64', title: 'Base64 Encoder', icon: '🔄', module: () => import('./tools/base64.js') },
  { id: 'text-case', title: 'Text Case Converter', icon: 'Aa', module: () => import('./tools/text-case.js') },
  { id: 'word-counter', title: 'Word Counter', icon: '📝', module: () => import('./tools/word-counter.js') },
  { id: 'regex-tester', title: 'Regex Tester', icon: '🔍', module: () => import('./tools/regex-tester.js') },
  { id: 'markdown-preview', title: 'Markdown Previewer', icon: 'Ⓜ️', module: () => import('./tools/markdown-preview.js') },
  { id: 'uuid-generator', title: 'UUID Generator', icon: '🆔', module: () => import('./tools/uuid-generator.js') },
  { id: 'lorem-ipsum', title: 'Lorem Ipsum Gen.', icon: '📜', module: () => import('./tools/lorem-ipsum.js') },
  { id: 'url-shortener', title: 'URL Shortener Mock', icon: '🔗', module: () => import('./tools/url-shortener.js') },
  { id: 'qr-generator', title: 'QR Code Generator', icon: '📱', module: () => import('./tools/qr-generator.js') },
  { id: 'color-palette', title: 'Color Palette', icon: '🎨', module: () => import('./tools/color-palette.js') },
  { id: 'timestamp', title: 'Timestamp Converter', icon: '⏰', module: () => import('./tools/timestamp.js') },
  { id: 'unit-converter', title: 'Unit Converter', icon: '⚖️', module: () => import('./tools/unit-converter.js') },
  { id: 'bmi-calculator', title: 'BMI Calculator', icon: '⚖️', module: () => import('./tools/bmi-calculator.js') },
  { id: 'gradient-generator', title: 'Gradient Generator', icon: '🌈', module: () => import('./tools/gradient-generator.js') },
  { id: 'meta-tag', title: 'Meta Tag Generator', icon: '🏷️', module: () => import('./tools/meta-tag.js') },
  { id: 'image-base64', title: 'Image to Base64', icon: '🖼️', module: () => import('./tools/image-base64.js') },
  { id: 'random-data', title: 'Random Data Gen.', icon: '🎲', module: () => import('./tools/random-data.js') },
  { id: 'cron-helper', title: 'Cron Helper', icon: '⏱️', module: () => import('./tools/cron-helper.js') }
];

// App State
let activeToolId = null;

// DOM Elements
const toolNav = document.getElementById('tool-nav');
const mainContent = document.getElementById('main-content');

// Render Navigation
function renderNav() {
  toolNav.innerHTML = '';
  tools.forEach(tool => {
    const navItem = document.createElement('div');
    navItem.className = `nav-item ${tool.id === activeToolId ? 'active' : ''}`;
    navItem.innerHTML = `<span class="icon">${tool.icon}</span> <span>${tool.title}</span>`;
    navItem.addEventListener('click', () => loadTool(tool));
    toolNav.appendChild(navItem);
  });
}

// Load Tool
async function loadTool(tool) {
  if (activeToolId === tool.id) return;
  activeToolId = tool.id;
  renderNav();
  
  mainContent.innerHTML = `<div class="loading">Loading ${tool.title}...</div>`;
  
  try {
    const { render, setup } = await tool.module();
    mainContent.innerHTML = `
      <div class="tool-view active">
        <h2>${tool.title}</h2>
        <div class="tool-layout">
          ${render()}
        </div>
      </div>
    `;
    if (setup) setup(mainContent);
  } catch (error) {
    mainContent.innerHTML = `<div class="error">Failed to load ${tool.title}. Error: ${error.message}</div>`;
  }
}

// Initial Load
function init() {
  const hash = window.location.hash.slice(1);
  const initialTool = tools.find(t => t.id === hash) || tools[0];
  loadTool(initialTool);
}

// Sync hash with active tool
window.addEventListener('hashchange', init);

// Override loadTool to update hash
const originalLoadTool = loadTool;
loadTool = async (tool) => {
  window.location.hash = tool.id;
  await originalLoadTool(tool);
};

init();
