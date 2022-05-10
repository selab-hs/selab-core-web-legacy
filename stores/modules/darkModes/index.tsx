import { createSlice } from '@reduxjs/toolkit';

import { storage } from '@components/utils';
import { DARK_MODE_KEY, DARK_MODE_VALUE } from '@constants/theme-constants';
import { DarkModesState } from './types';

export const darkModes = createSlice({
  name: 'darkModes',
  initialState: {
    mode: storage.get<Pick<DarkModesState, 'mode'>>(DARK_MODE_KEY) || DARK_MODE_VALUE.LIGHT,
  } as DarkModesState,
  reducers: {
    toggleDarkModes: (state: DarkModesState) => {
      state.mode =
        state.mode === DARK_MODE_VALUE.LIGHT ? DARK_MODE_VALUE.DARK : DARK_MODE_VALUE.LIGHT;
    },
  },
});
