import React, { createContext } from 'react';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { lightTheme, ColorTheme } from '../styles/theme';
import { useDarkMode } from '../hooks/useDarkMode';
import { useHeaderTab } from './useHeaderTab';
import { useTheme } from './useTheme';
import { Header, DynamicHeader } from '@domains/index';
import { GlobalStyle } from '@styles/GlobalStyle';
import { wrapper } from '@stores/index';
import { useSetUserStoreToken } from './useSetUserStoreToken';

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
  const { colorTheme, toggleColorTheme } = useDarkMode();
  const [currentTab, setCurrentTab] = useHeaderTab();
  useSetUserStoreToken();

  const menuArr = [
    { link: '/', content: '홈' },
    { link: '/free-posts', content: '게시글' },
    { link: '/write', content: '글작성' },
  ];
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
      <Global styles={GlobalStyle(theme)} />
      <ThemeProvider theme={theme}>
        {currentTab !== null && (
          <>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} menuArr={menuArr} />
            <DynamicHeader
              currentTab={currentTab}
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
