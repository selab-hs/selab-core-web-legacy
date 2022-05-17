import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

import { storage } from '@components/utils';
import { ACCESS_DENIED } from '@constants/api-constants';
import { SESSION_ID } from '@constants/user-constants';

export const useRouteGuard = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const path = router.pathname;
    if (path === '/') return;

    const isLogin = storage.get(SESSION_ID);
    if (!isLogin) {
      alert(ACCESS_DENIED);
      router.push('/');
    }
  }, [router]);
};
