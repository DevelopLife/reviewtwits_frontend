import MainContentSection from 'components/social/feed/MainContentSection';
import UserFilterBar from 'components/social/feed/UserFilterBar';
import SideBar from 'components/social/feed/SideBar';

const SNSHomePage = () => {
  return (
    <div>
      <UserFilterBar />
      <MainContentSection />
      <SideBar />
    </div>
  );
};

export default SNSHomePage;
