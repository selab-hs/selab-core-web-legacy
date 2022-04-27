import { mediaQuery } from './mediaQuery';
import { colors } from './colors';

type ThemeType = typeof theme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

export const theme = {
  mediaQuery,
  colors,
} as const;
