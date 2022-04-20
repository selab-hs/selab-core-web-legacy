import Link from 'next/link';
import * as S from './style';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useContext } from 'react';
import { ThemeContext } from '../_app';

const freePosts = [
  {
    memberId: 1, // 회원 아이디
    freePostId: 2, // 자유 게시글 아이디
    title: '환영합니다. 홈페이지가 개설됐습니다.2', // 자유 게시글 제목
    content: '소프트웨어 엔지니어 연구실 연구원분들을 위한 홈페이지입니다.2', // 자유 게시글 내용
    createdAt: '2022-04-13T09:11:46', // 자유 게시글 생성 날짜
    modifiedAt: '2022-04-13T09:11:46', // 자유 게시글 수정 날짜
  },
  {
    memberId: 1, // 회원 아이디
    freePostId: 2, // 자유 게시글 아이디
    title: '환영합니다. 홈페이지가 개설됐습니다.2', // 자유 게시글 제목
    content: '소프트웨어 엔지니어 연구실 연구원분들을 위한 홈페이지입니다.2', // 자유 게시글 내용
    createdAt: '2022-04-13T09:11:46', // 자유 게시글 생성 날짜
    modifiedAt: '2022-04-13T09:11:46', // 자유 게시글 수정 날짜
  },
  {
    memberId: 1, // 회원 아이디
    freePostId: 2, // 자유 게시글 아이디
    title: '환영합니다. 홈페이지가 개설됐습니다.2', // 자유 게시글 제목
    content: '소프트웨어 엔지니어 연구실 연구원분들을 위한 홈페이지입니다.2', // 자유 게시글 내용
    createdAt: '2022-04-13T09:11:46', // 자유 게시글 생성 날짜
    modifiedAt: '2022-04-13T09:11:46', // 자유 게시글 수정 날짜
  },
  {
    memberId: 1, // 회원 아이디
    freePostId: 2, // 자유 게시글 아이디
    title: '환영합니다. 홈페이지가 개설됐습니다.2', // 자유 게시글 제목
    content: '소프트웨어 엔지니어 연구실 연구원분들을 위한 홈페이지입니다.2', // 자유 게시글 내용
    createdAt: '2022-04-13T09:11:46', // 자유 게시글 생성 날짜
    modifiedAt: '2022-04-13T09:11:46', // 자유 게시글 수정 날짜
  },
  {
    memberId: 1, // 회원 아이디
    freePostId: 2, // 자유 게시글 아이디
    title: '환영합니다. 홈페이지가 개설됐습니다.2', // 자유 게시글 제목
    content: '소프트웨어 엔지니어 연구실 연구원분들을 위한 홈페이지입니다.2', // 자유 게시글 내용
    createdAt: '2022-04-13T09:11:46', // 자유 게시글 생성 날짜
    modifiedAt: '2022-04-13T09:11:46', // 자유 게시글 수정 날짜
  },
];

const FreePosts = () => {
  const { colorTheme } = useContext(ThemeContext);

  return (
    <>
      <S.SearchWrapper>
        <S.Search type="text" id="search" placeholder="검색" colorTheme={colorTheme} />
        <S.SearchSubmit>
          <BiSearchAlt2 size={20} cursor="pointer" />
        </S.SearchSubmit>
      </S.SearchWrapper>
      {freePosts.map((data, index) => {
        return (
          <div key={index}>
            <Link href={`/free-posts/${index + 1}`}>{data.content}</Link>
          </div>
        );
      })}
    </>
  );
};

export default FreePosts;
