import type { NextRouter } from 'next/router';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const mockUseNextRouter = useRouter;

export function createMockRouter(overrides: Partial<NextRouter>) {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    isPreview: false,
    ...overrides,
  };
}

/**
 * Mock the `useRouter()` hook and return the mocked router instance.
 */
export default function mockNextRouter(overrides: Partial<NextRouter> = {}) {
  const mockRouter = createMockRouter(overrides);
  mockUseNextRouter.mockReturnValue(mockRouter);
  return mockRouter;
}
