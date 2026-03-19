import * as Blockly from 'blockly';
import { toolboxConfig, DEFAULT_WORKSPACE_XML } from './toolbox.js';

let workspace = null;

export function initBlockly() {
  workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolboxConfig,
    grid: { spacing: 20, length: 3, colour: '#1a1a3a', snap: true },
    zoom: { controls: true, wheel: true, startScale: 0.95, maxScale: 2, minScale: 0.5 },
    trashcan: true,
    theme: Blockly.Theme.defineTheme('retroTheme', {
      base: Blockly.Themes.Classic,
      componentStyles: {
        workspaceBackgroundColour: '#0a0a1a',
        toolboxBackgroundColour: '#11112a',
        toolboxForegroundColour: '#e0e0ff',
        flyoutBackgroundColour: '#0d0d22',
        flyoutForegroundColour: '#e0e0ff',
        flyoutOpacity: 0.9,
        scrollbarColour: '#4a4af0',
        insertionMarkerColour: '#4a4af0',
        insertionMarkerOpacity: 0.5,
        scrollbarOpacity: 0.5,
        cursorColour: '#ffdd00',
      },
      fontStyle: { family: 'VT323', size: 15 },
    }),
  });

  const parser = new DOMParser();
  const dom = parser.parseFromString(DEFAULT_WORKSPACE_XML, 'text/xml').documentElement;
  Blockly.Xml.domToWorkspace(dom, workspace);
}

export function getWorkspace() {
  return workspace;
}
