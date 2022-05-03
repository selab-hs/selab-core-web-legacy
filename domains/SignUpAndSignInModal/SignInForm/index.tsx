import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import * as S from '../styles';
import { Props } from './types';
import { fetchUserLogIn } from 'stores/modules/users';
import { RootState } from 'stores/modules';

const SignInForm = ({ email, setIsModalOpen }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const verifySignInData = yup.object().shape({
    password: yup.string().required('비밀번호를 입력해 주세요.'),
  });

  const { isLoggedIn } = useSelector((state: RootState) => state.users);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifySignInData),
  });

  const onSubmit: SubmitHandler<FieldValues> = async ({ password }) => {
    dispatch(fetchUserLogIn({ email, password }));
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    setIsModalOpen(false);
    router.push('/');
  }, [isLoggedIn]);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
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
