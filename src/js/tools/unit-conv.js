window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'unit-conv') {
    const container = document.getElementById('unit-conv-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
            
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted);">Category</label>
              <select id="uc-category" class="input">
                <option value="length">Length</option>
                <option value="weight">Weight</option>
                <option value="temp">Temperature</option>
              </select>
            </div>

            <div class="tool-layout-row" style="align-items: center; gap: 1rem;">
              <div style="flex: 1;">
                <input type="number" id="uc-input" class="input" value="1" />
                <select id="uc-unit-from" class="input" style="margin-top: 0.5rem;"></select>
              </div>
              <div style="font-size: 1.5rem; color: var(--text-muted);">=</div>
              <div style="flex: 1;">
                <input type="number" id="uc-output" class="input" readonly style="background: var(--bg-surface-hover);" />
                <select id="uc-unit-to" class="input" style="margin-top: 0.5rem;"></select>
              </div>
            </div>

          </div>
        </div>
      `;

      const category = document.getElementById('uc-category');
      const input = document.getElementById('uc-input');
      const output = document.getElementById('uc-output');
      const from = document.getElementById('uc-unit-from');
      const to = document.getElementById('uc-unit-to');

      const units = {
        length: {
          m: { name: 'Meters', factor: 1 },
          km: { name: 'Kilometers', factor: 1000 },
          cm: { name: 'Centimeters', factor: 0.01 },
          mm: { name: 'Millimeters', factor: 0.001 },
          in: { name: 'Inches', factor: 0.0254 },
          ft: { name: 'Feet', factor: 0.3048 },
          yd: { name: 'Yards', factor: 0.9144 },
          mi: { name: 'Miles', factor: 1609.34 }
        },
        weight: {
          kg: { name: 'Kilograms', factor: 1 },
          g: { name: 'Grams', factor: 0.001 },
          mg: { name: 'Milligrams', factor: 0.000001 },
          lb: { name: 'Pounds', factor: 0.453592 },
          oz: { name: 'Ounces', factor: 0.0283495 }
        },
        temp: {
          c: { name: 'Celsius' },
          f: { name: 'Fahrenheit' },
          k: { name: 'Kelvin' }
        }
      };

      const populateSelects = () => {
        const cat = category.value;
        const opts = units[cat];
        let html = '';
        for (const [key, val] of Object.entries(opts)) {
          html += `<option value="${key}">${val.name}</option>`;
        }
        from.innerHTML = html;
        to.innerHTML = html;
        if (Object.keys(opts).length > 1) {
          to.selectedIndex = 1;
        }
        calculate();
      };

      const calculate = () => {
        const cat = category.value;
        const val = parseFloat(input.value);
        if (isNaN(val)) {
          output.value = '';
          return;
        }

        const uFrom = from.value;
        const uTo = to.value;

        if (cat === 'temp') {
          let c = 0;
          // convert to celsius
          if (uFrom === 'c') c = val;
          else if (uFrom === 'f') c = (val - 32) * 5/9;
          else if (uFrom === 'k') c = val - 273.15;

          // convert to target
          let res = 0;
          if (uTo === 'c') res = c;
          else if (uTo === 'f') res = (c * 9/5) + 32;
          else if (uTo === 'k') res = c + 273.15;
          output.value = Number(res.toFixed(6));
        } else {
          const inBase = val * units[cat][uFrom].factor;
          const res = inBase / units[cat][uTo].factor;
          output.value = Number(res.toFixed(6));
        }
      };

      category.addEventListener('change', populateSelects);
      input.addEventListener('input', calculate);
      from.addEventListener('change', calculate);
      to.addEventListener('change', calculate);

      populateSelects();
    }
  }
});
