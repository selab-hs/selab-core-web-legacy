import { Dispatch, SetStateAction } from 'react';

export interface Props {
  email: string;
  setStep: Dispatch<SetStateAction<number>>;
}
