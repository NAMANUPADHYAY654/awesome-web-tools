export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <textarea id="jf-input" class="textarea" placeholder="Paste JSON here..." style="min-height: 300px; font-family: monospace;"></textarea>
      <div style="display: flex; gap: 1rem;">
        <button id="jf-format" class="btn btn-primary">Format JSON</button>
        <button id="jf-minify" class="btn btn-outline">Minify</button>
        <button id="jf-copy" class="btn btn-outline">Copy Result</button>
      </div>
      <div id="jf-error" style="color: red; display: none;"></div>
    </div>
  `;
}

export function setup(container) {
  const input = container.querySelector('#jf-input');
  const btnFormat = container.querySelector('#jf-format');
  const btnMinify = container.querySelector('#jf-minify');
  const btnCopy = container.querySelector('#jf-copy');
  const errorEl = container.querySelector('#jf-error');

  const process = (indent) => {
    try {
      errorEl.style.display = 'none';
      if (!input.value.trim()) return;
      const parsed = JSON.parse(input.value);
      input.value = JSON.stringify(parsed, null, indent);
    } catch (e) {
      errorEl.textContent = 'Invalid JSON: ' + e.message;
      errorEl.style.display = 'block';
    }
  };

  btnFormat.addEventListener('click', () => process(2));
  btnMinify.addEventListener('click', () => process(0));
  btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value);
    const orig = btnCopy.textContent;
    btnCopy.textContent = 'Copied!';
    setTimeout(() => btnCopy.textContent = orig, 1000);
  });
}
