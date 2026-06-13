export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <label>Records:</label>
        <input type="number" id="rd-qty" class="input" value="5" min="1" max="100" style="width: 100px;">
        <label>Format:</label>
        <select id="rd-format" class="input" style="width: 150px;">
          <option value="json">JSON</option>
          <option value="csv">CSV</option>
        </select>
        <button id="rd-gen" class="btn btn-primary">Generate Data</button>
        <button id="rd-copy" class="btn btn-outline">Copy</button>
      </div>
      <textarea id="rd-out" class="textarea" readonly style="min-height: 250px; font-family: monospace; white-space: pre;"></textarea>
    </div>
  `;
}

export function setup(container) {
  const qty = container.querySelector('#rd-qty');
  const format = container.querySelector('#rd-format');
  const genBtn = container.querySelector('#rd-gen');
  const out = container.querySelector('#rd-out');
  const copy = container.querySelector('#rd-copy');

  const fnames = ["John", "Jane", "Alice", "Bob", "Charlie", "Diana"];
  const lnames = ["Smith", "Doe", "Johnson", "Brown", "Williams", "Jones"];

  const generate = () => {
    let count = parseInt(qty.value, 10);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 1000) count = 1000;

    const data = [];
    for(let i=0; i<count; i++) {
      const f = fnames[Math.floor(Math.random() * fnames.length)];
      const l = lnames[Math.floor(Math.random() * lnames.length)];
      data.push({
        id: i + 1,
        name: `${f} ${l}`,
        email: `${f.toLowerCase()}.${l.toLowerCase()}@example.com`,
        age: Math.floor(Math.random() * 50) + 18
      });
    }

    if (format.value === 'json') {
      out.value = JSON.stringify(data, null, 2);
    } else {
      let csv = "id,name,email,age\n";
      data.forEach(d => {
        csv += `${d.id},"${d.name}","${d.email}",${d.age}\n`;
      });
      out.value = csv;
    }
  };

  genBtn.addEventListener('click', generate);

  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(out.value);
    const orig = copy.textContent;
    copy.textContent = 'Copied!';
    setTimeout(() => copy.textContent = orig, 1000);
  });

  generate();
}
