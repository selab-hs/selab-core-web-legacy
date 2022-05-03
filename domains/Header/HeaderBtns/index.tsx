import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import * as S from './style';
import { Props } from './types';
import axios from 'axios';
import { storage } from '@components/utils';
import { TEMPORARY_POSTS } from '@components/utils/constants';
import SignUpAndSignInModal from '@domains/SignUpAndSignInModal';
import { postSinglePostAPI } from '@apis/posts';

const HeaderBtns = ({ currentTab }: Props) => {
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
      const response = await postSinglePostAPI(title, content);
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
    <S.BtnWrapper currentTab={currentTab}>
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
          {isModalOpen && <SignUpAndSignInModal setIsModalOpen={setIsModalOpen} />}
        </>
      )}
    </S.BtnWrapper>
  );
};
export default HeaderBtns;
