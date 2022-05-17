import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useRouter } from 'next/router';

import { storage } from '@components/utils';
import { SESSION_ID } from '@constants/user-constants';
import { users } from '@stores/modules/users';
import { useIsLoggedIn } from '../useIsLoggedIn';
import * as S from '../style';
import SignUpAndSignInModal from '@domains/SignUpAndSignInModal';

const NormalTabBtns = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignUpAndLogOutBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isLoggedIn) {
      storage.remove(SESSION_ID);
      setIsLoggedIn(undefined);
      dispatch(users.actions.logOut());
      return router.push('/');
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <S.RightBtn onClick={handleSignUpAndLogOutBtn}>
        {isLoggedIn ? '로그아웃' : '회원가입 / 로그인'}
      </S.RightBtn>
      {isModalOpen && <SignUpAndSignInModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};
export default NormalTabBtns;
