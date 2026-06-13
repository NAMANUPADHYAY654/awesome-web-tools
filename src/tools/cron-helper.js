export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <p style="color: var(--text-muted); margin-bottom: 0.5rem;">Generate common Cron expressions quickly.</p>
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <select id="ch-preset" class="input" style="flex: 1; min-width: 200px;">
          <option value="* * * * *">Every minute</option>
          <option value="*/5 * * * *">Every 5 minutes</option>
          <option value="0 * * * *">Every hour</option>
          <option value="0 0 * * *">Every day at midnight</option>
          <option value="0 12 * * *">Every day at noon</option>
          <option value="0 0 * * 0">Every Sunday</option>
          <option value="0 0 1 * *">First day of every month</option>
        </select>
        <button id="ch-copy" class="btn btn-primary">Copy Cron</button>
      </div>
      <div style="margin-top: 1.5rem;">
        <div style="font-weight: bold; margin-bottom: 0.5rem;">Expression:</div>
        <div class="glass-panel" style="padding: 1rem; background: var(--bg-surface-hover); font-size: 1.5rem; font-family: monospace; text-align: center;" id="ch-exp">
          * * * * *
        </div>
      </div>
    </div>
  `;
}

export function setup(container) {
  const preset = container.querySelector('#ch-preset');
  const copyBtn = container.querySelector('#ch-copy');
  const expDiv = container.querySelector('#ch-exp');

  preset.addEventListener('change', () => {
    expDiv.textContent = preset.value;
  });

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(preset.value);
    const orig = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = orig, 1000);
  });
}
