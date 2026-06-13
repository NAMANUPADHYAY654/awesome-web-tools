export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem;">
      <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
        <input type="text" id="pg-output" class="input" readonly style="font-family: monospace; font-size: 1.25rem;">
        <button id="pg-copy" class="btn btn-outline">Copy</button>
      </div>
      <div style="margin-bottom: 1rem;">
        <label>Length: <span id="pg-len-val">12</span></label>
        <input type="range" id="pg-len" min="4" max="64" value="12" style="width: 100%;">
      </div>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <label><input type="checkbox" id="pg-upper" checked> Uppercase</label>
        <label><input type="checkbox" id="pg-lower" checked> Lowercase</label>
        <label><input type="checkbox" id="pg-nums" checked> Numbers</label>
        <label><input type="checkbox" id="pg-syms" checked> Symbols</label>
      </div>
      <button id="pg-gen" class="btn btn-primary" style="margin-top: 1.5rem; width: 100%;">Generate Password</button>
    </div>
  `;
}

export function setup(container) {
  const output = container.querySelector('#pg-output');
  const len = container.querySelector('#pg-len');
  const lenVal = container.querySelector('#pg-len-val');
  const upper = container.querySelector('#pg-upper');
  const lower = container.querySelector('#pg-lower');
  const nums = container.querySelector('#pg-nums');
  const syms = container.querySelector('#pg-syms');
  const gen = container.querySelector('#pg-gen');
  const copy = container.querySelector('#pg-copy');

  len.addEventListener('input', () => lenVal.textContent = len.value);

  const generate = () => {
    const u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const l = 'abcdefghijklmnopqrstuvwxyz';
    const n = '0123456789';
    const s = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let chars = '';
    if (upper.checked) chars += u;
    if (lower.checked) chars += l;
    if (nums.checked) chars += n;
    if (syms.checked) chars += s;
    
    if (chars === '') {
      output.value = 'Select at least one character type';
      return;
    }
    
    let pass = '';
    for (let i = 0; i < len.value; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    output.value = pass;
  };

  gen.addEventListener('click', generate);
  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(output.value);
    const orig = copy.textContent;
    copy.textContent = 'Copied!';
    setTimeout(() => copy.textContent = orig, 1000);
  });

  generate();
}
