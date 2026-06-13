window.addEventListener('tool-loaded', (e) => {
  if (e.detail.id === 'text-case') {
    const container = document.getElementById('text-case-container');
    if (container) {
      container.innerHTML = `
        <div class="tool-layout">
          <textarea id="tc-input" class="input textarea" style="min-height: 300px;" placeholder="Type or paste your text here..."></textarea>
          
          <div class="tool-layout-row" style="gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-outline tc-btn" data-case="upper">UPPERCASE</button>
            <button class="btn btn-outline tc-btn" data-case="lower">lowercase</button>
            <button class="btn btn-outline tc-btn" data-case="title">Title Case</button>
            <button class="btn btn-outline tc-btn" data-case="camel">camelCase</button>
            <button class="btn btn-outline tc-btn" data-case="snake">snake_case</button>
            <button class="btn btn-outline tc-btn" data-case="kebab">kebab-case</button>
            <button class="btn btn-outline tc-btn" data-case="pascal">PascalCase</button>
          </div>
          
          <div class="tool-layout-row">
             <button id="tc-btn-copy" class="btn btn-primary" style="flex: 1;">Copy Result</button>
          </div>
        </div>
      `;

      const input = document.getElementById('tc-input');
      const btnCopy = document.getElementById('tc-btn-copy');

      const toTitleCase = (str) => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      const toCamelCase = (str) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
      const toSnakeCase = (str) => str.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('_');
      const toKebabCase = (str) => str.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('-');
      const toPascalCase = (str) => str.replace(/(\w)(\w*)/g, (g0,g1,g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/\W+/g, '');

      document.querySelectorAll('.tc-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const type = e.target.getAttribute('data-case');
          let text = input.value;
          switch(type) {
            case 'upper': text = text.toUpperCase(); break;
            case 'lower': text = text.toLowerCase(); break;
            case 'title': text = toTitleCase(text); break;
            case 'camel': text = toCamelCase(text); break;
            case 'snake': text = toSnakeCase(text); break;
            case 'kebab': text = toKebabCase(text); break;
            case 'pascal': text = toPascalCase(text); break;
          }
          input.value = text;
        });
      });

      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(input.value);
        btnCopy.textContent = 'Copied!';
        setTimeout(() => btnCopy.textContent = 'Copy Result', 2000);
      });
    }
  }
});
