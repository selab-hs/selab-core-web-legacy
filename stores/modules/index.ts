import { CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { CombineState } from './types';
import users from './users';

const rootReducer = (state: any, action: any): CombinedState<CombineState> => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    users,
  })(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
