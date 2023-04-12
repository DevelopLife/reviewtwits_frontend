import SocialLayout from 'components/sns/common/SocialLayout';
import SocialTitleSection from 'components/sns/common/SocialTitleSection';

import SocialProfileLayout from 'components/social/profile/SocialProfileLayout';
import SocialAnotherUserProfileCard from 'components/social/profile/SocialProfileCard/SocialAnotherUserProfileCard';
import SocialAnotherUserFeedSection from 'components/social/profile/SocialFeedSection/SocialAnotherUserFeedSection';
import { useRouter } from 'next/router';
import useUserProfile from 'hooks/useUserProfile';
import SocialMyProfileCard from 'components/social/profile/SocialProfileCard/SocialMyProfileCard';
import SocialMyFeedSection from 'components/social/profile/SocialFeedSection/SocialMyFeedSection';

const SocialUserFeedPage = () => {
  const router = useRouter();
  const { query } = router;
  const { nickname } = query as { nickname: string };

  const userProfile = useUserProfile();
  const isMyFeed = userProfile?.nickname === nickname;

  // TODO: consider not found user case

  if (!userProfile)
    return (
      <SocialLayout>
        <SocialTitleSection>{''}</SocialTitleSection>
      </SocialLayout>
    );

  return (
    <SocialLayout>
      <SocialTitleSection>
        <SocialProfileLayout>
          {isMyFeed ? (
            <>
              <SocialMyProfileCard />
              <SocialMyFeedSection />
            </>
          ) : (
            <>
              <SocialAnotherUserProfileCard />
              <SocialAnotherUserFeedSection />
            </>
          )}
        </SocialProfileLayout>
      </SocialTitleSection>
    </SocialLayout>
  );
};

export default SocialUserFeedPage;
