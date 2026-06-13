export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <label>Unix Timestamp:</label>
        <input type="number" id="ts-input" class="input" style="flex: 1; min-width: 200px;">
        <button id="ts-to-date" class="btn btn-primary">To Date</button>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <label>Date / Time:</label>
        <input type="datetime-local" id="ts-date-input" class="input" style="flex: 1; min-width: 200px;">
        <button id="ts-to-unix" class="btn btn-primary">To Timestamp</button>
      </div>
      <div style="margin-top: 1rem;">
        <div style="font-weight: bold; margin-bottom: 0.5rem;">Result:</div>
        <div class="glass-panel" style="padding: 1rem; background: var(--bg-surface-hover);" id="ts-result">
          -
        </div>
      </div>
      <button id="ts-now" class="btn btn-outline" style="align-self: flex-start;">Get Current Timestamp</button>
    </div>
  `;
}

export function setup(container) {
  const tsInput = container.querySelector('#ts-input');
  const dateInput = container.querySelector('#ts-date-input');
  const btnToDate = container.querySelector('#ts-to-date');
  const btnToUnix = container.querySelector('#ts-to-unix');
  const btnNow = container.querySelector('#ts-now');
  const result = container.querySelector('#ts-result');

  btnToDate.addEventListener('click', () => {
    let val = parseInt(tsInput.value, 10);
    if (isNaN(val)) return;
    // Assuming seconds, convert to ms
    if (val < 10000000000) val *= 1000;
    const d = new Date(val);
    result.innerHTML = `${d.toUTCString()}<br>${d.toLocaleString()}`;
  });

  btnToUnix.addEventListener('click', () => {
    const val = dateInput.value;
    if (!val) return;
    const d = new Date(val);
    const ts = Math.floor(d.getTime() / 1000);
    result.innerHTML = `${ts} (seconds)<br>${d.getTime()} (milliseconds)`;
  });

  btnNow.addEventListener('click', () => {
    const d = new Date();
    tsInput.value = Math.floor(d.getTime() / 1000);
    result.innerHTML = `${Math.floor(d.getTime() / 1000)} (seconds)<br>${d.getTime()} (milliseconds)`;
  });
}
