import { mediaQuery } from './mediaQuery';
import { colors } from './colors';

interface ThemeType {
  mediaQuery: typeof mediaQuery;
  colors: typeof colors.light;
}

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

export const theme = {
  light: {
    mediaQuery,
    colors: colors.light,
  },
  dark: {
    mediaQuery,
    colors: colors.dark,
  },
} as const;
