import { Props } from './types';
import * as S from './style';
import HeaderBtns from './HeaderBtns';
import SeLogo from './SeLogo';
import MenuTabs from './MenuTabs';

const Header = ({ currentTab, setCurrentTab, ...props }: Props) => {
  return (
    <S.HeaderWrapper {...props}>
      <S.Header>
        <SeLogo />
        <HeaderBtns currentTab={currentTab} />
        <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
