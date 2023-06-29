import { useRouter } from 'next/router';

import SocialLayout from 'components/social/common/SocialLayout';
import SocialTitleSection from 'components/social/common/SocialTitleSection';
import SocialProfileLayout from 'components/social/profile/SocialProfileLayout';
import SocialAnotherUserProfileCard from 'components/social/profile/SocialProfileCard/SocialAnotherUserProfileCard';
import SocialAnotherUserFeedSection from 'components/social/profile/SocialFeedSection/SocialAnotherUserFeedSection';
import SocialMyProfileCard from 'components/social/profile/SocialProfileCard/SocialMyProfileCard';
import SocialMyFeedSection from 'components/social/profile/SocialFeedSection/SocialMyFeedSection';
import { useUserProfile } from 'hooks/queries/users';
import useStoreagePathInSession from 'hooks/useStoreagePathInSession';

const SocialUserFeedPage = () => {
  const router = useRouter();
  const { query } = router;
  const { nickname } = query as { nickname: string };

  const userProfile = useUserProfile();
  const isMyFeed = userProfile?.nickname === nickname;

  useStoreagePathInSession();

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
