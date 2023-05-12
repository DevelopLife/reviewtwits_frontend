import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { kakaoOauthAPI } from 'api/oauth';
import { doOauthSignIn } from 'utils/oauth';

const PROVIDER = 'KAKAO';

const KakaoCallback = () => {
  const router = useRouter();

  const getKakaoToken = async (code: string) => {
    const { access_token } = await kakaoOauthAPI.getToken(code);

    return access_token;
  };

  const kakaoSignInHandler = useCallback(async (code: string) => {
    const token = await getKakaoToken(code);
    if (token) doOauthSignIn(PROVIDER, token);
  }, []);

  useEffect(() => {
    const { code } = router.query;

    if (code) kakaoSignInHandler(code as string);
  }, [router, kakaoSignInHandler]);

  return <KakaoCallbackView />;
};

const KakaoCallbackView = () => {
  return <></>;
};

export default KakaoCallback;
