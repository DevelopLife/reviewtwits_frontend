import { render, screen, waitFor } from '@testing-library/react';

import SocialUnFollowButton from 'components/social/profile/SocialUnFollowButton';
import TestGlobalProvider from 'components/test/TestGlobalProvider';
import { UN_FOLLOW } from 'constants/followAndUnFollow';

const mockTargetUserAccountId = 'test@test.com';

test('render SocialUnFollowButton', async () => {
  // TODO: create AllProvider
  render(
    <TestGlobalProvider>
      <SocialUnFollowButton targetUserAccountId={mockTargetUserAccountId} />
    </TestGlobalProvider>
  );

  // buttonElement가 정상적으로 렌더링 되는가
  await waitFor(() => {
    const buttonElement = screen.getByText(UN_FOLLOW);
    expect(buttonElement).toBeInTheDocument();
  });
});
