window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'word-count') {
    const container = document.getElementById('word-count-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="tool-layout-row" style="gap: 1.5rem;">
            <div class="glass-panel" style="padding: 1.5rem; flex: 1; text-align: center;">
              <h2 id="wc-words" style="font-size: 2.5rem; color: var(--color-primary); margin: 0;">0</h2>
              <p style="color: var(--text-muted); margin: 0;">Words</p>
            </div>
            <div class="glass-panel" style="padding: 1.5rem; flex: 1; text-align: center;">
              <h2 id="wc-chars" style="font-size: 2.5rem; color: var(--color-primary); margin: 0;">0</h2>
              <p style="color: var(--text-muted); margin: 0;">Characters</p>
            </div>
            <div class="glass-panel" style="padding: 1.5rem; flex: 1; text-align: center;">
              <h2 id="wc-chars-nospace" style="font-size: 2.5rem; color: var(--color-primary); margin: 0;">0</h2>
              <p style="color: var(--text-muted); margin: 0;">Characters (No Spaces)</p>
            </div>
          </div>
          
          <textarea id="wc-input" class="input textarea" style="min-height: 300px; font-size: 1rem;" placeholder="Start typing or paste your text here..."></textarea>
        </div>
      `;

      const input = document.getElementById('wc-input');
      const outWords = document.getElementById('wc-words');
      const outChars = document.getElementById('wc-chars');
      const outCharsNoSpace = document.getElementById('wc-chars-nospace');

      input.addEventListener('input', () => {
        const text = input.value;
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const chars = text.length;
        const charsNoSpace = text.replace(/\s+/g, '').length;

        outWords.textContent = words;
        outChars.textContent = chars;
        outCharsNoSpace.textContent = charsNoSpace;
      });
    }
  }
});
