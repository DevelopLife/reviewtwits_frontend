import SocialLayout from 'components/Social/common/SocialLayout';
import SocialTitleSection from 'components/Social/common/SocialTitleSection';
import FollowerSection from 'components/Social/Follower';

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
