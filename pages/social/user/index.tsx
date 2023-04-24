import { useRouter } from 'next/router';
import { useEffect } from 'react';

import SocialLayout from 'components/sns/common/SocialLayout';
import { SocialTitleSection } from 'components/sns/common/SocialTitleSection.styles';
import useUserProfile from 'hooks/queries/users';

const UserPage = () => {
  const userProfile = useUserProfile();
  const router = useRouter();

  useEffect(() => {
    if (userProfile?.nickname) {
      router.replace(`/social/user/${userProfile?.nickname}`);
    }
  }, [router, userProfile]);

  return (
    <SocialLayout>
      <SocialTitleSection>{''}</SocialTitleSection>
    </SocialLayout>
  );
};

export default UserPage;
