window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'cron-help') {
    const container = document.getElementById('cron-help-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; align-items: center; text-align: center;">
            <p style="color: var(--text-muted);">Enter a cron expression to see its description.</p>
            <input type="text" id="ch-input" class="input" style="font-size: 1.5rem; text-align: center; max-width: 400px; font-family: monospace;" placeholder="* * * * *" value="0 12 * * *" />
            
            <div id="ch-output" style="font-size: 1.25rem; font-weight: 500; color: var(--color-primary); margin-top: 1rem;"></div>
            
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
              <button class="btn btn-outline ch-preset" data-cron="* * * * *">Every Minute</button>
              <button class="btn btn-outline ch-preset" data-cron="0 * * * *">Every Hour</button>
              <button class="btn btn-outline ch-preset" data-cron="0 0 * * *">Every Day</button>
            </div>
          </div>
        </div>
      `;

      const input = document.getElementById('ch-input');
      const output = document.getElementById('ch-output');

      const describeCron = (cron) => {
        const parts = cron.trim().split(/\s+/);
        if (parts.length !== 5) return 'Invalid cron expression (needs 5 parts)';
        
        // Very basic naive description for simple cases
        const [min, hr, dom, mon, dow] = parts;
        if (cron === '* * * * *') return 'Every minute';
        if (cron === '0 * * * *') return 'Every hour at minute 0';
        if (cron === '0 0 * * *') return 'Every day at midnight';
        if (cron === '0 12 * * *') return 'Every day at 12:00 PM';

        return 'Custom schedule: Minute ' + min + ', Hour ' + hr + ', Day of Month ' + dom + ', Month ' + mon + ', Day of Week ' + dow;
      };

      const update = () => {
        output.textContent = describeCron(input.value);
      };

      input.addEventListener('input', update);

      document.querySelectorAll('.ch-preset').forEach(btn => {
        btn.addEventListener('click', (e) => {
          input.value = e.target.getAttribute('data-cron');
          update();
        });
      });

      update();
    }
  }
});
