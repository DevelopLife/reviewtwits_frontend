// import type { DehydratedState } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
// import GlobalProvider from 'components/common/GlobalProvider';
import SocialFollowButton from 'components/social/profile/SocialFollowButton';
import TestGlobalProvider from 'components/test/TestGlobalProvider';

import { FOLLOW } from 'constants/followAndUnFollow';

const mockTargetUserAccountId = 'test@test.com';

test('render SocialUnFollowButton', async () => {
  // TODO: create AllProvider
  render(
    <TestGlobalProvider>
      <SocialFollowButton targetUserAccountId={mockTargetUserAccountId} />
    </TestGlobalProvider>
  );

  // buttonElement가 정상적으로 렌더링 되는가
  await waitFor(() => {
    const buttonElement = screen.getByText(FOLLOW);

    expect(buttonElement).toBeInTheDocument();
  });
});
