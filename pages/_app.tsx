import type { AppProps } from 'next/app';
import type { DehydratedState } from '@tanstack/react-query';

import ModalContainer from 'components/common/Modal/ModalContainer';
import GlobalProvider from 'components/common/GlobalProvider';
import PrivateRoute from 'components/common/PrivateRoute';

export type PageProps = {
  dehydratedState?: DehydratedState;
  statusCode?: number;
};

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <GlobalProvider pageProps={pageProps}>
      <PrivateRoute pageProps={pageProps}>
        <ModalContainer />
        <Component {...pageProps} />
      </PrivateRoute>
    </GlobalProvider>
  );
}
