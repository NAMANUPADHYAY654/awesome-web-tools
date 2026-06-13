window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'qrcode-gen') {
    const container = document.getElementById('qrcode-gen-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <textarea id="qr-input" class="input textarea" placeholder="Enter text or URL to generate QR code..."></textarea>
            <button id="qr-btn" class="btn btn-primary">Generate QR Code</button>
            <div id="qr-result" style="margin-top: 1rem; padding: 1rem; background: white; border-radius: var(--radius-md); display: none;">
              <img id="qr-img" src="" alt="QR Code" style="max-width: 100%; height: auto;" />
            </div>
            <a id="qr-download" class="btn btn-outline" style="display: none;" download="qrcode.png">Download</a>
          </div>
        </div>
      `;

      const input = document.getElementById('qr-input');
      const btn = document.getElementById('qr-btn');
      const result = document.getElementById('qr-result');
      const img = document.getElementById('qr-img');
      const download = document.getElementById('qr-download');

      btn.addEventListener('click', async () => {
        const text = input.value.trim();
        if (!text) return;
        
        btn.textContent = 'Generating...';
        btn.disabled = true;

        // Use api.qrserver.com to generate the QR code to keep the code footprint small and dependency-free
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
        
        try {
          const response = await fetch(url);
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          
          img.src = objectUrl;
          result.style.display = 'block';
          download.style.display = 'inline-flex';
          download.href = objectUrl;
        } catch (error) {
          console.error("Error generating QR code", error);
        } finally {
          btn.textContent = 'Generate QR Code';
          btn.disabled = false;
        }
      });
    }
  }
});
