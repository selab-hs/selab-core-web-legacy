import DarkModeToggle from './DarkModeToggleBtn';
import NormalTabBtns from './NormalTabBtns';
import * as S from './style';
import { Props } from './types';
import WriteTabBtns from './WriteTabBtns';

const HeaderBtns = ({ currentTab }: Props) => {
  return (
    <S.BtnWrapper currentTab={currentTab}>
      <DarkModeToggle />
      {currentTab === 2 && <WriteTabBtns />}
      {currentTab !== 2 && <NormalTabBtns />}
    </S.BtnWrapper>
  );
};
export default HeaderBtns;
