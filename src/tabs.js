import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { getWorkspace } from './blockly/setup.js';
import { formatCode } from './ui.js';

export function showTab(tab) {
  const blocklyDiv = document.getElementById('blocklyDiv');
  const codePanel = document.getElementById('generatedCode');
  const levelPanel = document.getElementById('levelEditorPanel'); // may be null

  document.getElementById('tabBlocks').classList.toggle('active', tab === 'blocks');
  document.getElementById('tabCode').classList.toggle('active', tab === 'code');
  const tabLevel = document.getElementById('tabLevel');
  if (tabLevel) tabLevel.classList.toggle('active', tab === 'level');

  if (tab === 'blocks') {
    blocklyDiv.style.display = 'block';
    codePanel.classList.remove('visible');
    if (levelPanel) levelPanel.classList.remove('visible');
    Blockly.svgResize(getWorkspace());
  } else if (tab === 'code') {
    blocklyDiv.style.display = 'none';
    codePanel.classList.add('visible');
    if (levelPanel) levelPanel.classList.remove('visible');
    try {
      const code = javascriptGenerator.workspaceToCode(getWorkspace());
      document.getElementById('codeOutput').innerHTML =
        `<span class="code-comment">// JOUW SPELPROGRAMMA\n// Deze code is gegenereerd uit je blokken!\n\n</span>` +
        formatCode(code);
    } catch {
      // ignore generation errors in preview
    }
  } else if (tab === 'level') {
    blocklyDiv.style.display = 'none';
    codePanel.classList.remove('visible');
    if (levelPanel) levelPanel.classList.add('visible');
  }
}
