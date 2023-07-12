import { useEffect } from 'react';

import { naverOauthAPI } from 'api/oauth';
import { SignInCard } from 'components/@feature/@user/SignIn/@index';
import Layout from 'components/@ui/Layout';

const SignInPage = () => {
  useEffect(() => {
    const token = location.hash?.split('=')[1]?.split('&')[0];
    if (!token) return;

    naverOauthAPI.getProfileNextAPI(token);
  }, []);

  return (
    <Layout color="gray">
      <SignInCard />
    </Layout>
  );
};

export default SignInPage;
