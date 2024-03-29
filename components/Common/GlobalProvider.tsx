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
import type { WrapProps } from 'typings/wrapperProps';
import { PageProps } from 'pages/_app';

interface GlobalProviderProps extends WrapProps {
  pageProps: PageProps;
}

const GlobalProvider = ({ children, pageProps }: GlobalProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default GlobalProvider;
