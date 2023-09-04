import { useRouter } from 'next/router';

import { mockSocialProfile } from 'constants/mockSocialProfile';
import SocialProfileCardView from 'components/Social/Profile/SocialProfileCard/SocialProfileCardView';
import { useGetSocialProfile } from 'hooks/queries/sns';

const SocialAnotherUserProfileCard = () => {
  const router = useRouter();
  const { query } = router;
  const { nickname } = query as { nickname: string };

  const { data: socialAnotherUserProfile, status } =
    useGetSocialProfile(nickname);

  const isMypage = false;
  const FOLLOW_BUTTON_TEXT_LIST: [string, string] = ['UnFollow', 'Follow'];

  if (status === 'loading') {
    return <>사용자를 찾는 중입니다...</>;
  }

  if (status === 'error' && socialAnotherUserProfile === undefined) {
    router.push('/404');
  }

  if (status === 'success' && socialAnotherUserProfile?.userId) {
    return (
      <SocialProfileCardView
        isMyPage={isMypage}
        followButtonTextList={FOLLOW_BUTTON_TEXT_LIST}
        profile={socialAnotherUserProfile}
      />
    );
  }

  return (
    <SocialProfileCardView
      isMyPage={isMypage}
      profile={mockSocialProfile}
      followButtonTextList={FOLLOW_BUTTON_TEXT_LIST}
    />
  );
};

export default SocialAnotherUserProfileCard;
