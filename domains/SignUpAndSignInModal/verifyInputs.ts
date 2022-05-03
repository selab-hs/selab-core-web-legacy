import * as yup from 'yup';

export const verifySignInInputs = yup.object().shape({
  password: yup.string().required('비밀번호를 입력해 주세요.'),
});

export const verifySignUpInputs = yup.object().shape({
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

export const verifyIsMemberInputs = yup.object().shape({
  email: yup.string().required('이메일을 입력해 주세요.').email('이메일 양식이 아닙니다.'),
});
