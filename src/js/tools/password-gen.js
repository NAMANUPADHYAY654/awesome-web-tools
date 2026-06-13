window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'password-gen') {
    const container = document.getElementById('password-gen-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
            <input type="text" id="pg-output" class="input" style="font-size: 1.5rem; text-align: center; margin-bottom: 1rem;" readonly />
            <div class="tool-layout-row" style="margin-bottom: 1rem;">
              <button id="pg-btn-gen" class="btn btn-primary" style="flex: 1;">Generate Password</button>
              <button id="pg-btn-copy" class="btn btn-outline" style="flex: 1;">Copy</button>
            </div>
            <div class="tool-layout-row">
              <label style="display:flex; align-items:center; gap:0.5rem;"><input type="number" id="pg-length" value="16" min="4" max="64" class="input" style="width: 80px;"> Length</label>
              <label style="display:flex; align-items:center; gap:0.5rem;"><input type="checkbox" id="pg-upper" checked> Uppercase</label>
              <label style="display:flex; align-items:center; gap:0.5rem;"><input type="checkbox" id="pg-lower" checked> Lowercase</label>
              <label style="display:flex; align-items:center; gap:0.5rem;"><input type="checkbox" id="pg-nums" checked> Numbers</label>
              <label style="display:flex; align-items:center; gap:0.5rem;"><input type="checkbox" id="pg-syms" checked> Symbols</label>
            </div>
          </div>
        </div>
      `;

      const out = document.getElementById('pg-output');
      const btnGen = document.getElementById('pg-btn-gen');
      const btnCopy = document.getElementById('pg-btn-copy');

      const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lower = 'abcdefghijklmnopqrstuvwxyz';
      const nums = '0123456789';
      const syms = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

      const generate = () => {
        const length = parseInt(document.getElementById('pg-length').value, 10);
        let chars = '';
        if (document.getElementById('pg-upper').checked) chars += upper;
        if (document.getElementById('pg-lower').checked) chars += lower;
        if (document.getElementById('pg-nums').checked) chars += nums;
        if (document.getElementById('pg-syms').checked) chars += syms;

        if (!chars) {
          out.value = 'Select at least one option';
          return;
        }

        let pass = '';
        for (let i = 0; i < length; i++) {
          pass += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        out.value = pass;
      };

      btnGen.addEventListener('click', generate);
      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(out.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy', 2000);
      });

      generate();
    }
  }
});
