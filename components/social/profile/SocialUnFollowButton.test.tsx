import { render, screen, waitFor } from '@testing-library/react';

import SocialUnFollowButton from 'components/social/profile/SocialUnFollowButton';
import TestGlobalProvider from 'components/test/TestGlobalProvider';
import { UN_FOLLOW } from 'constants/followAndUnFollow';

const mockNickname = 'test@test.com';

test('render SocialUnFollowButton', async () => {
  render(
    <TestGlobalProvider>
      <SocialUnFollowButton nickname={mockNickname} />
    </TestGlobalProvider>
  );

  await waitFor(() => {
    const buttonElement = screen.getByText(UN_FOLLOW);
    expect(buttonElement).toBeInTheDocument();
  });
});
