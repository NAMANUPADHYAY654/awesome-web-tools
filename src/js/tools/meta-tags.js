window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'meta-tags') {
    const container = document.getElementById('meta-tags-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="tool-layout-row">
            <div class="glass-panel" style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 1rem;">
              <div><label style="display:block; margin-bottom:0.5rem; color:var(--text-muted);">Title</label><input type="text" id="mt-title" class="input" placeholder="Page Title" /></div>
              <div><label style="display:block; margin-bottom:0.5rem; color:var(--text-muted);">Description</label><textarea id="mt-desc" class="input textarea" style="min-height: 80px;" placeholder="Page Description"></textarea></div>
              <div><label style="display:block; margin-bottom:0.5rem; color:var(--text-muted);">Keywords</label><input type="text" id="mt-keywords" class="input" placeholder="keyword1, keyword2" /></div>
              <div><label style="display:block; margin-bottom:0.5rem; color:var(--text-muted);">Author</label><input type="text" id="mt-author" class="input" placeholder="Naman Upadhyay" /></div>
            </div>
            <div class="glass-panel" style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 1rem;">
              <textarea id="mt-output" class="input textarea" style="flex: 1; font-family: monospace;" readonly></textarea>
              <button id="mt-copy" class="btn btn-primary">Copy Tags</button>
            </div>
          </div>
        </div>
      `;

      const title = document.getElementById('mt-title');
      const desc = document.getElementById('mt-desc');
      const keywords = document.getElementById('mt-keywords');
      const author = document.getElementById('mt-author');
      const output = document.getElementById('mt-output');
      const btnCopy = document.getElementById('mt-copy');

      const update = () => {
        const t = title.value.trim();
        const d = desc.value.trim();
        const k = keywords.value.trim();
        const a = author.value.trim();

        let tags = '';
        if (t) tags += `<title>${t}</title>\n<meta property="og:title" content="${t}">\n<meta name="twitter:title" content="${t}">\n`;
        if (d) tags += `<meta name="description" content="${d}">\n<meta property="og:description" content="${d}">\n<meta name="twitter:description" content="${d}">\n`;
        if (k) tags += `<meta name="keywords" content="${k}">\n`;
        if (a) tags += `<meta name="author" content="${a}">\n`;

        output.value = tags;
      };

      [title, desc, keywords, author].forEach(el => el.addEventListener('input', update));

      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(output.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy Tags', 2000);
      });
    }
  }
});
