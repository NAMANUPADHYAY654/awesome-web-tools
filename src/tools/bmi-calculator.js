export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 150px;">
          <label style="display: block; margin-bottom: 0.5rem;">Height (cm)</label>
          <input type="number" id="bmi-h" class="input" value="175">
        </div>
        <div style="flex: 1; min-width: 150px;">
          <label style="display: block; margin-bottom: 0.5rem;">Weight (kg)</label>
          <input type="number" id="bmi-w" class="input" value="70">
        </div>
      </div>
      <button id="bmi-calc" class="btn btn-primary" style="align-self: flex-start;">Calculate BMI</button>
      <div id="bmi-result" style="display: none; padding: 1rem; border-radius: var(--radius-md); background: var(--bg-surface-hover); text-align: center;">
        <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);" id="bmi-val">22.9</div>
        <div style="font-size: 1.125rem; font-weight: 500;" id="bmi-status">Normal weight</div>
      </div>
    </div>
  `;
}

export function setup(container) {
  const hInput = container.querySelector('#bmi-h');
  const wInput = container.querySelector('#bmi-w');
  const calcBtn = container.querySelector('#bmi-calc');
  const resultDiv = container.querySelector('#bmi-result');
  const valDiv = container.querySelector('#bmi-val');
  const statusDiv = container.querySelector('#bmi-status');

  calcBtn.addEventListener('click', () => {
    const h = parseFloat(hInput.value) / 100;
    const w = parseFloat(wInput.value);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }
    const bmi = w / (h * h);
    valDiv.textContent = bmi.toFixed(1);
    
    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal weight";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obesity";
    
    statusDiv.textContent = status;
    resultDiv.style.display = 'block';
  });
}
