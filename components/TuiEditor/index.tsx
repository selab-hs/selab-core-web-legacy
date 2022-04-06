import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-cpp.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-xml-doc.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-kotlin.js';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import { MutableRefObject, useRef } from 'react';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import { deviceSize } from '../../styles/mediaQuery';
import * as S from './style';

export default function TuiEditor() {
  const editorRef = useRef<Editor>();

  const windowSize = useGetWindowSize();

  function handleSubmit() {
    if (!editorRef.current) return;

    const editorData = editorRef.current.getInstance().getHTML();

    console.log(editorData);
  }

  return (
    <S.Wrapper>
      <Editor
        initialValue="console.log('hi');"
        ref={editorRef as MutableRefObject<Editor>}
        height="100%"
        previewStyle={windowSize > deviceSize.mobile ? 'vertical' : 'tab'}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
      <div onClick={handleSubmit}>전송!</div>
    </S.Wrapper>
  );
}
