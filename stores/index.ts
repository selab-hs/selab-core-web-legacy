import { configureStore } from '@reduxjs/toolkit';
import users from './users';

export const store = configureStore({
  reducer: {
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;
