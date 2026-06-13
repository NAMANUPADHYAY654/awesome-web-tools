export function render() {
  return `
    <div class="glass-panel" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <textarea id="tc-input" class="textarea" placeholder="Enter text here..." style="min-height: 150px;"></textarea>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button class="btn btn-primary tc-btn" data-type="upper">UPPERCASE</button>
        <button class="btn btn-primary tc-btn" data-type="lower">lowercase</button>
        <button class="btn btn-primary tc-btn" data-type="title">Title Case</button>
        <button class="btn btn-primary tc-btn" data-type="camel">camelCase</button>
        <button class="btn btn-primary tc-btn" data-type="snake">snake_case</button>
        <button class="btn btn-primary tc-btn" data-type="kebab">kebab-case</button>
      </div>
      <button id="tc-copy" class="btn btn-outline" style="align-self: flex-start;">Copy Result</button>
    </div>
  `;
}

export function setup(container) {
  const input = container.querySelector('#tc-input');
  const btns = container.querySelectorAll('.tc-btn');
  const copy = container.querySelector('#tc-copy');

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  };

  const toCamelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  };

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = input.value;
      let res = text;
      switch(btn.dataset.type) {
        case 'upper': res = text.toUpperCase(); break;
        case 'lower': res = text.toLowerCase(); break;
        case 'title': res = toTitleCase(text); break;
        case 'camel': res = toCamelCase(text); break;
        case 'snake': res = text.toLowerCase().replace(/\s+/g, '_'); break;
        case 'kebab': res = text.toLowerCase().replace(/\s+/g, '-'); break;
      }
      input.value = res;
    });
  });

  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value);
    const orig = copy.textContent;
    copy.textContent = 'Copied!';
    setTimeout(() => copy.textContent = orig, 1000);
  });
}
