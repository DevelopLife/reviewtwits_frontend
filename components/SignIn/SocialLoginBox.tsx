import * as S from './SocialLoginBox.styles';

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
