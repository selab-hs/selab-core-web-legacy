import { mediaQuery } from './mediaQuery';

type ThemeType = typeof theme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

export const theme = {
  mediaQuery,
} as const;
