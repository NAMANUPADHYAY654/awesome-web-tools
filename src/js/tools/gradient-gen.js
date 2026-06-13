window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'gradient-gen') {
    const container = document.getElementById('gradient-gen-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem;">
            <div id="gg-preview" style="height: 200px; border-radius: var(--radius-md); margin-bottom: 1.5rem; background: linear-gradient(to right, #6366f1, #ec4899);"></div>
            <div class="tool-layout-row" style="margin-bottom: 1rem; align-items: center;">
              <input type="color" id="gg-color1" value="#6366f1" class="input" style="padding: 0; width: 50px; height: 40px; cursor: pointer;">
              <input type="color" id="gg-color2" value="#ec4899" class="input" style="padding: 0; width: 50px; height: 40px; cursor: pointer;">
              <select id="gg-dir" class="input" style="flex: 1;">
                <option value="to right">To Right</option>
                <option value="to bottom right">To Bottom Right</option>
                <option value="to bottom">To Bottom</option>
                <option value="to bottom left">To Bottom Left</option>
                <option value="to left">To Left</option>
                <option value="to top left">To Top Left</option>
                <option value="to top">To Top</option>
                <option value="to top right">To Top Right</option>
              </select>
              <button id="gg-random" class="btn btn-outline">Random</button>
            </div>
            <div style="display:flex; gap: 1rem;">
              <input type="text" id="gg-css" class="input" readonly style="flex: 1; font-family: monospace;">
              <button id="gg-copy" class="btn btn-primary">Copy CSS</button>
            </div>
          </div>
        </div>
      `;

      const preview = document.getElementById('gg-preview');
      const c1 = document.getElementById('gg-color1');
      const c2 = document.getElementById('gg-color2');
      const dir = document.getElementById('gg-dir');
      const cssOut = document.getElementById('gg-css');
      const btnCopy = document.getElementById('gg-copy');
      const btnRandom = document.getElementById('gg-random');

      const update = () => {
        const val = \`linear-gradient(\${dir.value}, \${c1.value}, \${c2.value})\`;
        preview.style.background = val;
        cssOut.value = \`background: \${val};\`;
      };

      const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

      c1.addEventListener('input', update);
      c2.addEventListener('input', update);
      dir.addEventListener('change', update);

      btnRandom.addEventListener('click', () => {
        c1.value = randomHex();
        c2.value = randomHex();
        update();
      });

      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(cssOut.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy CSS', 2000);
      });

      update();
    }
  }
});
