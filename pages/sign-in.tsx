import Head from 'next/head';
import { useEffect } from 'react';

import { naverOauthAPI } from 'api/oauth';
import { SignInForm } from 'components/signIn/@index';
import { KakaoSDKScript } from 'components/common/Oauth/KakaoOauth';
import { NaverSDKScript } from 'components/common/Oauth/NaverOauth';

import Layout from 'components/common/Layout';

const SignInPage = () => {
  useEffect(() => {
    const token = location.hash?.split('=')[1]?.split('&')[0];
    if (!token) return;

    naverOauthAPI.getProfileNextAPI(token);
  }, []);

  return (
    <Layout color="gray">
      <Head>
        <KakaoSDKScript />
        <NaverSDKScript />
      </Head>
      <SignInForm />
    </Layout>
  );
};

export default SignInPage;
