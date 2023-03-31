import SocialLayout from 'components/sns/common/SocialLayout';
import MainContentSection from 'components/social/feed/MainContentSection';
import UserFilterBar from 'components/social/feed/UserFilterBar';
import SideBar from 'components/social/feed/SideBar';

const SNSExplorePage = () => {
  return (
    <SocialLayout>
      <UserFilterBar />
      <MainContentSection />
      <SideBar />
    </SocialLayout>
  );
};

export default SNSExplorePage;
