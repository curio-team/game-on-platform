import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { getWorkspace } from './blockly/setup.js';
import { formatCode } from './ui.js';

export function showTab(tab) {
  const blocklyDiv = document.getElementById('blocklyDiv');
  const codePanel = document.getElementById('generatedCode');

  document.getElementById('tabBlocks').classList.toggle('active', tab === 'blocks');
  document.getElementById('tabCode').classList.toggle('active', tab === 'code');

  if (tab === 'blocks') {
    blocklyDiv.style.display = 'block';
    codePanel.classList.remove('visible');
    Blockly.svgResize(getWorkspace());
  } else {
    blocklyDiv.style.display = 'none';
    codePanel.classList.add('visible');
    try {
      const code = javascriptGenerator.workspaceToCode(getWorkspace());
      document.getElementById('codeOutput').innerHTML =
        `<span class="code-comment">// JOUW SPELPROGRAMMA\n// Deze code is gegenereerd uit je blokken!\n\n</span>` +
        formatCode(code);
    } catch {
      // ignore generation errors in preview
    }
  }
}
