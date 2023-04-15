import { useRouter } from 'next/router';

import { mockSocialProfile } from 'constants/mockSocialProfile';
import useGetSocialProfile from 'hooks/useGetSocialProfile';
import SocialProfileCardView from 'components/social/profile/SocialProfileCard/SocialProfileCardView';
import useGetIsFolliwng from 'hooks/useGetIsFollowing';

const SocialAnotherUserProfileCard = () => {
  const router = useRouter();
  const { query } = router;
  const { nickname } = query as { nickname: string };

  const { data: socialAnotherUserProfile, status } =
    useGetSocialProfile(nickname);

  const isMypage = false;
  const isFollowing = useGetIsFolliwng(nickname);

  if (status === 'success' && socialAnotherUserProfile?.userId) {
    return (
      <SocialProfileCardView
        isMyPage={isMypage}
        isFollowing={isFollowing}
        profile={socialAnotherUserProfile}
      />
    );
  }

  return (
    <SocialProfileCardView isMyPage={isMypage} profile={mockSocialProfile} />
  );
};

export default SocialAnotherUserProfileCard;
