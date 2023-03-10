import Image from 'next/image';
import styled from '@emotion/styled';

import KakaoIcon from 'public/images/kakao_icon.svg';

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
