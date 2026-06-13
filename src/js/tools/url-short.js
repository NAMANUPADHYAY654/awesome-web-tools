window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'url-short') {
    const container = document.getElementById('url-short-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; text-align: center; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <p style="color: var(--text-muted); max-width: 500px;">
              This is a UI Mock for a URL Shortener. In a real application, this would connect to a backend API to generate and store the shortened URL. Here, we generate a mock shortened link.
            </p>
            <div class="tool-layout-row" style="width: 100%; max-width: 600px;">
              <input type="url" id="us-input" class="input" style="flex: 1;" placeholder="https://very-long-url.example.com/some/path" />
              <button id="us-btn" class="btn btn-primary">Shorten</button>
            </div>
            
            <div id="us-result" style="width: 100%; max-width: 600px; display: none; margin-top: 1.5rem; background: var(--bg-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <h3 style="margin-bottom: 1rem; color: var(--color-primary);">URL Shortened Successfully!</h3>
              <div class="tool-layout-row">
                <input type="text" id="us-output" class="input" readonly style="flex: 1; font-weight: 600; color: var(--text-main);" />
                <button id="us-copy" class="btn btn-outline">Copy</button>
              </div>
            </div>
          </div>
        </div>
      `;

      const input = document.getElementById('us-input');
      const btn = document.getElementById('us-btn');
      const result = document.getElementById('us-result');
      const output = document.getElementById('us-output');
      const btnCopy = document.getElementById('us-copy');

      const generateShortString = () => {
        return Math.random().toString(36).substring(2, 8);
      };

      btn.addEventListener('click', () => {
        const url = input.value.trim();
        if (!url) return;
        
        // Mock backend delay
        btn.textContent = 'Shortening...';
        btn.disabled = true;
        
        setTimeout(() => {
          const shortCode = generateShortString();
          const shortUrl = `https://awt.short/${shortCode}`;
          output.value = shortUrl;
          result.style.display = 'block';
          
          btn.textContent = 'Shorten';
          btn.disabled = false;
        }, 800);
      });

      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(output.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy', 2000);
      });
    }
  }
});
