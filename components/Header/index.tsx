/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as S from './style';

const Header = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [tmpScroll, setTmpScroll] = useState(lastScrollY);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      return setLastScrollY(tmpScroll);
    }, 15);
    return () => clearTimeout(debounce);
  }, [tmpScroll]);

  const controlNavbar = () => setTmpScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

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
    <S.HeaderWrapper style={{ display: show ? 'block' : 'none' }}>
      <S.Header>
        <Link href={'/'}>
          <img src="/selab_logo.png" alt="selab-logo" />
        </Link>
        <S.BtnWrapper>
          <S.LogInBtn>로그인</S.LogInBtn>
          <S.SignUpBtn>회원가입</S.SignUpBtn>
        </S.BtnWrapper>
        <nav>
          <S.Ul>
            {menuArr.map((menu, index) => (
              <li
                key={index}
                className={currentTab === index ? 'focused' : ''}
                onClick={() => setCurrentTab(index)}
              >
                <Link href={menu.link}>{menu.content}</Link>
              </li>
            ))}
          </S.Ul>
        </nav>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
