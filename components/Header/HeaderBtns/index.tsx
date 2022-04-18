import { useRouter } from 'next/router';
import DarkModeToggle from './DarkModeToggle';
import * as S from './style';
import { Props } from './types';

const HeaderBtns = ({ currentTab }: Props) => {
  const router = useRouter();

  const loginBtn = () => {
    console.log('click LoginBtn');
  };
  const handleBackBtn = () => {
    // TODO: 로컬스토리지에 저장
    alert('임시저장이 완료되었습니다.');
    router.back();
  };
  return (
    <S.BtnWrapper>
      <DarkModeToggle />
      {currentTab === 2 && (
        <>
          <S.LeftBtn currentTab={currentTab} onClick={handleBackBtn}>
            뒤로가기
          </S.LeftBtn>
          <S.RightBtn onClick={handleBackBtn}>작성하기</S.RightBtn>
        </>
      )}
      {currentTab !== 2 && (
        <>
          <S.LeftBtn currentTab={currentTab}>로그인</S.LeftBtn>
          <S.RightBtn>회원가입</S.RightBtn>
        </>
      )}
    </S.BtnWrapper>
  );
};
export default HeaderBtns;
