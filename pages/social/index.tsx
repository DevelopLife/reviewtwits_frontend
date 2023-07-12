import SocialMainLayout from 'components/@feature/@social/Main/SocialMainLayout';
import SocialMainImage from 'components/@feature/@social/Main/SocialMainImage';
import SignInCard from 'components/@feature/@user/SignIn/SignInCard';
import Layout from 'components/@ui/Layout';

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
