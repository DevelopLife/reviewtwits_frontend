import { useRouter } from 'next/router';

import SocialLayout from 'components/Social/common/SocialLayout';
import SocialTitleSection from 'components/Social/common/SocialTitleSection';
import SocialProfileLayout from 'components/Social/profile/SocialProfileLayout';
import SocialAnotherUserProfileCard from 'components/Social/profile/SocialProfileCard/SocialAnotherUserProfileCard';
import SocialAnotherUserFeedSection from 'components/Social/profile/SocialFeedSection/SocialAnotherUserFeedSection';
import SocialMyProfileCard from 'components/Social/profile/SocialProfileCard/SocialMyProfileCard';
import SocialMyFeedSection from 'components/Social/profile/SocialFeedSection/SocialMyFeedSection';
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
