import styled from '@emotion/styled';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

import { googleOauthAPI } from 'api/oauth';
import { doSignIn } from 'utils/auth';

import GoogleIconSVG from 'public/google_icon.svg';
import theme from 'styles/theme';
import { setCookie } from 'utils/cookies';

export const GoogleOauth = () => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      <GoogleLoginButton />
    </GoogleOAuthProvider>
  );
};

export const GoogleLoginButton = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      if (accessToken) {
        const loginResult = await googleOauthAPI.googleLogin(accessToken);

        if (loginResult?.status === 200) {
          doSignIn(loginResult.data.accessToken);

          return location.replace('/');
        }

        if (loginResult?.status === 202) {
          const { email, name } = loginResult.data;

          setCookie('email', email);
          setCookie('token', accessToken);
          setCookie('provider', 'GOOGLE');
          if (name) setCookie('name', name);

          return (location.href = '/sign-up');
        }
      }
    },
  });

  return <GoogleLoginButtonView onClick={() => googleLogin()} />;
};

interface CustomGoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButtonView = ({ onClick }: CustomGoogleLoginButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      <GoogleIconSVG />
    </S.Button>
  );
};

const S = {
  Button: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${theme.colors.gray_0};
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.03);

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
};
