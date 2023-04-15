import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import SocialFollowButton from 'components/social/profile/SocialFollowButton';

import { FOLLOW } from 'constants/followAndUnFollow';
import theme from 'styles/theme';

const mockTargetUserAccountId = 'test@test.com';
const queryClient = new QueryClient();

test('render SocialUnFollowButton', async () => {
  // TODO: create AllProvider
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SocialFollowButton targetUserAccountId={mockTargetUserAccountId} />
      </ThemeProvider>
    </QueryClientProvider>
  );

  // buttonElement가 정상적으로 렌더링 되는가
  await waitFor(() => {
    const buttonElement = screen.getByText(FOLLOW);

    expect(buttonElement).toBeInTheDocument();
  });
});
