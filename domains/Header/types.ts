import { Dispatch, SetStateAction } from 'react';

export interface Props {
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number | null>>;
}
