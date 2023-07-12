import type { AppProps } from 'next/app';
import type { DehydratedState } from '@tanstack/react-query';

import ModalContainer from 'components/@ui/Modal/ModalContainer';
import GlobalProvider from 'components/@feature/@common/GlobalProvider';
import PrivateRoute from 'components/@feature/@common/PrivateRoute';
import ReportUserStatistics from 'components/@feature/@shopping/Statistics/ReportUserStatistics';

export type PageProps = {
  dehydratedState?: DehydratedState;
  statusCode?: number;
};

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <GlobalProvider pageProps={pageProps}>
      <PrivateRoute pageProps={pageProps}>
        <ReportUserStatistics />
        <ModalContainer />
        <Component {...pageProps} />
      </PrivateRoute>
    </GlobalProvider>
  );
}
