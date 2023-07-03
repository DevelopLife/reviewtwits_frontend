import SocialLayout from 'components/Social/Common/SocialLayout';
import SocialTitleSection from 'components/Social/Common/SocialTitleSection';
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
