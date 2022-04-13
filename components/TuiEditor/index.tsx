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
import { useRouter } from 'next/router';

export default function TuiEditor() {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<Editor>();

  const windowSize = useGetWindowSize();

  function handleSubmit() {
    // ref가 없을때 예외처리
    if (!editorRef.current || !titleRef.current) return;

    const titleData = titleRef.current.value;
    const editorData = editorRef.current.getInstance().getMarkdown();

    // 입력한 제목이 없을때 예외처리
    if (!titleData.length) {
      alert('제목은 필수로 입력해주세요 🚨');
      return;
    }

    // TODO: 데이터 전송 하기
    localStorage.setItem('post', JSON.stringify({ id: 1, titleData, editorData }));

    // TODO: id를 받아서 라우팅 하기
    router.push('/post/1');
  }

  return (
    <S.Wrapper>
      <S.Title placeholder="제목을 입력하세요" ref={titleRef} />
      <Editor
        initialValue="console.log('hi');"
        ref={editorRef as MutableRefObject<Editor>}
        height="100%"
        previewStyle={windowSize > deviceSize.laptop ? 'vertical' : 'tab'}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
      <div onClick={handleSubmit}>전송!</div>
    </S.Wrapper>
  );
}
