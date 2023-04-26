import Layout from 'components/common/Layout';
import SocialMainLayout from 'components/social/main/SocialMainLayout';
import SocialMainImage from 'components/social/main/SocialMainImage';
import SignInForm from 'components/signIn/SignInForm';

const SocialMainPage = () => {
  return (
    <Layout>
      <SocialMainLayout>
        <SignInForm />
        <SocialMainImage />
      </SocialMainLayout>
    </Layout>
  );
};

export default SocialMainPage;
