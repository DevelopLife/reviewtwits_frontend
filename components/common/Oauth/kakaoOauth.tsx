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
      <Image src={KakaoIcon} width={60} height={60} alt="kakao_icon" />
    </S.Button>
  );
};

const S = {
  Button: styled.div``,
};
