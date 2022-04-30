import { AnyAction, CombinedState, combineReducers, Reducer, Slice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { CombineState } from './types';
import users from './users';
import { UserState } from './users/types';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

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

export default persistReducer(persistConfig, rootReducer);
