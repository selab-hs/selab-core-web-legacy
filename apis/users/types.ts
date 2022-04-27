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

export interface LogInParams {
  email: string;
  password: string;
}
export interface LogInApiResponse {
  data: {
    email: string;
    token: string;
  };
}
