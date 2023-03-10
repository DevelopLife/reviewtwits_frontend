import Image from 'next/image';
import styled from '@emotion/styled';

import GoogleIconSVG from 'public/google_icon.svg';
import { googleOauthAPI } from 'api/oauth';
import theme from 'styles/theme';

export const GoogleOauth = () => {
  return <div></div>;
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
