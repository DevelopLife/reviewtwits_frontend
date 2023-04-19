import { Global, ThemeProvider } from '@emotion/react';
import reset from '/styles/reset';
import theme from '/styles/theme';
import * as NextImage from 'next/image';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

const OriginalNextImage = NextImage.default;
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={reset} />
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
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
