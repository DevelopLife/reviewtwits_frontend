import { render, screen, waitFor } from '@testing-library/react';

import SocialFollowAndUnFollowButton from 'components/Social/Profile/SocialFollowAndUnfollowButton';
import TestGlobalProvider from 'components/Test/TestGlobalProvider';
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
