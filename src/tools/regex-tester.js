export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span style="font-size: 1.25rem; font-family: monospace;">/</span>
        <input type="text" id="rt-pattern" class="input" placeholder="Pattern (e.g. \\d+)" style="font-family: monospace;">
        <span style="font-size: 1.25rem; font-family: monospace;">/</span>
        <input type="text" id="rt-flags" class="input" placeholder="Flags (e.g. g, i)" style="width: 80px; font-family: monospace;" value="g">
      </div>
      <textarea id="rt-test" class="textarea" placeholder="Test string..." style="min-height: 150px;"></textarea>
      <div class="glass-panel" style="padding: 1rem; min-height: 100px; background: var(--bg-surface-hover); overflow-y: auto; max-height: 300px;" id="rt-result">
        Results will appear here...
      </div>
    </div>
  `;
}

export function setup(container) {
  const pattern = container.querySelector('#rt-pattern');
  const flags = container.querySelector('#rt-flags');
  const testString = container.querySelector('#rt-test');
  const result = container.querySelector('#rt-result');

  const runTest = () => {
    try {
      if (!pattern.value) {
        result.innerHTML = 'Enter a pattern...';
        return;
      }
      const regex = new RegExp(pattern.value, flags.value);
      const text = testString.value;
      if (!text) {
        result.innerHTML = 'Enter a test string...';
        return;
      }

      const highlighted = text.replace(regex, (match) => {
        return \`<span style="background: var(--color-primary); color: white; border-radius: 2px;">\${match}</span>\`;
      });
      result.innerHTML = highlighted.replace(/\\n/g, '<br>');
    } catch (e) {
      result.innerHTML = \`<span style="color: red;">Error: \${e.message}</span>\`;
    }
  };

  pattern.addEventListener('input', runTest);
  flags.addEventListener('input', runTest);
  testString.addEventListener('input', runTest);
}
