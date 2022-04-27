import { Dispatch, SetStateAction } from 'react';

export interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  email: string;
}
