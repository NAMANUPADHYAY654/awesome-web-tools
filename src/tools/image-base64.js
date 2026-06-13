export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div style="border: 2px dashed var(--border-color); padding: 2rem; border-radius: var(--radius-md); text-align: center;" id="ib-dropzone">
        <p style="margin-bottom: 1rem; color: var(--text-muted);">Drop image here or click to select</p>
        <input type="file" id="ib-file" accept="image/*" style="display: none;">
        <button class="btn btn-primary" onclick="document.getElementById('ib-file').click()">Select Image</button>
      </div>
      <img id="ib-preview" style="max-width: 100%; max-height: 200px; display: none; border-radius: var(--radius-md); align-self: center;">
      <textarea id="ib-out" class="textarea" readonly placeholder="Base64 output will appear here..." style="min-height: 150px;"></textarea>
      <button id="ib-copy" class="btn btn-outline" style="align-self: flex-start; display: none;">Copy Base64</button>
    </div>
  `;
}

export function setup(container) {
  const fileInput = container.querySelector('#ib-file');
  const dropzone = container.querySelector('#ib-dropzone');
  const preview = container.querySelector('#ib-preview');
  const out = container.querySelector('#ib-out');
  const copy = container.querySelector('#ib-copy');

  const processFile = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.display = 'block';
      out.value = e.target.result;
      copy.style.display = 'inline-flex';
    };
    reader.readAsDataURL(file);
  };

  fileInput.addEventListener('change', (e) => {
    processFile(e.target.files[0]);
  });

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--color-primary)';
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.style.borderColor = 'var(--border-color)';
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--border-color)';
    processFile(e.dataTransfer.files[0]);
  });

  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(out.value);
    const orig = copy.textContent;
    copy.textContent = 'Copied!';
    setTimeout(() => copy.textContent = orig, 1000);
  });
}
