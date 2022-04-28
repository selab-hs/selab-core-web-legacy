import { useRouter } from 'next/router';
import { MouseEvent, useContext, useState } from 'react';
import { ThemeContext } from '../../../pages/_app';
import { storage } from '../../utils';
import { TEMPORARY_POSTS } from '../../utils/constants';
import SignUpAndSignInModal from '../../SignUpAndSignInModal';
import DarkModeToggle from './DarkModeToggle';
import * as S from './style';
import { Props } from './types';
import axios from 'axios';

// TODO: 추후 삭제 예정
export const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW5icjB0aGVyQGhzLmFjLmtyIiwiaXNzIjoic2VsYWIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjUwOTU4MzIzfQ.bXy9dkOgEoN5Y-9bySizyEIjvhy-3MYpYTB7dqe1RXka81LU9EBbFEx9TG-f2ZbVNRloTfOwfeb-yduFmOyZqA';

const HeaderBtns = ({ currentTab }: Props) => {
  const { colorTheme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const loginBtn = () => {
    console.log('click LoginBtn');
  };
  const handleBackBtn = () => {
    // TODO: 로컬스토리지에 저장
    alert('임시저장이 완료되었습니다.');
    router.back();
  };

  const handleCreateBtn = async () => {
    const tmpPost = storage.get<{ id: string; title: string; content: string }[]>(TEMPORARY_POSTS);
    const content = tmpPost ? tmpPost[0].content : '';
    const title = tmpPost ? tmpPost[0].title : '';

    // 입력한 제목이 없을때 예외처리
    if (!title.length) {
      alert('제목은 필수로 입력해주세요 🚨');
      return;
    }

    // TODO: 데이터 전송 하기
    try {
      const response = await axios({
        method: 'post',
        url: '/api/v1/free-posts',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: { title, content },
      });

      router.push(`/free-posts/${response.data.data.id}`);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSignUp = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <S.BtnWrapper colorTheme={colorTheme} currentTab={currentTab}>
      <DarkModeToggle />
      {currentTab === 2 && (
        <>
          <S.LeftBtn currentTab={currentTab} onClick={handleBackBtn}>
            뒤로가기
          </S.LeftBtn>
          <S.RightBtn onClick={handleCreateBtn}>작성하기</S.RightBtn>
        </>
      )}
      {currentTab !== 2 && (
        <>
          <S.LeftBtn currentTab={currentTab}>로그인</S.LeftBtn>

          <S.RightBtn onClick={handleSignUp}>회원가입</S.RightBtn>
          {isModalOpen && (
            <>
              <SignUpAndSignInModal setIsModalOpen={setIsModalOpen} />
            </>
          )}
        </>
      )}
    </S.BtnWrapper>
  );
};
export default HeaderBtns;
