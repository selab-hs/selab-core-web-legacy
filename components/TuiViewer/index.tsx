import React, { useContext, useEffect, useRef, useState } from 'react';

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

import { BsFillHeartFill, BsLink45Deg } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import * as S from './style';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import { storage } from '../utils';
import { TEMPORARY_POSTS } from '../utils/constants';
import { ThemeContext } from '../../pages/_app';
import { lightTheme } from '../../styles/theme';

interface PostData {
  id: string;
  title: string;
  content: string;
}

const TuiEditor = () => {
  const [data, setData] = useState<PostData | null>(null);
  const { colorTheme } = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tmpPost = storage.get<{ id: string; title: string; content: string }[]>(TEMPORARY_POSTS);
    setData(tmpPost ? tmpPost[0] : null);
  }, []);

  const windowWidth = useGetWindowSize();

  // TODO: 좋아요, 댓글, 공유하기에 기능 붙이기

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (colorTheme === lightTheme) {
      el.classList.remove('toastui-editor-dark');
    } else {
      el.classList.add('toastui-editor-dark');
    }
  }, [data, colorTheme]);

  return (
    <S.Wrapper>
      {data && (
        <S.Container>
          <S.Title>{data.title}</S.Title>
          <S.InfoWrapper>
            <S.Info>
              <span>2022. 3. 25</span>
              <span>조회수: 26</span>
              <span>작성자: 강동진</span>
            </S.Info>
            <S.Info clickable>
              <span>수정</span>
              <span>삭제</span>
            </S.Info>
          </S.InfoWrapper>
          <div ref={ref}>
            <Viewer
              initialValue={data.content}
              plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
            />
          </div>
          {windowWidth > 1160 && (
            <S.Indicator>
              <S.IndicatorContent>
                <BsFillHeartFill size={20} cursor="pointer" />
                <BsLink45Deg size={20} cursor="pointer" />
                <BiCommentDetail size={20} cursor="pointer" />
              </S.IndicatorContent>
            </S.Indicator>
          )}
        </S.Container>
      )}
    </S.Wrapper>
  );
};

export default TuiEditor;
