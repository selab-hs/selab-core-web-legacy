/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import { Props } from './types';
import * as S from './style';
import HeaderBtns from './HeaderBtns';
import { storage } from '@components/utils';

const Header = ({ currentTab, setCurrentTab, menuArr, ...props }: Props) => {
  return (
    <S.HeaderWrapper {...props}>
      <S.Header>
        <Link href={'/'}>
          <img
            src={storage.get('theme') === 'light' ? 'selab_logo.png' : 'selab_logo_w.png'}
            alt="selab-logo"
          />
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
