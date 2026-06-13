export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <label>Quantity:</label>
        <input type="number" id="uuid-qty" class="input" value="1" min="1" max="100" style="width: 100px;">
        <button id="uuid-gen" class="btn btn-primary">Generate UUID(s)</button>
        <button id="uuid-copy" class="btn btn-outline">Copy All</button>
      </div>
      <textarea id="uuid-output" class="textarea" readonly style="min-height: 200px; font-family: monospace; font-size: 1.1rem;"></textarea>
    </div>
  `;
}

export function setup(container) {
  const qty = container.querySelector('#uuid-qty');
  const genBtn = container.querySelector('#uuid-gen');
  const copyBtn = container.querySelector('#uuid-copy');
  const output = container.querySelector('#uuid-output');

  const generate = () => {
    let count = parseInt(qty.value, 10);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 100) count = 100;
    
    const uuids = [];
    for (let i = 0; i < count; i++) {
      uuids.push(crypto.randomUUID());
    }
    output.value = uuids.join('\n');
  };

  genBtn.addEventListener('click', generate);
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(output.value);
    const orig = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = orig, 1000);
  });

  generate();
}
