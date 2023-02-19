import type { AppProps } from 'next/app';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
import { Global } from '@emotion/react';
// only development
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

import '@/styles/globals.css';
import { useState } from 'react';
import reset from '@/styles/reset';

export default function App({ Component, pageProps }: AppProps) {
  // TODO: consider setting defaultOptions
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
