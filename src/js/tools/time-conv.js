window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'time-conv') {
    const container = document.getElementById('time-conv-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
            
            <div class="tool-layout-row" style="align-items: flex-end;">
              <div style="flex: 1;">
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">Unix Timestamp (Seconds or Milliseconds)</label>
                <input type="number" id="tc-input" class="input" style="font-family: monospace;" placeholder="e.g. 1672531199" />
              </div>
              <button id="tc-btn-now" class="btn btn-outline" style="height: 42px;">Current Time</button>
            </div>

            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">Local Time</label>
              <input type="text" id="tc-local" class="input" readonly style="background: var(--bg-surface-hover);" />
            </div>

            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">UTC Time / ISO 8601</label>
              <input type="text" id="tc-utc" class="input" readonly style="background: var(--bg-surface-hover);" />
            </div>

            <div id="tc-error" style="color: var(--color-secondary); text-align: center;"></div>

          </div>
        </div>
      `;

      const input = document.getElementById('tc-input');
      const btnNow = document.getElementById('tc-btn-now');
      const outLocal = document.getElementById('tc-local');
      const outUtc = document.getElementById('tc-utc');
      const errorDiv = document.getElementById('tc-error');

      const update = () => {
        errorDiv.textContent = '';
        outLocal.value = '';
        outUtc.value = '';

        const val = input.value.trim();
        if (!val) return;

        let num = parseInt(val, 10);
        if (isNaN(num)) {
          errorDiv.textContent = 'Invalid timestamp format';
          return;
        }

        // Auto-detect seconds vs milliseconds (rough heuristic)
        if (val.length <= 10) {
          num *= 1000;
        }

        try {
          const date = new Date(num);
          if (isNaN(date.getTime())) {
             errorDiv.textContent = 'Invalid date representation';
             return;
          }
          outLocal.value = date.toString();
          outUtc.value = date.toISOString();
        } catch (err) {
          errorDiv.textContent = 'Error converting timestamp';
        }
      };

      input.addEventListener('input', update);
      
      btnNow.addEventListener('click', () => {
        input.value = Math.floor(Date.now() / 1000); // Set in seconds
        update();
      });

      // Initialize with current time
      btnNow.click();
    }
  }
});
