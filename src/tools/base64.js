export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <textarea id="b64-input" class="textarea" placeholder="Enter text or Base64 here..." style="min-height: 150px;"></textarea>
      <div style="display: flex; gap: 1rem;">
        <button id="b64-encode" class="btn btn-primary">Encode to Base64</button>
        <button id="b64-decode" class="btn btn-outline">Decode from Base64</button>
      </div>
      <textarea id="b64-output" class="textarea" readonly placeholder="Result will appear here..." style="min-height: 150px; background: var(--bg-surface-hover);"></textarea>
      <button id="b64-copy" class="btn btn-outline" style="align-self: flex-start;">Copy Result</button>
    </div>
  `;
}

export function setup(container) {
  const input = container.querySelector('#b64-input');
  const output = container.querySelector('#b64-output');
  const btnEncode = container.querySelector('#b64-encode');
  const btnDecode = container.querySelector('#b64-decode');
  const btnCopy = container.querySelector('#b64-copy');

  btnEncode.addEventListener('click', () => {
    try {
      output.value = btoa(unescape(encodeURIComponent(input.value)));
    } catch (e) {
      output.value = 'Error encoding text: ' + e.message;
    }
  });

  btnDecode.addEventListener('click', () => {
    try {
      output.value = decodeURIComponent(escape(atob(input.value)));
    } catch (e) {
      output.value = 'Error decoding Base64: ' + e.message;
    }
  });

  btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(output.value);
    const orig = btnCopy.textContent;
    btnCopy.textContent = 'Copied!';
    setTimeout(() => btnCopy.textContent = orig, 1000);
  });
}
