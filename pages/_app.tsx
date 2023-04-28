import type { AppProps } from 'next/app';
import type { DehydratedState } from '@tanstack/react-query';

import ModalContainer from 'components/common/Modal/ModalContainer';

export default function App({ Component, pageProps }: AppProps) {
  // TODO: consider setting defaultOptions
  const [queryClient] = useState(() => new QueryClient());

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
