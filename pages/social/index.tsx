import Layout from 'components/Common/Layout';
import SocialMainLayout from 'components/Social/Main/SocialMainLayout';
import SocialMainImage from 'components/Social/Main/SocialMainImage';
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
