import { useState } from 'react';
import { Props } from './types';
import * as S from './styles';
import VerifyIsMemberModal from './VerifyIsMemberModal';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const SignUpAndSignInModal = ({ setIsModalOpen }: Props) => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');

  const handleCloseBtn = () => {
    setIsModalOpen(false);
  };

  return (
    <S.CuModal setIsModalOpen={setIsModalOpen}>
      <S.CloseBtn onClick={handleCloseBtn}>x</S.CloseBtn>
      {step === 0 && <VerifyIsMemberModal setStep={setStep} setEmail={setEmail} />}
      {step === 1 && <SignInForm setIsModalOpen={setIsModalOpen} email={email} />}
      {step === 2 && <SignUpForm email={email} setStep={setStep} />}
    </S.CuModal>
  );
};
export default SignUpAndSignInModal;
