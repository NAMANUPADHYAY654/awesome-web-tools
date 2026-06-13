window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'regex-test') {
    const container = document.getElementById('regex-test-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
            <h3>Regular Expression</h3>
            <div class="tool-layout-row" style="align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.5rem; color: var(--text-muted);">/</span>
              <input type="text" id="rt-regex" class="input" style="flex: 1; font-family: monospace;" placeholder="^[a-z0-9_-]{3,16}$" />
              <span style="font-size: 1.5rem; color: var(--text-muted);">/</span>
              <input type="text" id="rt-flags" class="input" style="width: 80px; font-family: monospace;" placeholder="gm" value="gm" />
            </div>
            
            <h3>Test String</h3>
            <textarea id="rt-input" class="input textarea" style="min-height: 150px; font-family: monospace;" placeholder="Enter text to test against the regex..."></textarea>
            
            <h3>Matches</h3>
            <div id="rt-output" style="min-height: 100px; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; background: var(--bg-surface); font-family: monospace; overflow-y: auto;"></div>
            <div id="rt-error" style="color: var(--color-secondary); margin-top: 0.5rem;"></div>
          </div>
        </div>
      `;

      const regexInput = document.getElementById('rt-regex');
      const flagsInput = document.getElementById('rt-flags');
      const textInput = document.getElementById('rt-input');
      const output = document.getElementById('rt-output');
      const errorDiv = document.getElementById('rt-error');

      const testRegex = () => {
        errorDiv.textContent = '';
        output.innerHTML = '';
        const pattern = regexInput.value;
        const flags = flagsInput.value;
        const text = textInput.value;

        if (!pattern || !text) return;

        try {
          const re = new RegExp(pattern, flags);
          let match;
          const matches = [];

          if (re.global) {
            while ((match = re.exec(text)) !== null) {
              matches.push(match);
            }
          } else {
            match = re.exec(text);
            if (match) matches.push(match);
          }

          if (matches.length === 0) {
            output.innerHTML = '<span style="color: var(--text-muted);">No matches found.</span>';
          } else {
            output.innerHTML = matches.map((m, i) => 
              `<div style="margin-bottom: 0.5rem;"><strong>Match ${i + 1}:</strong> "${m[0]}" at index ${m.index}</div>`
            ).join('');
          }
        } catch (err) {
          errorDiv.textContent = 'Invalid Regular Expression: ' + err.message;
        }
      };

      regexInput.addEventListener('input', testRegex);
      flagsInput.addEventListener('input', testRegex);
      textInput.addEventListener('input', testRegex);
    }
  }
});
