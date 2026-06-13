export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
      <div id="grad-preview" style="height: 200px; border-radius: var(--radius-md); background: linear-gradient(90deg, #ff0000, #0000ff); transition: background 0.3s;"></div>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 100px;">
          <label style="display: block; margin-bottom: 0.5rem;">Color 1</label>
          <input type="color" id="grad-c1" class="input" value="#ff0000" style="padding: 0.25rem; height: 40px;">
        </div>
        <div style="flex: 1; min-width: 100px;">
          <label style="display: block; margin-bottom: 0.5rem;">Color 2</label>
          <input type="color" id="grad-c2" class="input" value="#0000ff" style="padding: 0.25rem; height: 40px;">
        </div>
        <div style="flex: 1; min-width: 100px;">
          <label style="display: block; margin-bottom: 0.5rem;">Angle (deg)</label>
          <input type="number" id="grad-angle" class="input" value="90">
        </div>
      </div>
      <textarea id="grad-css" class="textarea" readonly style="min-height: 100px; font-family: monospace;">background: linear-gradient(90deg, #ff0000, #0000ff);</textarea>
      <button id="grad-copy" class="btn btn-outline" style="align-self: flex-start;">Copy CSS</button>
    </div>
  `;
}

export function setup(container) {
  const preview = container.querySelector('#grad-preview');
  const c1 = container.querySelector('#grad-c1');
  const c2 = container.querySelector('#grad-c2');
  const angle = container.querySelector('#grad-angle');
  const cssOut = container.querySelector('#grad-css');
  const copyBtn = container.querySelector('#grad-copy');

  const update = () => {
    const cssStr = `linear-gradient(${angle.value || 90}deg, ${c1.value}, ${c2.value})`;
    preview.style.background = cssStr;
    cssOut.value = `background: ${cssStr};`;
  };

  c1.addEventListener('input', update);
  c2.addEventListener('input', update);
  angle.addEventListener('input', update);

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(cssOut.value);
    const orig = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = orig, 1000);
  });
}
