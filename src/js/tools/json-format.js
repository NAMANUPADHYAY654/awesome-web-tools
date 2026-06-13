window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'json-format') {
    const container = document.getElementById('json-format-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="tool-layout-row">
            <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; flex: 1;">
              <h3>Input</h3>
              <textarea id="jf-input" class="input textarea" style="flex: 1; min-height: 300px; font-family: monospace;" placeholder='{"key": "value"}'></textarea>
            </div>
            <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; flex: 1;">
              <h3>Output</h3>
              <textarea id="jf-output" class="input textarea" style="flex: 1; min-height: 300px; font-family: monospace;" readonly></textarea>
            </div>
          </div>
          <div class="tool-layout-row">
             <button id="jf-btn-format" class="btn btn-primary" style="flex: 1;">Format JSON</button>
             <button id="jf-btn-minify" class="btn btn-outline" style="flex: 1;">Minify JSON</button>
             <button id="jf-btn-copy" class="btn btn-outline" style="flex: 1;">Copy Output</button>
          </div>
          <div id="jf-error" style="color: var(--color-secondary); margin-top: 1rem; text-align: center;"></div>
        </div>
      `;

      const input = document.getElementById('jf-input');
      const output = document.getElementById('jf-output');
      const btnFormat = document.getElementById('jf-btn-format');
      const btnMinify = document.getElementById('jf-btn-minify');
      const btnCopy = document.getElementById('jf-btn-copy');
      const errorDiv = document.getElementById('jf-error');

      const processJson = (space) => {
        try {
          if (!input.value.trim()) return;
          errorDiv.textContent = '';
          const parsed = JSON.parse(input.value);
          output.value = JSON.stringify(parsed, null, space);
        } catch (e) {
          errorDiv.textContent = 'Invalid JSON: ' + e.message;
        }
      };

      btnFormat.addEventListener('click', () => processJson(2));
      btnMinify.addEventListener('click', () => processJson(0));

      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(output.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy Output', 2000);
      });
    }
  }
});
