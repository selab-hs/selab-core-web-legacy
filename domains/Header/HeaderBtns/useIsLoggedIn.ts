import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { storage } from '@components/utils';
import { SESSION_ID } from '@constants/user-constants';

export const useLogInState = (): [
  undefined | string,
  Dispatch<SetStateAction<undefined | string>>,
] => {
  const token = storage.get<string>(SESSION_ID);
  const [isLoggedIn, setIsLoggedIn] = useState(token);

  useEffect(() => {
    if (!token) return setIsLoggedIn(undefined);
    setIsLoggedIn(token);
  }, [token]);

  return [isLoggedIn, setIsLoggedIn];
};
