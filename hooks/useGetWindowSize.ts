import { useEffect, useState } from 'react';

export const useGetWindowSize = () => {
  const [width, setWidth] = useState(Infinity);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler, { passive: true });
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return width;
};
