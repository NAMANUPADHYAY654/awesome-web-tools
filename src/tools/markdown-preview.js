import { marked } from 'marked';

export function render() {
  return `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; height: 600px;">
      <div class="glass-panel" style="flex: 1; padding: 1rem; display: flex; flex-direction: column;">
        <textarea id="md-input" class="textarea" style="flex: 1; min-width: 300px; resize: none;" placeholder="Type Markdown here..."># Hello World

**Bold text** and *italic text*
- Item 1
- Item 2</textarea>
      </div>
      <div class="glass-panel" style="flex: 1; padding: 1.5rem; overflow-y: auto; min-width: 300px; background: var(--bg-surface);" id="md-preview">
      </div>
    </div>
  `;
}

export function setup(container) {
  const input = container.querySelector('#md-input');
  const preview = container.querySelector('#md-preview');

  const update = () => {
    try {
      preview.innerHTML = marked.parse(input.value);
    } catch (e) {
      preview.innerHTML = \`<span style="color: red;">Error parsing markdown</span>\`;
    }
  };

  input.addEventListener('input', update);
  update();
}
