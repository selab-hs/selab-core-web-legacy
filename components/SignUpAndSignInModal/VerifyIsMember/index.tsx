import * as S from '../styles';

const VerifyIsMember = () => {
  return (
    <>
      <S.Label htmlFor="email">이메일</S.Label>
      <S.Input id="email" placeholder="이메일을 입력해 주세요" />
    </>
  );
};
export default VerifyIsMember;
