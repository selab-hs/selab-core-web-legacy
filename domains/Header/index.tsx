import Link from 'next/link';
import { Props } from './types';
import * as S from './style';
import HeaderBtns from './HeaderBtns';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/_app';
import { lightTheme } from '../../styles/theme';

const Header = ({ currentTab, setCurrentTab, menuArr, ...props }: Props) => {
  const { colorTheme } = useContext(ThemeContext);

  return (
    <S.HeaderWrapper {...props} colorTheme={colorTheme}>
      <S.Header>
        <Link href={'/'}>
          <img
            src={colorTheme === lightTheme ? 'selab_logo.png' : 'selab_logo_w.png'}
            alt="selab-logo"
          />
        </Link>
        <HeaderBtns currentTab={currentTab} />
        <nav>
          <S.Ul colorTheme={colorTheme}>
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
