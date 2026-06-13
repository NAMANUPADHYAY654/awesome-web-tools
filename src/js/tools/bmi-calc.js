window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'bmi-calc') {
    const container = document.getElementById('bmi-calc-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: center;">
            
            <div class="tool-layout-row" style="width: 100%; max-width: 400px; gap: 1rem;">
              <div style="flex: 1;">
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">Weight (kg)</label>
                <input type="number" id="bmi-weight" class="input" value="70" />
              </div>
              <div style="flex: 1;">
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">Height (cm)</label>
                <input type="number" id="bmi-height" class="input" value="175" />
              </div>
            </div>

            <div style="width: 100%; max-width: 400px; text-align: center; margin-top: 1rem;">
              <div style="font-size: 3rem; font-weight: 700; color: var(--color-primary);" id="bmi-result">22.9</div>
              <div style="font-size: 1.25rem; font-weight: 500; color: var(--text-main); margin-top: 0.5rem;" id="bmi-status">Normal weight</div>
            </div>

          </div>
        </div>
      `;

      const inputW = document.getElementById('bmi-weight');
      const inputH = document.getElementById('bmi-height');
      const outRes = document.getElementById('bmi-result');
      const outStatus = document.getElementById('bmi-status');

      const calculate = () => {
        const w = parseFloat(inputW.value);
        const h = parseFloat(inputH.value) / 100; // cm to m

        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
          outRes.textContent = '-';
          outStatus.textContent = '-';
          return;
        }

        const bmi = w / (h * h);
        outRes.textContent = bmi.toFixed(1);

        let status = '';
        let color = '';
        if (bmi < 18.5) {
          status = 'Underweight';
          color = '#3b82f6';
        } else if (bmi >= 18.5 && bmi < 24.9) {
          status = 'Normal weight';
          color = '#22c55e';
        } else if (bmi >= 25 && bmi < 29.9) {
          status = 'Overweight';
          color = '#f59e0b';
        } else {
          status = 'Obesity';
          color = '#ef4444';
        }
        outStatus.textContent = status;
        outStatus.style.color = color;
      };

      inputW.addEventListener('input', calculate);
      inputH.addEventListener('input', calculate);
      calculate();
    }
  }
});
