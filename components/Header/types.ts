import { Dispatch, SetStateAction } from 'react';

export interface Props {
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
  menuArr: {
    link: string;
    content: string;
  }[];
  [x: string]: any;
}
