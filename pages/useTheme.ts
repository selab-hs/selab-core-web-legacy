import { storage } from '@components/utils';
import { theme } from '@styles/index';
import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState(theme.light);
  const storedTheme = storage.get<string>('theme');

  useEffect(() => {
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      return;
    }
    return setSelectedTheme(theme[storedTheme]);
  }, [storedTheme]);

  return selectedTheme;
};
