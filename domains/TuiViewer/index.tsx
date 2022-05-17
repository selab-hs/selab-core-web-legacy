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
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import { useRef } from 'react';

import * as S from './style';
import { useGetWindowSize } from '@hooks/useGetWindowSize';
import { useLoadFreePost } from './useLoadFreePost';
import Infos from './Infos';
import Indicator from './Indicator';
import { useViewerDarkMode } from './useViewerDarkMode';

const TuiEditor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const freePost = useLoadFreePost();
  const windowWidth = useGetWindowSize();
  useViewerDarkMode(ref, freePost);

  return (
    <S.Wrapper>
      {freePost && (
        <S.Container>
          <S.Title>{freePost.title}</S.Title>
          <Infos createdAt={freePost.createdAt} memberId={freePost.memberId} />
          <div ref={ref}>
            <Viewer
              initialValue={freePost.content}
              plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
            />
          </div>
          {windowWidth > 1160 && <Indicator />}
        </S.Container>
      )}
    </S.Wrapper>
  );
};

export default TuiEditor;
