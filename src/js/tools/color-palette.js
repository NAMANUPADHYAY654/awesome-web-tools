window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'color-palette') {
    const container = document.getElementById('color-palette-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
            <button id="cp-btn-gen" class="btn btn-primary" style="margin-bottom: 1.5rem;">Generate Random Palette</button>
            <div id="cp-colors" class="tool-layout-row" style="gap: 0; border-radius: var(--radius-md); overflow: hidden; height: 150px;">
              <!-- Colors go here -->
            </div>
            <div id="cp-hexes" class="tool-layout-row" style="gap: 0; margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem;">
               <!-- Hex codes go here -->
            </div>
          </div>
        </div>
      `;

      const btn = document.getElementById('cp-btn-gen');
      const colorsDiv = document.getElementById('cp-colors');
      const hexesDiv = document.getElementById('cp-hexes');

      const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      };

      const generate = () => {
        let colorsHtml = '';
        let hexesHtml = '';
        for (let i = 0; i < 5; i++) {
          const c = randomColor();
          colorsHtml += `<div style="flex: 1; background-color: ${c}; cursor: pointer;" title="Click to copy" data-color="${c}"></div>`;
          hexesHtml += `<div style="flex: 1; text-align: center; color: var(--text-muted);">${c}</div>`;
        }
        colorsDiv.innerHTML = colorsHtml;
        hexesDiv.innerHTML = hexesHtml;

        colorsDiv.querySelectorAll('div').forEach(div => {
          div.addEventListener('click', (ev) => {
            const color = ev.target.getAttribute('data-color');
            navigator.clipboard.writeText(color);
            // simple visual feedback
            const originalBg = ev.target.style.backgroundColor;
            ev.target.style.backgroundColor = '#fff';
            setTimeout(() => ev.target.style.backgroundColor = originalBg, 150);
          });
        });
      };

      btn.addEventListener('click', generate);
      generate(); // Initial generation
    }
  }
});
