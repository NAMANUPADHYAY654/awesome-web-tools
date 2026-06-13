export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
      <button id="cp-gen" class="btn btn-primary" style="align-self: flex-start;">Generate Random Palette</button>
      <div id="cp-colors" style="display: flex; flex-wrap: wrap; gap: 1rem; min-height: 150px;">
        <!-- Colors injected here -->
      </div>
    </div>
  `;
}

export function setup(container) {
  const genBtn = container.querySelector('#cp-gen');
  const colorsContainer = container.querySelector('#cp-colors');

  const genColor = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

  const renderPalette = () => {
    colorsContainer.innerHTML = '';
    for(let i=0; i<5; i++) {
      const hex = genColor();
      const div = document.createElement('div');
      div.style.flex = '1';
      div.style.minWidth = '100px';
      div.style.height = '150px';
      div.style.backgroundColor = hex;
      div.style.borderRadius = 'var(--radius-md)';
      div.style.display = 'flex';
      div.style.alignItems = 'flex-end';
      div.style.justifyContent = 'center';
      div.style.padding = '1rem';
      div.style.cursor = 'pointer';
      div.style.transition = 'transform 0.2s';
      
      div.innerHTML = \`<span style="background: rgba(255,255,255,0.9); color: #000; padding: 0.25rem 0.5rem; border-radius: 4px; font-weight: bold;">\${hex}</span>\`;
      
      div.addEventListener('click', () => {
        navigator.clipboard.writeText(hex);
        const span = div.querySelector('span');
        const orig = span.textContent;
        span.textContent = 'Copied!';
        setTimeout(() => span.textContent = orig, 1000);
      });
      
      colorsContainer.appendChild(div);
    }
  };

  genBtn.addEventListener('click', renderPalette);
  renderPalette();
}
