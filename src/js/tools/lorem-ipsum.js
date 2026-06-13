window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'lorem-ipsum') {
    const container = document.getElementById('lorem-ipsum-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem;">
            <div class="tool-layout-row" style="margin-bottom: 1.5rem; align-items: flex-end;">
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">Paragraphs</label>
                <input type="number" id="li-count" class="input" value="3" min="1" max="50" style="width: 100px;" />
              </div>
              <button id="li-gen" class="btn btn-primary" style="height: 42px;">Generate</button>
              <button id="li-copy" class="btn btn-outline" style="height: 42px;">Copy Text</button>
            </div>
            <textarea id="li-output" class="input textarea" style="min-height: 300px; font-family: 'Times New Roman', serif;" readonly></textarea>
          </div>
        </div>
      `;

      const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"];
      
      const generatePara = () => {
        let para = '';
        const numSentences = Math.floor(Math.random() * 5) + 3;
        for (let i = 0; i < numSentences; i++) {
          const numWords = Math.floor(Math.random() * 8) + 5;
          let sentence = [];
          for (let j = 0; j < numWords; j++) {
            sentence.push(words[Math.floor(Math.random() * words.length)]);
          }
          let s = sentence.join(' ');
          para += s.charAt(0).toUpperCase() + s.slice(1) + '. ';
        }
        return para.trim();
      };

      const countIn = document.getElementById('li-count');
      const genBtn = document.getElementById('li-gen');
      const copyBtn = document.getElementById('li-copy');
      const out = document.getElementById('li-output');

      const update = () => {
        const count = parseInt(countIn.value, 10);
        if (isNaN(count) || count < 1) return;
        let text = '';
        for (let i = 0; i < count; i++) {
          text += generatePara() + '\\n\\n';
        }
        out.value = text.trim();
      };

      genBtn.addEventListener('click', update);
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(out.value);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy Text', 2000);
      });

      update();
    }
  }
});
