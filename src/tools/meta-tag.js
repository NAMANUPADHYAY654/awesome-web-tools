export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 250px;">
          <label style="display: block; margin-bottom: 0.5rem;">Site Title</label>
          <input type="text" id="mt-title" class="input" placeholder="Awesome Site">
        </div>
        <div style="flex: 1; min-width: 250px;">
          <label style="display: block; margin-bottom: 0.5rem;">Description</label>
          <input type="text" id="mt-desc" class="input" placeholder="A very awesome site">
        </div>
        <div style="flex: 1; min-width: 250px;">
          <label style="display: block; margin-bottom: 0.5rem;">Keywords</label>
          <input type="text" id="mt-keys" class="input" placeholder="awesome, site, web">
        </div>
        <div style="flex: 1; min-width: 250px;">
          <label style="display: block; margin-bottom: 0.5rem;">Author</label>
          <input type="text" id="mt-author" class="input" placeholder="Jane Doe">
        </div>
      </div>
      <textarea id="mt-out" class="textarea" readonly style="min-height: 200px; font-family: monospace; white-space: pre;"></textarea>
      <button id="mt-copy" class="btn btn-outline" style="align-self: flex-start;">Copy HTML</button>
    </div>
  `;
}

export function setup(container) {
  const inputs = container.querySelectorAll('.input');
  const out = container.querySelector('#mt-out');
  const copy = container.querySelector('#mt-copy');

  const title = container.querySelector('#mt-title');
  const desc = container.querySelector('#mt-desc');
  const keys = container.querySelector('#mt-keys');
  const author = container.querySelector('#mt-author');

  const update = () => {
    out.value = `<!-- Primary Meta Tags -->
<title>${title.value || 'Title'}</title>
<meta name="title" content="${title.value || 'Title'}">
<meta name="description" content="${desc.value || 'Description'}">
<meta name="keywords" content="${keys.value || 'Keywords'}">
<meta name="author" content="${author.value || 'Author'}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="${title.value || 'Title'}">
<meta property="og:description" content="${desc.value || 'Description'}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="${title.value || 'Title'}">
<meta property="twitter:description" content="${desc.value || 'Description'}`;
  };

  inputs.forEach(i => i.addEventListener('input', update));
  update();

  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(out.value);
    const orig = copy.textContent;
    copy.textContent = 'Copied!';
    setTimeout(() => copy.textContent = orig, 1000);
  });
}
