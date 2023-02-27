import Image from 'next/image';
import styled from '@emotion/styled';

import KakaoIcon from 'public/images/kakao_icon.svg';

export const KakaoOauth = () => {
  return <KakaoLoginButton />;
};

export const KakaoLoginButton = () => {
  function loginWithKakao() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  }

  return <KakaoLoginButtonView handleClick={loginWithKakao} />;
};

interface KakaoLoginButtonViewProps {
  handleClick: () => void;
}

const KakaoLoginButtonView = ({ handleClick }: KakaoLoginButtonViewProps) => {
  return (
    <S.Button id="kakao-login-btn" onClick={handleClick}>
      <Image src={KakaoIcon} width={80} height={80} alt="kakao_icon" />
    </S.Button>
  );
};

export const KakaoSDKScript = () => {
  return (
    <script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
      integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
      crossOrigin="anonymous"
      async
    />
  );
};

const S = {
  Button: styled.div``,
};
