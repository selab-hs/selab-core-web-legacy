import { storage } from '@components/utils';
import { LOGIN_CAN_USE_MENUS, NOT_LOGIN_CAN_USE_MENUS } from '@constants/menu-constants';
import { SESSION_ID } from '@constants/user-constants';
import { RootState } from '@stores/modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useSetMenuLists = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.users);
  const [menus, setMenus] = useState<[] | { link: string; content: string }[]>([]);

  useEffect(() => {
    const hasToken = !!storage.get(SESSION_ID);
    if (isLoggedIn !== hasToken) return;
    if (isLoggedIn) return setMenus(LOGIN_CAN_USE_MENUS);
    setMenus(NOT_LOGIN_CAN_USE_MENUS);
  }, [isLoggedIn]);

  return menus;
};
