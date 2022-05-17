import { useEffect, useState } from 'react';
import { theme } from '@styles/index';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/modules';

export const useDarkModeTheme = () => {
  const [initialTheme, setInitialTheme] = useState(theme.light);
  const { mode } = useSelector((state: RootState) => state.darkModes);

  useEffect(() => {
    setInitialTheme(theme[mode]);
  }, [mode]);
  return initialTheme;
};
