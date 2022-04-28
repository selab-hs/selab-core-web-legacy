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
import { ThemeContext } from '../../pages/_app';
import { lightTheme } from '../../styles/theme';
import { FreePostType } from '../../pages/free-posts/types';
import { useRouter } from 'next/router';
import { timeWithHyphen } from '../utils/timeWithHyphen';
import { getSinglePostAPI } from '../../apis/posts';

const TuiEditor = () => {
  const [freePost, setFreePost] = useState<FreePostType | null>(null);
  const { colorTheme } = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getSinglePostAPI(router.query.id as string);
      setFreePost(response.data.data);
    })();
  }, [router.query.id]);

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
  }, [freePost, colorTheme]);

  return (
    <S.Wrapper>
      {freePost ? (
        <S.Container>
          <S.Title>{freePost.title}</S.Title>
          <S.InfoWrapper>
            <S.Info>
              <span>{timeWithHyphen(freePost.createdAt)}</span>
              {/*  TODO: 조회수 보여주기 */}
              {/* <span>조회수: 26</span> */}
              {/*  TODO: 사용자 이름 보여주기 */}
              <span>작성자: {freePost.memberId}번 사용자</span>
            </S.Info>
            <S.Info clickable>
              <span>수정</span>
              <span>삭제</span>
            </S.Info>
          </S.InfoWrapper>
          <div ref={ref}>
            <Viewer
              initialValue={freePost.content}
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
      ) : (
        <div>로딩중...</div>
      )}
    </S.Wrapper>
  );
};

// TODO: ssr을 못하는게 아마도 이걸로 추정
// dynamic(() => import('../../components/TuiViewer'), { ssr: false });

// export async function getServerSideProps(context: any) {
//   const id = context.params.id;
//   const response = await axios({
//     method: 'get',
//     url: `/api/v1/free-posts/${id}.json`,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return {
//     props: { freePost: response.data.data },
//   };
// }

export default TuiEditor;
