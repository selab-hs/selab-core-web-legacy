import { useState } from 'react';
import Modal from '../Modal';
import { Props } from './types';
import * as S from './styles';
import VerifyIsMember from './VerifyIsMember';

const SignUpAndSignInModal = ({ setIsModalOpen }: Props) => {
  const [step, setStep] = useState(0);

  const handleCloseBtn = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <S.CloseBtn onClick={handleCloseBtn}>x</S.CloseBtn>
      <S.Form>{step === 0 && <VerifyIsMember />}</S.Form>
      {/* <form>
        <label htmlFor="email" />
        <input id="email" placeholder="이메일을 입력해주세요" />

        <label htmlFor="studentId" />
        <input id="studentId" placeholder="학번을 입력해주세요" />

        <label htmlFor="name" />
        <input id="name" placeholder="이름을 입력해주세요" />

        <label htmlFor="password" />
        <input id="password" placeholder="비밀번호를 입력해주세요" />

        <label htmlFor="pwdConfirm" />
        <input id="pwdConfirm" placeholder="비밀번호 확인" />

        <label htmlFor="nickname" />
        <input id="nickname" placeholder="닉네임을 입력해주세요" />

        <label htmlFor="pwdConfirm" />
        <input id="pwdConfirm" placeholder="비밀번호 확인" />

        <label htmlFor="pwdConfirm" />
        <input id="pwdConfirm" placeholder="비밀번호 확인" type="file" />
      </form> */}
    </Modal>
  );
};
export default SignUpAndSignInModal;
