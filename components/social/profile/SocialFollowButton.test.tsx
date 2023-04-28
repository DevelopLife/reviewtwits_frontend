import { render, screen, waitFor } from '@testing-library/react';

import SocialFollowButton from 'components/social/profile/SocialFollowButton';
import TestGlobalProvider from 'components/test/TestGlobalProvider';
import { FOLLOW } from 'constants/followAndUnFollow';

const mockNickname = 'test@test.com';

test('render SocialUnFollowButton', async () => {
  render(
    <TestGlobalProvider>
      <SocialFollowButton nickname={mockNickname} />
    </TestGlobalProvider>
  );

  await waitFor(() => {
    const buttonElement = screen.getByText(FOLLOW);

    expect(buttonElement).toBeInTheDocument();
  });
});
