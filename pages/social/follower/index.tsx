import SocialLayout from 'components/social/common/SocialLayout';
import SocialTitleSection from 'components/social/common/SocialTitleSection';
import FollowerSection from 'components/social/Follower';

const SocialFollowPage = () => {
  return (
    <SocialLayout>
      <SocialTitleSection title="팔로워 관리">
        <FollowerSection />
      </SocialTitleSection>
    </SocialLayout>
  );
};

export default SocialFollowPage;
