import { useRouter } from 'next/router';

import { mockSocialProfile } from 'constants/mockSocialProfile';
import useGetSocialProfile from 'hooks/useGetSocialProfile';
import SocialProfileCardView from 'components/social/profile/SocialProfileCard/SocialProfileCardView';

const SocialAnotherUserProfileCard = () => {
  const router = useRouter();
  const { query } = router;
  const { nickname } = query as { nickname: string };

  const isMypage = false;

  const { data: socialAnotherUserProfile, status } =
    useGetSocialProfile(nickname);

  if (status === 'success' && socialAnotherUserProfile?.userId) {
    return (
      <SocialProfileCardView
        isMyPage={isMypage}
        profile={socialAnotherUserProfile}
      />
    );
  }

  return (
    <SocialProfileCardView isMyPage={isMypage} profile={mockSocialProfile} />
  );
};

export default SocialAnotherUserProfileCard;
