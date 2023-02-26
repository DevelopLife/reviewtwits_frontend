import styled from '@emotion/styled';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { googleOauth } from '@/api/oauth';
import Image from 'next/image';
import theme from '@/styles/theme';

import GoogleIconSVG from '@/public/google_icon.svg';

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
        await googleOauth.getProfile(accessToken);
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
      <Image width={35} height={35} src={GoogleIconSVG} alt={'google_icon'} />
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
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
};
