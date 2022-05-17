import { CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { darkModes } from './darkModes';
import { CombineState } from './types';
import { users } from './users';

const rootReducer = (state: any, action: any): CombinedState<CombineState> => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    users: users.reducer,
    darkModes: darkModes.reducer,
  })(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
