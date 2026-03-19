export function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function formatCode(code) {
  return code
    .split('\n')
    .filter((l) => l.trim())
    .map((line) => {
      if (line.trim().startsWith('//')) {
        return `<span class="code-comment">${escHtml(line)}</span>`;
      }
      return escHtml(line)
        .replace(/(window\.GAME_CONFIG\.\w+)/g, '<span style="color:#4a90d9">$1</span>')
        .replace(/= ([\d.]+)/g, '= <span style="color:#ffdd00">$1</span>')
        .replace(/= '([^']+)'/g, "= '<span style=\"color:#ff6b35\">$1</span>'");
    })
    .join('\n');
}
