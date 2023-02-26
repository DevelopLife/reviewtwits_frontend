import { Global, ThemeProvider } from '@emotion/react';
import reset from '@/styles/reset';
import theme from '@/styles/theme';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

// figma의 image.png 사용을 위해서 임시적으로 작성
// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ),
});

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
