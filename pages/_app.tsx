import type { AppProps } from 'next/app';
import type { DehydratedState } from '@tanstack/react-query';

import ModalContainer from 'components/Common/Modal/ModalContainer';
import GlobalProvider from 'components/Common/GlobalProvider';
import PrivateRoute from 'components/Common/PrivateRoute';
import ReportUserStatistics from 'components/Statistics/ReportUserStatistics';

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
