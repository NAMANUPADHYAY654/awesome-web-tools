export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <label>Paragraphs:</label>
        <input type="number" id="li-qty" class="input" value="3" min="1" max="20" style="width: 100px;">
        <button id="li-gen" class="btn btn-primary">Generate</button>
        <button id="li-copy" class="btn btn-outline">Copy</button>
      </div>
      <textarea id="li-output" class="textarea" readonly style="min-height: 250px; line-height: 1.5;"></textarea>
    </div>
  `;
}

export function setup(container) {
  const qty = container.querySelector('#li-qty');
  const gen = container.querySelector('#li-gen');
  const copy = container.querySelector('#li-copy');
  const output = container.querySelector('#li-output');

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const generate = () => {
    let count = parseInt(qty.value, 10);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 50) count = 50;

    let res = [];
    for (let i = 0; i < count; i++) {
      res.push(text);
    }
    output.value = res.join('\n\n');
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
