import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { storage } from '@components/utils';
import { SESSION_ID } from '@constants/user-constants';

export const useIsLoggedIn = (): [
  undefined | boolean,
  Dispatch<SetStateAction<undefined | boolean>>,
] => {
  const token = storage.get<string>(SESSION_ID);
  const isTokenExist = token !== undefined;
  const [isLoggedIn, setIsLoggedIn] = useState<undefined | boolean>(isTokenExist);

  useEffect(() => {
    if (!token) return setIsLoggedIn(undefined);
    setIsLoggedIn(true);
  }, [token]);

  return [isLoggedIn, setIsLoggedIn];
};
