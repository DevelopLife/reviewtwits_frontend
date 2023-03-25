import { useEffect } from 'react';

import { SignInForm } from 'components/signIn/@index';

import Layout from 'components/common/Layout';

const SignInPage = () => {
  useEffect(() => {
    const token = location.hash?.split('=')[1]?.split('&')[0];
    if (!token) return;
  }, []);

  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
};

export default SignInPage;
