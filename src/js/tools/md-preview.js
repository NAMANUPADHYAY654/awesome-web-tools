window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'md-preview') {
    const container = document.getElementById('md-preview-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="tool-layout-row">
            <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; flex: 1;">
              <h3>Markdown</h3>
              <textarea id="md-input" class="input textarea" style="flex: 1; min-height: 400px; font-family: monospace;"># Hello World

This is a **bold** and *italic* text.

## Features
- List item 1
- List item 2
- [Link to GitHub](https://github.com)

Enjoy using the markdown previewer!</textarea>
            </div>
            <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; flex: 1;">
              <h3>Preview</h3>
              <div id="md-output" style="flex: 1; min-height: 400px; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; background: var(--bg-surface); overflow-y: auto;"></div>
            </div>
          </div>
        </div>
      `;

      const input = document.getElementById('md-input');
      const output = document.getElementById('md-output');

      // Extremely simple markdown parser for demo purposes
      const parseMd = (text) => {
        let html = text
          .replace(/^### (.*$)/gim, '<h3>$1</h3>')
          .replace(/^## (.*$)/gim, '<h2>$1</h2>')
          .replace(/^# (.*$)/gim, '<h1>$1</h1>')
          .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/gim, '<em>$1</em>')
          .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>')
          .replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>')
          .replace(/<\/ul>\n<ul>/gim, '');

        // Handle paragraphs (very rudimentary)
        html = html.split('\n\n').map(p => {
          if (p.startsWith('<h') || p.startsWith('<ul')) return p;
          return `<p>${p}</p>`;
        }).join('');

        return html;
      };

      const update = () => {
        output.innerHTML = parseMd(input.value);
      };

      input.addEventListener('input', update);
      update();
    }
  }
});
