export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <textarea id="wc-input" class="textarea" placeholder="Start typing here..." style="min-height: 200px;"></textarea>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
        <div class="glass-panel" style="padding: 1rem; text-align: center;">
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);" id="wc-words">0</div>
          <div style="color: var(--text-muted); font-size: 0.875rem;">Words</div>
        </div>
        <div class="glass-panel" style="padding: 1rem; text-align: center;">
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);" id="wc-chars">0</div>
          <div style="color: var(--text-muted); font-size: 0.875rem;">Characters</div>
        </div>
        <div class="glass-panel" style="padding: 1rem; text-align: center;">
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);" id="wc-chars-ns">0</div>
          <div style="color: var(--text-muted); font-size: 0.875rem;">Chars (No Spaces)</div>
        </div>
        <div class="glass-panel" style="padding: 1rem; text-align: center;">
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);" id="wc-lines">0</div>
          <div style="color: var(--text-muted); font-size: 0.875rem;">Lines</div>
        </div>
      </div>
    </div>
  `;
}

export function setup(container) {
  const input = container.querySelector('#wc-input');
  const wordsEl = container.querySelector('#wc-words');
  const charsEl = container.querySelector('#wc-chars');
  const charsNsEl = container.querySelector('#wc-chars-ns');
  const linesEl = container.querySelector('#wc-lines');

  input.addEventListener('input', () => {
    const text = input.value;
    charsEl.textContent = text.length;
    charsNsEl.textContent = text.replace(/\\s/g, '').length;
    wordsEl.textContent = text.trim() ? text.trim().split(/\\s+/).length : 0;
    linesEl.textContent = text ? text.split(/\\r\\n|\\r|\\n/).length : 0;
  });
}
