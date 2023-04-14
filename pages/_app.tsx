import type { AppProps } from 'next/app';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
import { Global, ThemeProvider } from '@emotion/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { useState } from 'react';

import reset from 'styles/reset';
import theme from 'styles/theme';

import PrivateRoute from 'components/common/PrivateRoute';
import ModalContainer from 'components/common/Modal/ModalContainer';

export default function App({ Component, pageProps }: AppProps) {
  // TODO: consider setting defaultOptions
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <PrivateRoute>
              <>
                <ModalContainer />
                <Component {...pageProps} />
              </>
            </PrivateRoute>
          </RecoilRoot>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
