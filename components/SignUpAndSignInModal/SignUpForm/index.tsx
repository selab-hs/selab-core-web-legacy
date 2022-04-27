import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CLIENT_ERROR, SERVER_ERROR } from '../../../apis/constants';
import { Response } from '../../../apis/types';
import { signUpApi } from '../../../apis/users';

import * as S from '../styles';
import { Props } from './types';

const SignUpForm = ({ email, setStep }: Props) => {
  const verifySignUpData = yup.object().shape({
    password: yup
      .string()
      .required('비밀번호를 입력해 주세요.')
      .min(8, '8자 이상이어야 합니다.')
      .max(30, '30자 이하여야 합니다.')
      .matches(/[0-9]{1,}/, { message: '숫자는 1개 이상이어야 합니다.' })
      .matches(/[a-z || A-Z]{1,}/, { message: '영어는 1개 이상이어야 합니다.' })
      .matches(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/, {
        message: '특수문자는 1개 이상이어야 합니다.',
      }),
    passwordConfirm: yup
      .string()
      .required('비밀번호를 확인해주세요')
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
    studentId: yup
      .string()
      .required('학번을 입력해주세요.')
      .matches(/^[0-9]+$/g, { message: '숫자만 입력해주세요.' }),
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/, { message: '한글만 입력해주세요' }),
    nickname: yup.string().required('닉네임을 입력해주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifySignUpData),
  });
  const onSubmit: SubmitHandler<FieldValues> = async ({ password, studentId, name, nickname }) => {
    try {
      const { data } = await signUpApi({ email, password, studentId, name, nickname });
      if (data.data.email) {
        setStep(1);
      }
    } catch (e: any) {
      const response = e.response as Response;
      if (!response) return;

      const {
        status,
        data: { message, code },
      } = response;
      console.error(message);
      console.error(code);

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
