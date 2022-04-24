import * as yup from 'yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as S from '../styles';
import { isMemberExist } from '../../../apis/users';
import { CLIENT_ERROR, SERVER_ERROR } from '../../../apis/constants';
import { Props } from './types';

const VerifyIsMemberModal = ({ setStep }: Props) => {
  const verifyEmail = yup.object().shape({
    email: yup.string().required('이메일을 입력해 주세요.').email('이메일 양식이 아닙니다.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifyEmail),
  });

  const onSubmit: SubmitHandler<FieldValues> = async ({ email }) => {
    try {
      const { data, status } = await isMemberExist(email);
      if (status >= 400) {
        return alert(CLIENT_ERROR);
      }
      if (status >= 500) {
        return alert(SERVER_ERROR);
      }
      const {
        data: { signup },
      } = data;
      const nextStep = signup ? 1 : 2;
      setStep(nextStep);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label htmlFor="email">이메일</S.Label>
      <S.Input id="email" placeholder="이메일을 입력해 주세요" {...register('email')} />
      {errors.email && <S.ErrorMsg>{errors.email.message}</S.ErrorMsg>}
    </S.Form>
  );
};
export default VerifyIsMemberModal;
