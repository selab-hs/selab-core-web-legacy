/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import { Props } from '../Header/types';
import * as S from './style';

const DynamicHeader = ({ currentTab, setCurrentTab, menuArr }: Props) => {
  const timeOutId = useRef(0);
  const [show, setShow] = useState(true);
  const [noneTransitionShow, setNoneTransitionShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (!timeOutId.current) {
      timeOutId.current = window.setTimeout(() => {
        timeOutId.current = 0;
        // console.log(window.scrollY);
        if (window.scrollY < 145) {
          setNoneTransitionShow(true);
        } else {
          setNoneTransitionShow(true);
          if (window.scrollY > lastScrollY) {
            setShow(false);
          } else {
            setShow(true);
          }
        }
        setLastScrollY(window.scrollY);
      }, 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <S.HeaderWrapper show={show}>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} menuArr={menuArr} />
      </S.HeaderWrapper>
    </>
  );
};

export default DynamicHeader;
