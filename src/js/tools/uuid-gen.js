window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'uuid-gen') {
    const container = document.getElementById('uuid-gen-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; text-align: center; display: flex; flex-direction: column; gap: 1rem;">
            <p style="color: var(--text-muted);">Generate Random UUIDs (Version 4)</p>
            <input type="text" id="uuid-output" class="input" style="font-size: 1.5rem; text-align: center; font-family: monospace; letter-spacing: 2px;" readonly />
            
            <div class="tool-layout-row">
              <button id="uuid-btn-gen" class="btn btn-primary" style="flex: 1; font-size: 1.1rem; padding: 0.75rem;">Generate New UUID</button>
            </div>
            <div class="tool-layout-row">
              <button id="uuid-btn-copy" class="btn btn-outline" style="flex: 1;">Copy to Clipboard</button>
            </div>
          </div>
        </div>
      `;

      const output = document.getElementById('uuid-output');
      const btnGen = document.getElementById('uuid-btn-gen');
      const btnCopy = document.getElementById('uuid-btn-copy');

      const generateUUID = () => {
        // Fallback for crypto.randomUUID if not available
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
          return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      };

      const update = () => {
        output.value = generateUUID();
      };

      btnGen.addEventListener('click', update);

      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(output.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy to Clipboard', 2000);
      });

      update();
    }
  }
});
