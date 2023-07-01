import Layout from 'components/common/Layout';
import SocialMainLayout from 'components/Social/main/SocialMainLayout';
import SocialMainImage from 'components/Social/main/SocialMainImage';
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
