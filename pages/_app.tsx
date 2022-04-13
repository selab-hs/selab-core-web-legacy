import '../styles/globals.css';
import React, { useLayoutEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles';
import Header from '../components/Header';
import DynamicHeader from '../components/DynamicHeader';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [currentTab, setCurrentTab] = useState<number | null>(null);

  const menuArr = [
    { link: '/', content: '홈' },
    { link: '/post/1', content: '게시글' },
    { link: '/write', content: '글작성' },
    { link: '/', content: '홈' },
    { link: '/post/1', content: '게시글' },
  ];

  useLayoutEffect(() => {
    const { pathname } = route;
    const path = pathname.split('/')[1];
    console.log(path);
    if (path === undefined || path === '_error') {
      setCurrentTab(0);
    } else if (path === 'post') {
      setCurrentTab(1);
    } else if (path === 'write') {
      setCurrentTab(2);
    }
  }, [route]);
  return (
    <ThemeProvider theme={theme}>
      {currentTab !== null && (
        <>
          <Header
            currentTab={currentTab as number}
            setCurrentTab={setCurrentTab}
            menuArr={menuArr}
          />
          <DynamicHeader
            currentTab={currentTab as number}
            setCurrentTab={setCurrentTab}
            menuArr={menuArr}
          />
        </>
      )}

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
