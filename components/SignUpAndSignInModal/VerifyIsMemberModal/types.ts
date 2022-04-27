import { Dispatch, SetStateAction } from 'react';

export interface Props {
  setStep: Dispatch<SetStateAction<number>>;
  setEmail: Dispatch<SetStateAction<string>>;
}
