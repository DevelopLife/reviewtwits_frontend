import SocialLayout from 'components/sns/common/SocialLayout';
import SocialTitleSection from 'components/sns/common/SocialTitleSection';
import SocialFeedSection from 'components/social/profile/SocialFeedSection';
import SocialProfileLayout from 'components/social/profile/SocialProfileLayout';
import { SocialProfileCard } from 'components/social/profile/SocialProfileCard';

const SocialProfilePage = () => {
  return (
    <SocialLayout>
      <SocialTitleSection>
        <SocialProfileLayout>
          <SocialProfileCard>profile</SocialProfileCard>
          <SocialFeedSection />
        </SocialProfileLayout>
      </SocialTitleSection>
    </SocialLayout>
  );
};

export default SocialProfilePage;
