import Link from 'next/link';
import { Props } from './types';
import * as S from './style';
import HeaderBtns from './HeaderBtns';

const Header = ({ currentTab, setCurrentTab, menuArr, ...props }: Props) => {
  return (
    <S.HeaderWrapper {...props}>
      <S.Header>
        <Link href={'/'}>
          <img src="/selab_logo.png" alt="selab-logo" />
        </Link>
        <HeaderBtns currentTab={currentTab} />
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
