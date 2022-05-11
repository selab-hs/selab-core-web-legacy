import { MutableRefObject, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/modules';
import { DARK_MODE_VALUE } from '@constants/theme-constants';
import { FreePostType } from '@pages/free-posts/types';

export const useViewerDarkMode = (
  ref: MutableRefObject<HTMLDivElement | null>,
  freePost: FreePostType | null,
) => {
  const { mode } = useSelector((state: RootState) => state.darkModes);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (mode === DARK_MODE_VALUE.LIGHT) {
      return el.classList.remove('toastui-editor-dark');
    }
    el.classList.add('toastui-editor-dark');
  }, [mode, freePost]);
};
