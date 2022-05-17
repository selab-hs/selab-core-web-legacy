import { storage } from '@components/utils';
import { SESSION_ID } from '@constants/user-constants';
import { users } from '@stores/modules/users';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useSetUserStoreToken = () => {
  const dispatch = useDispatch();
  const token = storage.get<string>(SESSION_ID);

  const setUserStoreWithToken = () => {
    if (!token) return dispatch(users.actions.logOut());

    dispatch(users.actions.logInWhenReload(token));
  };

  useEffect(() => {
    window.addEventListener('load', setUserStoreWithToken);
    return () => window.removeEventListener('load', setUserStoreWithToken);
  }, []);
};
