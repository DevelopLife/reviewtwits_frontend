import { useRouter } from 'next/router';

import { mockSocialProfile } from 'constants/mockSocialProfile';
import useGetSocialProfile from 'hooks/useGetSocialProfile';
import SocialProfileCardView from 'components/social/profile/SocialProfileCard/SocialProfileCardView';
import { useGetFollowingList } from 'hooks/queries/sns';
import useUserProfile from 'hooks/useUserProfile';

const SocialAnotherUserProfileCard = () => {
  const router = useRouter();
  const { query } = router;
  const { nickname } = query as { nickname: string };

  const isMypage = false;

  const { data: socialAnotherUserProfile, status } =
    useGetSocialProfile(nickname);
  const userData = useUserProfile();
  const { data } = useGetFollowingList(userData.accountId);

  const isFollowing = data?.data.some(
    ({ nickname: followingUserNickanme }) => followingUserNickanme === nickname
  );

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
