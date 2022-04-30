import '../styles/globals.css';
import React, { createContext, useEffect, useLayoutEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '../styles/global-styles';
import { theme } from '../styles';
import Header from '../components/Header';
import DynamicHeader from '../components/DynamicHeader';
import { useRouter } from 'next/router';
import { lightTheme, darkTheme, ColorTheme } from '../styles/theme';
import { useDarkMode } from '../hooks/useDarkMode';
import { wrapper } from '../stores';

interface ContextProps {
  colorTheme: ColorTheme;
  toggleColorTheme: () => void;
}

//contextX객체 생성
export const ThemeContext = createContext<ContextProps>({
  //테마와 테마를 변경하는 함수
  colorTheme: lightTheme,
  toggleColorTheme: () => {
    return null;
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [currentTab, setCurrentTab] = useState<number | null>(null);
  const { colorTheme, toggleColorTheme } = useDarkMode();

  const menuArr = [
    { link: '/', content: '홈' },
    { link: '/free-posts', content: '게시글' },
    { link: '/write', content: '글작성' },
  ];

  useEffect(() => {
    const { pathname } = route;
    const path = pathname.split('/')[1];
    if (path === undefined || path === '_error') {
      setCurrentTab(0);
    } else if (path === 'test') {
      setCurrentTab(1);
    } else if (path === 'write') {
      setCurrentTab(2);
    }
  }, [route]);

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
      <Global styles={GlobalStyle(colorTheme === lightTheme ? lightTheme : darkTheme)} />
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
    </ThemeContext.Provider>
  );
}

export default wrapper.withRedux(MyApp);
