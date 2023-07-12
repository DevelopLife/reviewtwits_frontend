import { useRouter } from 'next/router';

import SocialLayout from 'components/@feature/@social/Common/SocialLayout';
import SocialTitleSection from 'components/@feature/@social/Common/SocialTitleSection';
import SocialProfileLayout from 'components/@feature/@social/Profile/SocialProfileLayout';
import SocialAnotherUserProfileCard from 'components/@feature/@social/Profile/SocialProfileCard/SocialAnotherUserProfileCard';
import SocialAnotherUserFeedSection from 'components/@feature/@social/Profile/SocialFeedSection/SocialAnotherUserFeedSection';
import SocialMyProfileCard from 'components/@feature/@social/Profile/SocialProfileCard/SocialMyProfileCard';
import SocialMyFeedSection from 'components/@feature/@social/Profile/SocialFeedSection/SocialMyFeedSection';
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
