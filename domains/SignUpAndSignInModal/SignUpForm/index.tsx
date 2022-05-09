import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import * as S from '../styles';
import { verifySignUpInputs } from '../verifyInputs';
import { Props } from './types';
import { Response } from '@apis/types';
import { signUpApi } from '@apis/users';
import { CLIENT_ERROR, SERVER_ERROR } from '@constants/api-constants';

const SignUpForm = ({ email, setStep }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifySignUpInputs),
  });

  const onSubmit: SubmitHandler<FieldValues> = async ({ password, studentId, name, nickname }) => {
    try {
      const { status } = await signUpApi({ email, password, studentId, name, nickname });
      if (status === 204) {
        setStep(1);
      }
    } catch (e: any) {
      const response = e.response as Response;
      if (!response) return;

      const {
        status,
        data: { message, code },
      } = response;
      // console.error(message);
      // console.error(code);

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
      <S.Title>회원 가입</S.Title>

      <S.Label htmlFor="password">비밀 번호</S.Label>
      <S.Input
        id="password"
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        autoComplete="on"
        autoFocus
        {...register('password')}
      />
      {errors.password && <S.ErrorMsg>{errors.password.message}</S.ErrorMsg>}

      <S.Label htmlFor="password-confirm">비밀 번호 확인</S.Label>
      <S.Input
        id="passwordConfirm"
        placeholder="비밀번호 확인"
        type="password"
        autoComplete="on"
        {...register('passwordConfirm')}
      />
      {errors.passwordConfirm && <S.ErrorMsg>{errors.passwordConfirm.message}</S.ErrorMsg>}

      <S.Label htmlFor="studentId">학번</S.Label>
      <S.Input id="studentId" placeholder="학번을 입력해 주세요" {...register('studentId')} />
      {errors.studentId && <S.ErrorMsg>{errors.studentId.message}</S.ErrorMsg>}

      <S.Label htmlFor="name">이름</S.Label>
      <S.Input id="name" placeholder="이름을 입력해 주세요" {...register('name')} />
      {errors.name && <S.ErrorMsg>{errors.name.message}</S.ErrorMsg>}

      <S.Label htmlFor="nickname">닉네임</S.Label>
      <S.Input id="nickname" placeholder="닉네임을 입력해 주세요" {...register('nickname')} />
      {errors.nickname && <S.ErrorMsg>{errors.nickname.message}</S.ErrorMsg>}

      <S.SubmitBtn>회원가입 하기</S.SubmitBtn>
    </S.Form>
  );
};
export default SignUpForm;
