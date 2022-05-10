import { useSelector } from 'react-redux';
import Link from 'next/link';

import * as S from '../style';
import { RootState } from '@stores/modules';
import { LOGIN_CAN_USE_MENUS, NOT_LOGIN_CAN_USE_MENUS } from '@constants/menu-constants';
import { Props } from '../types';

const MenuTabs = ({ currentTab, setCurrentTab }: Props) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.users);
  const menus = isLoggedIn ? LOGIN_CAN_USE_MENUS : NOT_LOGIN_CAN_USE_MENUS;

  return (
    <nav>
      <S.Ul>
        {menus.map((menu, index) => (
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
  );
};
export default MenuTabs;
