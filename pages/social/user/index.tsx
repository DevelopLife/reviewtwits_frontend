import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useUserProfile } from 'hooks/queries/users';
import SocialLayout from 'components/social/common/SocialLayout';
import { SocialTitleSection } from 'components/social/common/SocialTitleSection.styles';
import { PAGE_LIST } from 'constants/routers';

const UserPage = () => {
  const userProfile = useUserProfile();
  const router = useRouter();

  useEffect(() => {
    if (userProfile?.nickname) {
      router.replace(`${PAGE_LIST.SOCIAL_PROFILE}/${userProfile?.nickname}`);
    }
  }, [router, userProfile]);

  return (
    <SocialLayout>
      <SocialTitleSection>{''}</SocialTitleSection>
    </SocialLayout>
  );
};

export default UserPage;
