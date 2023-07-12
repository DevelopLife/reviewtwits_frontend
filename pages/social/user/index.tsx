import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useUserProfile } from 'hooks/queries/users';
import SocialLayout from 'components/@feature/@social/Common/SocialLayout';
import { S as SocislTitleSectionStyles } from 'components/@feature/@social/Common/SocialTitleSection';
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
      <SocislTitleSectionStyles.SocialTitleSection>
        {''}
      </SocislTitleSectionStyles.SocialTitleSection>
    </SocialLayout>
  );
};

export default UserPage;
