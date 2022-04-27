import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CLIENT_ERROR, SERVER_ERROR } from '../../../apis/constants';
import { Response } from '../../../apis/types';
import { logInApi } from '../../../apis/users';
import { storage } from '../../utils';
import { SESSION_ID } from '../../utils/constants';

import * as S from '../styles';
import { Props } from './types';

const SignInForm = ({ email, setIsModalOpen }: Props) => {
  const router = useRouter();

  const verifySignInData = yup.object().shape({
    password: yup.string().required('비밀번호를 입력해 주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifySignInData),
  });

  const onSubmit: SubmitHandler<FieldValues> = async ({ password }) => {
    try {
      const {
        data: {
          data: { token },
        },
      } = await logInApi({ email, password });
      storage.set(SESSION_ID, token);
      setIsModalOpen(false);
      router.push('/');
    } catch (e: any) {
      const response = e.response as Response;
      if (!response) return;

      const {
        status,
        data: { message, code },
      } = response;

      console.error(message);
      console.error(code);
      if (status === 401) {
        return alert('아이디 혹은 비밀번호가 틀렸습니다.');
      }
      if (status >= 400) {
        return alert(CLIENT_ERROR);
      }
      if (status >= 500) {
        return alert(SERVER_ERROR);
      }
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label htmlFor="password">비밀번호</S.Label>
      <S.Input
        id="password"
        placeholder="비밀번호를 입력해 주세요"
        {...register('password')}
        type="password"
      />
      {errors.passwordConfirm && <S.ErrorMsg>{errors.passwordConfirm.message}</S.ErrorMsg>}
      <S.SubmitBtn type="submit">로그인 하기</S.SubmitBtn>
    </S.Form>
  );
};
export default SignInForm;
