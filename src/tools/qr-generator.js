import QRCode from 'qrcode';

export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <input type="text" id="qr-input" class="input" placeholder="Enter text or URL" style="flex: 1; min-width: 250px;">
        <button id="qr-gen" class="btn btn-primary">Generate QR</button>
      </div>
      <div style="text-align: center; margin-top: 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <canvas id="qr-canvas" style="border-radius: var(--radius-md); max-width: 100%; display: none;"></canvas>
        <button id="qr-dl" class="btn btn-outline" style="display: none;">Download Image</button>
      </div>
    </div>
  `;
}

export function setup(container) {
  const input = container.querySelector('#qr-input');
  const genBtn = container.querySelector('#qr-gen');
  const canvas = container.querySelector('#qr-canvas');
  const dlBtn = container.querySelector('#qr-dl');

  const generate = async () => {
    if (!input.value.trim()) return;
    try {
      await QRCode.toCanvas(canvas, input.value, {
        width: 250,
        margin: 2,
        color: {
          dark: '#000000ff',
          light: '#ffffffff'
        }
      });
      canvas.style.display = 'block';
      dlBtn.style.display = 'inline-flex';
    } catch (e) {
      alert('Failed to generate QR code');
    }
  };

  genBtn.addEventListener('click', generate);

  dlBtn.addEventListener('click', () => {
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  });
}
