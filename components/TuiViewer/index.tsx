import React, { useEffect, useState } from 'react';

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

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import { BsFillHeartFill, BsLink45Deg } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import * as S from './style';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';

interface PostData {
  id: number;
  titleData: string;
  editorData: string;
}

const TuiEditor = () => {
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    const postData = localStorage.getItem('post');

    const parsedPostData = postData ? JSON.parse(postData) : null;

    setData(parsedPostData);
  }, []);
  const windowWidth = useGetWindowSize();

  // TODO: 좋아요, 댓글, 공유하기에 기능 붙이기

  return (
    <S.Wrapper>
      {data && (
        <S.Container>
          <S.Title>{data.titleData}</S.Title>
          <S.Info>
            <span>2022. 3. 25</span>
            <span>조회수: 26</span>
            <span>작성자: 강동진</span>
          </S.Info>
          <Viewer
            initialValue={data.editorData}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
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
