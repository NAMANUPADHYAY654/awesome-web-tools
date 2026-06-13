window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'img-base64') {
    const container = document.getElementById('img-base64-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <div style="width: 100%; border: 2px dashed var(--border-color); border-radius: var(--radius-md); padding: 2rem; text-align: center; position: relative;">
              <input type="file" id="ib64-file" accept="image/*" style="position: absolute; top:0; left:0; width:100%; height:100%; opacity:0; cursor:pointer;" />
              <div id="ib64-prompt" style="color: var(--text-muted);">
                <p>Drag & drop an image here or click to select</p>
              </div>
              <img id="ib64-preview" src="" style="max-width: 100%; max-height: 300px; display: none; margin-top: 1rem; border-radius: var(--radius-sm);" />
            </div>
            
            <textarea id="ib64-output" class="input textarea" style="width: 100%; min-height: 150px; font-family: monospace;" readonly placeholder="Base64 output will appear here..."></textarea>
            
            <div class="tool-layout-row" style="width: 100%;">
              <button id="ib64-btn-copy" class="btn btn-primary" style="flex: 1;" disabled>Copy Base64</button>
            </div>
          </div>
        </div>
      `;

      const fileInput = document.getElementById('ib64-file');
      const prompt = document.getElementById('ib64-prompt');
      const preview = document.getElementById('ib64-preview');
      const output = document.getElementById('ib64-output');
      const btnCopy = document.getElementById('ib64-btn-copy');

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          const b64 = event.target.result;
          preview.src = b64;
          preview.style.display = 'block';
          prompt.style.display = 'none';
          output.value = b64;
          btnCopy.disabled = false;
        };
        reader.readAsDataURL(file);
      });

      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(output.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy Base64', 2000);
      });
    }
  }
});
