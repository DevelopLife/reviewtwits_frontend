import { Global, ThemeProvider } from '@emotion/react';
import reset from '/styles/reset';
import theme from '/styles/theme';

export const decorators = [
  (Story) => (
    <>
      <Global styles={reset} />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
