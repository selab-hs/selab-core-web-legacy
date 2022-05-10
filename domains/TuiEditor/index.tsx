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

import { MutableRefObject, useRef } from 'react';

import { useGetWindowSize } from '@hooks/useGetWindowSize';
import * as S from './style';
import { storage } from '@components/utils';
import { deviceSize } from '@styles/theme/mediaQuery';
import { useEditorDarkMode } from './useEditorDarkMode';
import { useDebounce } from '@hooks/useDebounce';
import { TEMPORARY_POST } from '@constants/posts-constants';
import { v4 } from 'uuid';
import { useSetInitialEditorInfo } from './useSetInitialEditorInfo';

const TuiEditor = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<Editor>(null);
  const windowSize = useGetWindowSize();
  useEditorDarkMode();
  useSetInitialEditorInfo(titleRef, editorRef);

  const handleTitleChange = useDebounce(() => {
    const title = titleRef?.current?.value || '';
    const content = editorRef?.current?.getInstance().getMarkdown() || '';
    if (!title && !content) return;

    const nextPost = { id: v4(), title, content };
    storage.set(TEMPORARY_POST, nextPost);
  }, 500);

  const handleEditorChange = useDebounce(() => {
    const title = titleRef?.current?.value || '';
    const content = editorRef?.current?.getInstance().getMarkdown() || '';
    if (!title && !content) return;

    const postObj = {
      id: v4(),
      title,
      content,
    };

    storage.set(TEMPORARY_POST, postObj);
  }, 500);

  return (
    <S.Wrapper>
      <S.Title placeholder="제목을 입력하세요" ref={titleRef} onChange={handleTitleChange} />
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
};

export default TuiEditor;
