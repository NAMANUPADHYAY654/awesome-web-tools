export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <p style="color: var(--text-muted); margin-bottom: 1rem;">Note: This is a UI mock and generates a random short URL that does not actually redirect.</p>
      <div style="display: flex; gap: 1rem;">
        <input type="url" id="us-input" class="input" placeholder="Enter long URL (e.g. https://example.com/very/long/path)">
        <button id="us-shorten" class="btn btn-primary">Shorten</button>
      </div>
      <div id="us-result" style="display: none; margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius-md); background: var(--bg-surface-hover);">
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--text-muted);">Shortened URL:</p>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <a href="#" id="us-link" style="font-weight: bold; font-size: 1.25rem; word-break: break-all;"></a>
          <button id="us-copy" class="btn btn-outline btn-sm">Copy</button>
        </div>
      </div>
    </div>
  `;
}

export function setup(container) {
  const input = container.querySelector('#us-input');
  const shorten = container.querySelector('#us-shorten');
  const result = container.querySelector('#us-result');
  const link = container.querySelector('#us-link');
  const copy = container.querySelector('#us-copy');

  shorten.addEventListener('click', () => {
    if (!input.value.trim() || !input.value.startsWith('http')) {
      alert('Please enter a valid URL starting with http:// or https://');
      return;
    }
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for(let i=0; i<6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const shortUrl = \`https://awt.link/\${code}\`;
    link.href = '#';
    link.textContent = shortUrl;
    result.style.display = 'block';
  });

  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(link.textContent);
    const orig = copy.textContent;
    copy.textContent = 'Copied!';
    setTimeout(() => copy.textContent = orig, 1000);
  });
}
