import { useEffect, useLayoutEffect, useState } from 'react';

export const useGetWindowSize = () => {
  const [width, setWidth] = useState(Infinity);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!window) return;
    window.addEventListener('resize', resizeHandler, { passive: true });
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  useLayoutEffect(() => {
    if (!window) return;
    width === Infinity && setWidth(window.innerWidth);
  }, [width]);

  return width;
};
