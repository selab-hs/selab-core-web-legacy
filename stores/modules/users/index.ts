import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './types';
import { LogInParams, LogInApiResponse } from '@apis/users/types';
import { logInApi } from '@apis/users';
import { Response } from '@apis/types';
import { CLIENT_ERROR, SERVER_ERROR } from '@constants/api-constants';

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
      // console.error(message);
      // console.error(code);

      if (status === 401) {
        alert('아이디 혹은 비밀번호가 틀렸습니다.');
        return Promise.reject();
      }
      if (status >= 400) {
        alert(CLIENT_ERROR);
        return Promise.reject();
      }
      if (status >= 500) {
        alert(SERVER_ERROR);
        return Promise.reject();
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
    [fetchUserLogIn.rejected.type]: (state: UserState) => {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});

export default users.reducer;
