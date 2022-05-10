import { createSlice } from '@reduxjs/toolkit';
import { DarkModesState } from './types';

export const darkModes = createSlice({
  name: 'darkModes',
  initialState: {
    mode: 'light',
  } as DarkModesState,
  reducers: {
    toggleDarkModes: (state: DarkModesState) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});
