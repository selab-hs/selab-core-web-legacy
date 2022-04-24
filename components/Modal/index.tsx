import ReactDOM from 'react-dom';
import BaseModal from './BaseModal';
import { useCreateElement } from './useCreateElement';
import { Props } from './types';

const Modal = ({ children, setIsModalOpen, isAway, ...props }: Props) => {
  const el = useCreateElement('portal-modal');

  return ReactDOM.createPortal(
    <BaseModal setIsModalOpen={setIsModalOpen} isAway={isAway} {...props}>
      {children}
    </BaseModal>,
    el,
  );
};
export default Modal;
