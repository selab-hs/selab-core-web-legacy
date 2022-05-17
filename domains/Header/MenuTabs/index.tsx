import Link from 'next/link';

import * as S from '../style';
import { Props } from '../types';
import { useSetMenuLists } from './useSetMenuLists';

const MenuTabs = ({ currentTab, setCurrentTab }: Props) => {
  const menus = useSetMenuLists();

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
