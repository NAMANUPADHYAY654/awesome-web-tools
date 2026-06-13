window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'random-data') {
    const container = document.getElementById('random-data-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
            <div class="tool-layout-row" style="align-items: flex-end;">
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">Format</label>
                <select id="rd-format" class="input">
                  <option value="json">JSON</option>
                  <option value="csv">CSV</option>
                </select>
              </div>
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">Records</label>
                <input type="number" id="rd-count" class="input" value="5" min="1" max="100" />
              </div>
              <button id="rd-gen" class="btn btn-primary" style="height: 42px;">Generate</button>
              <button id="rd-copy" class="btn btn-outline" style="height: 42px;">Copy</button>
            </div>
            <textarea id="rd-output" class="input textarea" style="min-height: 300px; font-family: monospace;" readonly></textarea>
          </div>
        </div>
      `;

      const fName = ["John", "Jane", "Alice", "Bob", "Charlie", "Diana"];
      const lName = ["Smith", "Doe", "Johnson", "Brown", "Williams", "Jones"];
      
      const genUser = (id) => {
        const fn = fName[Math.floor(Math.random() * fName.length)];
        const ln = lName[Math.floor(Math.random() * lName.length)];
        return {
          id: id,
          firstName: fn,
          lastName: ln,
          email: \`\${fn.toLowerCase()}.\${ln.toLowerCase()}@example.com\`,
          age: Math.floor(Math.random() * 50) + 18
        };
      };

      const formatSel = document.getElementById('rd-format');
      const countIn = document.getElementById('rd-count');
      const genBtn = document.getElementById('rd-gen');
      const copyBtn = document.getElementById('rd-copy');
      const out = document.getElementById('rd-output');

      const update = () => {
        const format = formatSel.value;
        const count = parseInt(countIn.value, 10);
        if (isNaN(count) || count < 1) return;

        const data = [];
        for (let i = 1; i <= count; i++) {
          data.push(genUser(i));
        }

        if (format === 'json') {
          out.value = JSON.stringify(data, null, 2);
        } else {
          const keys = Object.keys(data[0]);
          let csv = keys.join(',') + '\\n';
          data.forEach(item => {
            csv += keys.map(k => item[k]).join(',') + '\\n';
          });
          out.value = csv;
        }
      };

      genBtn.addEventListener('click', update);
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(out.value);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 2000);
      });

      update();
    }
  }
});
