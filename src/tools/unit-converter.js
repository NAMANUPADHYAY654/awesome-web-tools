export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 150px;">
          <label style="display: block; margin-bottom: 0.5rem;">Type</label>
          <select id="uc-type" class="input">
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temp">Temperature</option>
          </select>
        </div>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <input type="number" id="uc-val1" class="input" value="1" style="flex: 1; min-width: 100px;">
        <select id="uc-unit1" class="input" style="flex: 1; min-width: 100px;"></select>
        <span>=</span>
        <input type="number" id="uc-val2" class="input" readonly style="flex: 1; min-width: 100px; background: var(--bg-surface-hover);">
        <select id="uc-unit2" class="input" style="flex: 1; min-width: 100px;"></select>
      </div>
    </div>
  `;
}

export function setup(container) {
  const typeSel = container.querySelector('#uc-type');
  const val1 = container.querySelector('#uc-val1');
  const val2 = container.querySelector('#uc-val2');
  const unit1 = container.querySelector('#uc-unit1');
  const unit2 = container.querySelector('#uc-unit2');

  const units = {
    length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, "in": 0.0254, ft: 0.3048, mi: 1609.34 },
    weight: { kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495 },
    temp: { c: 'c', f: 'f', k: 'k' }
  };

  const populate = () => {
    const t = typeSel.value;
    const keys = Object.keys(units[t]);
    unit1.innerHTML = keys.map(k => \`<option value="\${k}">\${k}</option>\`).join('');
    unit2.innerHTML = keys.map(k => \`<option value="\${k}">\${k}</option>\`).join('');
    unit2.selectedIndex = Math.min(1, keys.length - 1);
    convert();
  };

  const convert = () => {
    const t = typeSel.value;
    const v = parseFloat(val1.value);
    if (isNaN(v)) return;
    
    const u1 = unit1.value;
    const u2 = unit2.value;

    if (t === 'temp') {
      let c = v;
      if (u1 === 'f') c = (v - 32) * 5/9;
      if (u1 === 'k') c = v - 273.15;
      
      let res = c;
      if (u2 === 'f') res = c * 9/5 + 32;
      if (u2 === 'k') res = c + 273.15;
      
      val2.value = res.toFixed(4);
    } else {
      const base = v * units[t][u1];
      const res = base / units[t][u2];
      val2.value = parseFloat(res.toFixed(6));
    }
  };

  typeSel.addEventListener('change', populate);
  val1.addEventListener('input', convert);
  unit1.addEventListener('change', convert);
  unit2.addEventListener('change', convert);

  populate();
}
