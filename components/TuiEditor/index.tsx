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

import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import { deviceSize } from '../../styles/mediaQuery';
import * as S from './style';
import { storage } from '../utils';
import { TEMPORARY_POSTS } from '../utils/constants';

export default function TuiEditor() {
  const router = useRouter();
  const [editorData, setEditorData] = useState<any>();
  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<Editor>();
  const timeoutId = useRef(0);

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

  const handleEditorChange = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(() => {
      if (!editorRef.current) return;
      const content = editorRef.current.getInstance().getMarkdown();

      const postObj = [
        {
          id: v4(),
          title: titleRef.current?.value || '',
          content,
        },
      ];

      storage.set(TEMPORARY_POSTS, postObj);
    }, 500);
  };

  useEffect(() => {
    if (!editorRef.current || !titleRef.current) return;
    // TODO: 데이터 추가되면 변경해야함

    const tmpPost = storage.get<{ id: string; title: string; content: string }[]>(TEMPORARY_POSTS);
    const content = tmpPost ? tmpPost[0].content : '';
    const title = tmpPost ? tmpPost[0].title : '';

    titleRef.current.value = title;
    editorRef.current.getInstance().setMarkdown(content);
  }, []);

  return (
    <S.Wrapper>
      <S.Title placeholder="제목을 입력하세요" ref={titleRef} />
      <Editor
        ref={editorRef as MutableRefObject<Editor>}
        height="100%"
        placeholder="내용을 입력하세요"
        previewStyle={windowSize > deviceSize.laptop ? 'vertical' : 'tab'}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        onChange={handleEditorChange}
      />
    </S.Wrapper>
  );
}
