import { useClickAway } from '../../hooks/useClickAway';
import { usePreventScroll } from './usePreventScroll';
import { Dim, Wrapper } from './style';
import { MutableRefObject, useCallback } from 'react';
import { Props } from './types';

const BaseModal = ({ children, setIsModalOpen, isAway, ...props }: Props) => {
  usePreventScroll();

  const handleCloseBtn = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const ref = isAway ? useClickAway(handleCloseBtn) : null;

  return (
    <Dim>
      <Wrapper
        tabIndex={0}
        className="modal"
        ref={ref as MutableRefObject<HTMLDivElement>}
        {...props}
      >
        {children}
      </Wrapper>
    </Dim>
  );
};
export default BaseModal;
