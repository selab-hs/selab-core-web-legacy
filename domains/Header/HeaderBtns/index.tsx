import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import DarkModeToggle from './DarkModeToggleBtn';
import * as S from './style';
import { Props } from './types';
import { storage } from '@components/utils';
import SignUpAndSignInModal from '@domains/SignUpAndSignInModal';
import { useIsLoggedIn } from './useIsLoggedIn';
import { SESSION_ID } from '@constants/user-constants';
import { users } from '@stores/modules/users';
import WriteTabBtns from './WriteTabBtns';

const HeaderBtns = ({ currentTab }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn();

  const dispatch = useDispatch();

  const handleSignUpAndLogOutBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isLoggedIn) {
      storage.remove(SESSION_ID);
      setIsLoggedIn(undefined);
      return dispatch(users.actions.logOut());
    }
    setIsModalOpen(true);
  };

  return (
    <S.BtnWrapper currentTab={currentTab}>
      <DarkModeToggle />
      {currentTab === 2 && <WriteTabBtns />}
      {currentTab !== 2 && (
        <>
          <S.RightBtn onClick={handleSignUpAndLogOutBtn}>
            {isLoggedIn ? '로그아웃' : '회원가입 / 로그인'}
          </S.RightBtn>
          {isModalOpen && <SignUpAndSignInModal setIsModalOpen={setIsModalOpen} />}
        </>
      )}
    </S.BtnWrapper>
  );
};
export default HeaderBtns;
