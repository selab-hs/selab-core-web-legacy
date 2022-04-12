import '../styles/globals.css';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles';
import Header from '../components/Header';
import DynamicHeader from '../components/DynamicHeader';
// import styled from '@emotion/styled';

// const ComponentWrapper = styled.div`
//   margin-top: 8.18rem;

//   @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
//     margin-top: 5.125rem;
//   }
// `;

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { link: '/', content: '홈' },
    { link: '/post/1', content: '게시글' },
    { link: '/write', content: '글작성' },
    { link: '/', content: '홈' },
    { link: '/post/1', content: '게시글' },
    { link: '/write', content: '글작성' },
    { link: '/', content: '홈' },
    { link: '/post/1', content: '게시글' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} menuArr={menuArr} />
      <DynamicHeader currentTab={currentTab} setCurrentTab={setCurrentTab} menuArr={menuArr} />
      {/* <ComponentWrapper> */}
      <Component {...pageProps} />
      {/* </ComponentWrapper> */}
    </ThemeProvider>
  );
}

export default MyApp;
