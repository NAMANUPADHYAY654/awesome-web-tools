window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'base64-conv') {
    const container = document.getElementById('base64-conv-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="tool-layout-row">
            <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; flex: 1;">
              <h3>Text / Base64</h3>
              <textarea id="b64-input" class="input textarea" style="flex: 1; min-height: 200px;" placeholder="Enter text or Base64..."></textarea>
            </div>
            <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; flex: 1;">
              <h3>Result</h3>
              <textarea id="b64-output" class="input textarea" style="flex: 1; min-height: 200px;" readonly></textarea>
            </div>
          </div>
          <div class="tool-layout-row">
             <button id="b64-btn-enc" class="btn btn-primary" style="flex: 1;">Encode to Base64</button>
             <button id="b64-btn-dec" class="btn btn-secondary" style="flex: 1; background: var(--color-secondary); color: white;">Decode from Base64</button>
             <button id="b64-btn-copy" class="btn btn-outline" style="flex: 1;">Copy Result</button>
          </div>
          <div id="b64-error" style="color: var(--color-secondary); margin-top: 1rem; text-align: center;"></div>
        </div>
      `;

      const input = document.getElementById('b64-input');
      const output = document.getElementById('b64-output');
      const btnEnc = document.getElementById('b64-btn-enc');
      const btnDec = document.getElementById('b64-btn-dec');
      const btnCopy = document.getElementById('b64-btn-copy');
      const errorDiv = document.getElementById('b64-error');

      btnEnc.addEventListener('click', () => {
        try {
          errorDiv.textContent = '';
          output.value = btoa(unescape(encodeURIComponent(input.value)));
        } catch (err) {
          errorDiv.textContent = 'Error encoding text.';
        }
      });

      btnDec.addEventListener('click', () => {
        try {
          errorDiv.textContent = '';
          output.value = decodeURIComponent(escape(atob(input.value.trim())));
        } catch (err) {
          errorDiv.textContent = 'Invalid Base64 string.';
        }
      });

      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(output.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy Result', 2000);
      });
    }
  }
});
