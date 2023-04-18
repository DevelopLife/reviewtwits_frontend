import type { AppProps } from 'next/app';
import type { DehydratedState } from '@tanstack/react-query';

import ModalContainer from 'components/common/Modal/ModalContainer';
import GlobalProvider from 'components/common/GlobalProvider';

export default function App({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <GlobalProvider pageProps={pageProps}>
      <ModalContainer />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
