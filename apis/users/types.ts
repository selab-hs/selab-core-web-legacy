export interface SignUpApiParams {
  email: string;
  password: string;
  studentId: string;
  name: string;
  nickname: string;
}

export interface SignUpApiResponse {
  data: {
    email: string;
  };
}
