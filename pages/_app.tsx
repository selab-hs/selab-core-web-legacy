import React from 'react';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyle } from '@styles/GlobalStyle';
import { wrapper } from '@stores/index';
import { useDarkModeTheme } from '../domains/pages/useDarkModeTheme';
import Header from '@domains/Header';
import DynamicHeader from '@domains/DynamicHeader';
import { useHeaderTab } from '@domains/pages/useHeaderTab';
import { useSetUserStoreToken } from '@domains/pages/useSetUserStoreToken';
import { useRouteGuard } from '@domains/pages/useRouteGuard';

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTab, setCurrentTab] = useHeaderTab();
  const theme = useDarkModeTheme();

  useSetUserStoreToken();
  useRouteGuard();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle(theme)} />
      {currentTab !== null && (
        <>
          <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <DynamicHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </>
      )}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
