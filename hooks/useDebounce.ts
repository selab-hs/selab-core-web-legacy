import { useEffect, useRef } from 'react';

export const useDebounce = <T>(fn: T, ms: number) => {
  const timeoutId = useRef(0);

  useEffect(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  const callback = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    if (typeof fn !== 'function') return;

    timeoutId.current = window.setTimeout(fn, ms);
  };
  return callback;
};
