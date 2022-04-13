/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import { Props } from '../Header/types';
import * as S from './style';

const DynamicHeader = ({ currentTab, setCurrentTab, menuArr }: Props) => {
  const timeOutId = useRef(0);
  const [show, setShow] = useState(false);
  const [showTransition, setShowTransition] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const controlNavbar = () => {
      if (!timeOutId.current) {
        timeOutId.current = window.setTimeout(() => {
          timeOutId.current = 0;
          const curWidth = window.innerWidth;
          const curHeight = window.scrollY;

          // 스크롤이 변할때 동작하는 콜백함수.
          // windowSize.width와 window.innerWidth가 다르면, resize가 일어난것이다.
          // 이때는windowSize를 바뀐 scroll과 innerWidth로 변경하지만, Show는 유지한다.
          if (curWidth !== windowSize.width) {
            setWindowSize({ width: curWidth, height: curHeight });
            return;
          }
          if (window.scrollY < 145) {
            setShow(false);
            setWindowSize((prev) => ({ ...prev, height: curHeight }));
            setShowTransition(false);
            return;
          }
          curHeight > windowSize.height ? setShow(false) : setShow(true);
          setShowTransition(true);
          setWindowSize((prev) => ({ ...prev, height: curHeight }));
        }, 100);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    setWindowSize((prev) => ({ ...prev, width: window.innerWidth }));
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [windowSize]);

  return (
    <>
      <S.HeaderWrapper show={show} showTransition={showTransition}>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} menuArr={menuArr} />
      </S.HeaderWrapper>
    </>
  );
};

export default DynamicHeader;
