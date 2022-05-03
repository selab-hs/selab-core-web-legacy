import { storage } from '@components/utils';
import { SESSION_ID } from '@constants/user-constants';
import { RootState } from '@stores/modules';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useUpdateToken = (setIsModalOpen: Dispatch<SetStateAction<boolean>>) => {
  const router = useRouter();
  const { isLoggedIn, token } = useSelector((state: RootState) => state.users);
  useEffect(() => {
    if (!isLoggedIn) return;

    storage.set(SESSION_ID, token);
    setIsModalOpen(false);
    router.push('/');
  }, [isLoggedIn, token]);
};
