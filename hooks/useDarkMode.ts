import { storage } from '@components/utils';
import { useEffect, useState } from 'react';
import { lightTheme, darkTheme, ColorTheme } from '../styles/theme';

export const useDarkMode = () => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(lightTheme);

  const setMode = (mode: ColorTheme) => {
    mode === lightTheme ? storage.set('theme', 'light') : storage.set('theme', 'dark');
    setColorTheme(mode);
  };

  const toggleColorTheme = () => {
    colorTheme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme !== null) {
      if (localTheme === 'dark') {
        setColorTheme(darkTheme);
      } else {
        setColorTheme(lightTheme);
      }
    }
  }, []);

  return { colorTheme, toggleColorTheme };
};
