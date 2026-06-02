import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { lineNumbers, drawSelection, highlightSpecialChars } from '@codemirror/view';
import { syntaxHighlighting, HighlightStyle } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { tags } from '@lezer/highlight';

const platformHighlight = HighlightStyle.define([
  { tag: tags.keyword,                     color: '#4a4af0', fontWeight: 'bold' },
  { tag: tags.controlKeyword,              color: '#b87af0', fontWeight: 'bold' },
  { tag: tags.comment,                     color: '#6666aa' },
  { tag: tags.string,                      color: '#ff6b35' },
  { tag: tags.number,                      color: '#ffdd00' },
  { tag: tags.bool,                        color: '#ffdd00' },
  { tag: tags.null,                        color: '#ffdd00' },
  { tag: tags.operator,                    color: '#e0e0ff' },
  { tag: tags.punctuation,                 color: '#888aaa' },
  { tag: tags.propertyName,               color: '#89ddff' },
  { tag: tags.function(tags.variableName), color: '#89ddff' },
  { tag: tags.definition(tags.variableName), color: '#39ff14' },
  { tag: tags.variableName,               color: '#e0e0ff' },
  { tag: tags.className,                   color: '#39ff14' },
]);

const platformTheme = EditorView.theme({
  '&': {
    backgroundColor: '#050510',
    height: '100%',
  },
  '.cm-scroller': {
    fontFamily: "'VT323', monospace",
    fontSize: '18px',
    lineHeight: '1.6',
    overflow: 'auto',
  },
  '.cm-content': {
    caretColor: '#39ff14',
    color: '#39ff14',
    padding: '12px 12px 12px 0',
  },
  '.cm-gutters': {
    backgroundColor: '#050510',
    color: '#333366',
    border: 'none',
    borderRight: '1px solid #1a1a3a',
    paddingLeft: '12px',
  },
  '.cm-lineNumbers .cm-gutterElement': {
    paddingRight: '14px',
  },
  '.cm-activeLine': {
    backgroundColor: '#0a0a2233',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#0a0a2233',
    color: '#6666aa',
  },
  '&.cm-focused': {
    outline: 'none',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {
    backgroundColor: '#4a4af044',
  },
  '.cm-cursor': {
    borderLeftColor: '#39ff14',
  },
}, { dark: true });

let view = null;

export function initCodeEditor() {
  const container = document.getElementById('generatedCode');
  if (!container || view) return;

  view = new EditorView({
    state: EditorState.create({
      doc: '',
      extensions: [
        highlightSpecialChars(),
        drawSelection(),
        lineNumbers(),
        javascript(),
        platformTheme,
        syntaxHighlighting(platformHighlight),
        EditorState.readOnly.of(true),
        EditorView.lineWrapping,
      ],
    }),
    parent: container,
  });
}

export function updateCode(code) {
  if (!view) return;
  view.dispatch({
    changes: { from: 0, to: view.state.doc.length, insert: code },
  });
}
