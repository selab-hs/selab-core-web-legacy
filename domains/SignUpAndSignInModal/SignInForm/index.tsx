import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import * as S from '../styles';
import { Props } from './types';
import { fetchUserLogIn } from '@stores/modules/users';
import { verifySignInInputs } from '../verifyInputs';
import { useUpdateToken } from './useUpdateToken';

const SignInForm = ({ email, setIsModalOpen }: Props) => {
  const dispatch = useDispatch();
  useUpdateToken(setIsModalOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifySignInInputs),
  });

  const onSubmit: SubmitHandler<FieldValues> = async ({ password }) => {
    dispatch(fetchUserLogIn({ email, password }));
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Title>로그인</S.Title>

      <S.Label htmlFor="password">비밀번호</S.Label>
      <S.Input
        id="password"
        placeholder="비밀번호를 입력해 주세요"
        {...register('password')}
        type="password"
        autoFocus
        autoComplete="on"
      />
      {errors.passwordConfirm && <S.ErrorMsg>{errors.passwordConfirm.message}</S.ErrorMsg>}

      <S.SubmitBtn type="submit">로그인 하기</S.SubmitBtn>
    </S.Form>
  );
};
export default SignInForm;
