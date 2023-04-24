import useGetSocialProfile from 'hooks/useGetSocialProfile';
import useUserProfile from 'hooks/useUserProfile';
import { mockSocialProfile } from 'constants/mockSocialProfile';
import SocialProfileCardView from 'components/social/profile/SocialProfileCard/SocialProfileCardView';

const SocialMyProfileCard = () => {
  const isMyPage = true;

  const userData = useUserProfile();
  const { data: socialProfile, status } = useGetSocialProfile(
    userData?.nickname || ''
  );

  if (status === 'success' && socialProfile?.userId) {
    return (
      <SocialProfileCardView isMyPage={isMyPage} profile={socialProfile} />
    );
  }

  return (
    <SocialProfileCardView isMyPage={isMyPage} profile={mockSocialProfile} />
  );
};

export default SocialMyProfileCard;
