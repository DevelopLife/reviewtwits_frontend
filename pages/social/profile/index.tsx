import SocialLayout from 'components/sns/common/SocialLayout';
import SocialTitleSection from 'components/sns/common/SocialTitleSection';
import SocialFeedSection from 'components/social/profile/SocialFeedSection';

const SocialProfilePage = () => {
  return (
    <SocialLayout>
      <SocialTitleSection>
        <SocialFeedSection />
      </SocialTitleSection>
    </SocialLayout>
  );
};

export default SocialProfilePage;
