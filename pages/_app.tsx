import React from 'react';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import { useHeaderTab } from './useHeaderTab';
import { Header, DynamicHeader } from '@domains/index';
import { GlobalStyle } from '@styles/GlobalStyle';
import { wrapper } from '@stores/index';
import { useSetUserStoreToken } from './useSetUserStoreToken';
import { useDarkModeTheme } from './useDarkModeTheme';
import { MENUS } from '@constants/menu-constants';

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTab, setCurrentTab] = useHeaderTab();
  const theme = useDarkModeTheme();

  useSetUserStoreToken();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle(theme)} />
      {currentTab !== null && (
        <>
          <Header currentTab={currentTab} setCurrentTab={setCurrentTab} menuArr={MENUS} />
          <DynamicHeader currentTab={currentTab} setCurrentTab={setCurrentTab} menuArr={MENUS} />
        </>
      )}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
