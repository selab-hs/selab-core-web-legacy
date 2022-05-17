import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useHeaderTab = (): [number | null, Dispatch<SetStateAction<number | null>>] => {
  const route = useRouter();
  const [currentTab, setCurrentTab] = useState<number | null>(null);

  useEffect(() => {
    const { pathname } = route;
    const path = pathname.split('/')[1];
    if (path === 'free-posts') {
      setCurrentTab(1);
    } else if (path === 'write') {
      setCurrentTab(2);
    } else {
      setCurrentTab(0);
    }
  }, [route]);
  return [currentTab, setCurrentTab];
};
