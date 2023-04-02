import SocialLayout from 'components/sns/common/SocialLayout';
import SocialTitleSection from 'components/sns/common/SocialTitleSection';
import ChangeFollowListButton from 'components/social/Follower/ChangeFollowListButton';
import SocialList from 'components/social/Follower/SocialList';

const SocialFollowPage = () => {
  return (
    <SocialLayout>
      <SocialTitleSection title="팔로워 관리">
        <ChangeFollowListButton />
        <SocialList></SocialList>
      </SocialTitleSection>
    </SocialLayout>
  );
};

export default SocialFollowPage;
