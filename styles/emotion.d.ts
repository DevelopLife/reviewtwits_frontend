import '@emotion/react';
import theme from './theme';

type ExtendTheme = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ExtendTheme {}
}
