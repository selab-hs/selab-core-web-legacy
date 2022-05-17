import { useDispatch, useSelector } from 'react-redux';

import { darkModes } from '@stores/modules/darkModes';
import { ToggleButton } from './styles';
import { RootState } from '@stores/modules';
import { storage } from '@components/utils';
import { DARK_MODE_KEY, DARK_MODE_VALUE } from '@constants/theme-constants';

const DarkModeToggleBtn = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootState) => state.darkModes);

  const handleToggleBtnClick = () => {
    dispatch(darkModes.actions.toggleDarkModes());
    const nextTheme = mode === DARK_MODE_VALUE.DARK ? DARK_MODE_VALUE.LIGHT : DARK_MODE_VALUE.DARK;
    storage.set(DARK_MODE_KEY, nextTheme);
  };

  return (
    <ToggleButton onClick={handleToggleBtnClick}>
      {mode === DARK_MODE_VALUE.LIGHT ? '라이트 모드' : '다크 모드'}
    </ToggleButton>
  );
};
export default DarkModeToggleBtn;
