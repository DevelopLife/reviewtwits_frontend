import { useEffect } from 'react';

import { naverOauthAPI } from 'api/oauth';
import { SignInForm } from 'components/signIn/@index';

import Layout from 'components/common/Layout';

const SignInPage = () => {
  useEffect(() => {
    const token = location.hash?.split('=')[1]?.split('&')[0];
    if (!token) return;

    naverOauthAPI.getProfileNextAPI(token);
  }, []);

  return (
    <Layout color="gray">
      <SignInForm />
    </Layout>
  );
};

export default SignInPage;
