import styled from '@emotion/styled';

import { GoogleOauth } from 'components/Common/Oauth/GoogleOauth';
import { KakaoOauth } from 'components/Common/Oauth/KakaoOauth';
import { NaverOauth } from 'components/Common/Oauth/NaverOauth';

const SocialLoginBox = () => {
  return (
    <S.Box>
      <S.TitleBox>
        <S.DividingLine />
        <S.Title>SNS로 로그인</S.Title>
      </S.TitleBox>

      <S.ButtonBox>
        <GoogleOauth />
        <KakaoOauth />
        <NaverOauth />
      </S.ButtonBox>
    </S.Box>
  );
};

export default SocialLoginBox;

const S = {
  Box: styled.div``,

  TitleBox: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
  `,

  Title: styled.span`
    color: #6d6d6d;
    background: #f7f7f7;
    padding: 0 15px;
    z-index: 1;
    margin-top: -10px;
  `,

  DividingLine: styled.div`
    background: #cacaca;
    width: 100%;
    height: 2px;
  `,

  ButtonBox: styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;

    > * {
      cursor: pointer;
    }
  `,
};
