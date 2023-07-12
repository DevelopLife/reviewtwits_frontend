import type { DehydratedState } from '@tanstack/react-query';

import GlobalProvider from 'components/@feature/@common/GlobalProvider';
import type { WrapProps } from 'typings/wrapperProps';

const mockDehydratedState: DehydratedState = {
  mutations: [],
  queries: [],
};

const mockPageProps: { dehydratedState: DehydratedState } = {
  dehydratedState: mockDehydratedState,
};

const TestGlobalProvider = ({ children }: WrapProps) => {
  return <GlobalProvider pageProps={mockPageProps}>{children}</GlobalProvider>;
};

export default TestGlobalProvider;
