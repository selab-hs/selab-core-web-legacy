import { Dispatch, SetStateAction } from 'react';

export interface Props {
  children: React.ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isAway?: boolean;
}
