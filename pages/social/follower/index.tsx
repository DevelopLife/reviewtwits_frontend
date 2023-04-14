import SocialLayout from 'components/sns/common/SocialLayout';
import SocialTitleSection from 'components/sns/common/SocialTitleSection';
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
