/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import { Props } from '../Header/types';

const DynamicHeader = ({ currentTab, setCurrentTab, menuArr }: Props) => {
  const timeOutId = useRef(0);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (!timeOutId.current) {
      timeOutId.current = window.setTimeout(() => {
        timeOutId.current = 0;
        console.log(window.scrollY);
        if (window.scrollY < 151 || window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
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
      {show && (
        <Header
          style={{ position: 'fixed', top: '0', right: '0', left: '0', zIndex: '10' }}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          menuArr={menuArr}
        />
      )}
    </>
  );
};

export default DynamicHeader;
