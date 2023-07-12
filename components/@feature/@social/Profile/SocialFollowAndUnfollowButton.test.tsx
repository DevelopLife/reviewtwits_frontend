import { render, screen, waitFor } from '@testing-library/react';

import SocialFollowAndUnFollowButton from 'components/@feature/@social/Profile/SocialFollowAndUnfollowButton';
import TestGlobalProvider from 'tests/TestGlobalProvider';
import { FOLLOW } from 'constants/followAndUnFollow';

const mockNickname = 'test@test.com';

test('render SocialUnFollowButton', async () => {
  render(
    <TestGlobalProvider>
      <SocialFollowAndUnFollowButton
        nickname={mockNickname}
        size={'normal'}
        TextList={['unfollow', 'follow']}
      />
    </TestGlobalProvider>
  );

  await waitFor(() => {
    const buttonElement = screen.getByText(FOLLOW);

    expect(buttonElement).toBeInTheDocument();
  });
});
