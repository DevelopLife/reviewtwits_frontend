import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { matchers } from '@emotion/jest';

import theme from 'styles/theme';
import UserIcon from 'public/icons/user.svg';
import mockNextRouter from 'test/mockRouter';
import SocialProfileMenuItem from 'components/social/common/SocialProfileMenuItem';
import useUserProfile from 'hooks/useUserProfile';

const client = new QueryClient();
const TEST_NICKNAME = 'test_nickname';
const ProfileMenu = {
  test: 'Profile',
  Icon: UserIcon,
};

// emotion css 속성에 접근하기 위한 코드
expect.extend(matchers);

// Mock useUserProfile hook
jest.mock('hooks/useUserProfile');
const mockUseUserProfile = useUserProfile as jest.MockedFunction<
  typeof useUserProfile
>;

describe('SocialProfileMenuItem', () => {
  it('rendering', async () => {
    // Mock useRouter hook
    mockNextRouter({ query: { nickname: TEST_NICKNAME } });
    // Mock useUserProfile Return Value useQuery Success case
    mockUseUserProfile.mockReturnValue({ nickname: TEST_NICKNAME });

    render(
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <SocialProfileMenuItem>{ProfileMenu.test}</SocialProfileMenuItem>
        </ThemeProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const linkElement = screen.getByText(ProfileMenu.test);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('success api call case By useUserProfile', async () => {
    mockUseUserProfile.mockReturnValue({ nickname: TEST_NICKNAME });

    render(
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <SocialProfileMenuItem>{ProfileMenu.test}</SocialProfileMenuItem>
        </ThemeProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const linkElement = screen.getByText(ProfileMenu.test);
      expect(linkElement).toHaveAttribute(
        'href',
        `/social/user/${TEST_NICKNAME}`
      );
    });
  });

  it('fail api call case By useUserProfile', async () => {
    mockUseUserProfile.mockReturnValue(null);

    render(
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <SocialProfileMenuItem>{ProfileMenu.test}</SocialProfileMenuItem>
        </ThemeProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const linkElement = screen.getByText(ProfileMenu.test);
      expect(linkElement).toHaveAttribute('href', '');
    });
  });

  it('check actived background-color and color', async () => {
    mockNextRouter({ query: { nickname: TEST_NICKNAME } });
    mockUseUserProfile.mockReturnValue({ nickname: TEST_NICKNAME });

    render(
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <SocialProfileMenuItem>{ProfileMenu.test}</SocialProfileMenuItem>
        </ThemeProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const linkElement = screen.getByRole('listitem');

      expect(linkElement).toHaveStyleRule(
        'background-color',
        theme.colors.secondary + '3D'
      );
      expect(linkElement).toHaveStyleRule('color', theme.colors.secondary, {
        target: /a$/,
      });
    });
  });
});
