import Layout from 'components/common/Layout';
import SocialMainLayout from 'components/social/main/SocialMainLayout';
import SocialMainImage from 'components/social/main/SocialMainImage';
import SignInCard from 'components/signIn/SignInCard';

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
