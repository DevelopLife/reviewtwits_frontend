import SocialLayout from 'components/@feature/@social/Common/SocialLayout';
import SocialTitleSection from 'components/@feature/@social/Common/SocialTitleSection';
import FollowerSection from 'components/@feature/@social/Follower';

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
