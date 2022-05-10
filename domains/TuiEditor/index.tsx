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

import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { v4 } from 'uuid';

import { useGetWindowSize } from '@hooks/useGetWindowSize';
import * as S from './style';
import { storage } from '@components/utils';
import { TEMPORARY_POSTS } from '@components/utils/constants';
import { deviceSize } from '@styles/theme/mediaQuery';

export default function TuiEditor() {
  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<Editor>();
  const timeoutId = useRef(0);

  const windowSize = useGetWindowSize();

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

  useEffect(() => {
    const mdTabContainer = document.querySelector(
      '.toastui-editor-md-tab-container',
    ) as HTMLElement;
    const el = document.getElementsByClassName('toastui-editor-defaultUI')[0];
    if (storage.get('theme') === 'light') {
      el.classList.remove('toastui-editor-dark');
      mdTabContainer.style.background = '#fdfdff';
      mdTabContainer.style.borderBottomColor = '#fdfdff';
    } else {
      el.classList.add('toastui-editor-dark');
      mdTabContainer.style.background = 'rgb(35, 36, 40)';
      mdTabContainer.style.borderBottomColor = 'rgb(35, 36, 40)';
    }
  }, [windowSize]);

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
