import Layout from 'components/common/Layout';
import SocialMainLayout from 'components/social/Main/SocialMainLayout';
import SocialMainImage from 'components/social/Main/SocialMainImage';
import SignInCard from 'components/SignIn/SignInCard';

const SocialMainPage = () => {
  return (
    <Layout>
      <SocialMainLayout>
        <SignInCard />
        <SocialMainImage />
      </SocialMainLayout>
    </Layout>
  );
};

export default SocialMainPage;
