import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CLIENT_ERROR, SERVER_ERROR } from '../../../apis/constants';
import { Response } from '../../../apis/types';
import { logInApi } from '../../../apis/users';
import { LogInApiResponse, LogInParams } from '../../../apis/users/types';
import { UserState } from './types';

export const fetchUserLogIn = createAsyncThunk(
  'users/fetchUserLogIn',
  async ({ email, password }: LogInParams) => {
    try {
      const { data } = await logInApi({ email, password });
      return data;
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
  },
);

const users = createSlice({
  name: 'users',
  initialState: {
    token: '',
    isLoggedIn: false,
  } as UserState,
  reducers: {},
  extraReducers: {
    [fetchUserLogIn.fulfilled.type]: (
      state: UserState,
      action: PayloadAction<LogInApiResponse>,
    ) => {
      state.isLoggedIn = true;
      state.token = action.payload.data.token;
    },
  },
});

export default users.reducer;
