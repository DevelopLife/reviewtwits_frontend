import type { AppProps } from 'next/app';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
import { Global, ThemeProvider } from '@emotion/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';

import reset from 'styles/reset';
import theme from 'styles/theme';
import ModalContainer from 'components/common/Modal/ModalContainer';

import { validateMobile } from 'utils/validate';

export default function App({ Component, pageProps }: AppProps) {
  // TODO: consider setting defaultOptions
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = validateMobile(userAgent);
    const searchRoute = document.referrer;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <ModalContainer />
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
