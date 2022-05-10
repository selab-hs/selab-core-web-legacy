import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@stores/modules';
import { DARK_MODE_VALUE } from '@constants/theme-constants';

export const useEditorDarkMode = () => {
  const { mode } = useSelector((state: RootState) => state.darkModes);

  useEffect(() => {
    const mdTabContainer = document.querySelector(
      '.toastui-editor-md-tab-container',
    ) as HTMLElement;
    const el = document.querySelector('.toastui-editor-defaultUI') as HTMLElement;

    if (mode === DARK_MODE_VALUE.LIGHT) {
      el.classList.remove('toastui-editor-dark');
      mdTabContainer.style.background = '#fdfdff';
      mdTabContainer.style.borderBottomColor = '#fdfdff';
      return;
    }
    el.classList.add('toastui-editor-dark');
    mdTabContainer.style.background = 'rgb(35, 36, 40)';
    mdTabContainer.style.borderBottomColor = 'rgb(35, 36, 40)';
  }, [mode]);
};
