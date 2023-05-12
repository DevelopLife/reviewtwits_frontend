import { googleOauthAPI, kakaoOauthAPI, naverOauthAPI } from 'api/oauth';
import { SocialProviderType } from 'typings/account';
import { doSignIn } from 'utils/auth';
import { setCookie } from 'utils/cookies';

const getSignInResult = (
  provider: SocialProviderType,
  providerToken: string
) => {
  switch (provider) {
    case 'GOOGLE':
      return googleOauthAPI.googleLogin(providerToken);
    case 'KAKAO':
      return kakaoOauthAPI.kakaoLogin(providerToken);
    // case 'NAVER':
    //   return naverOauthAPI.naverLogin(token);
    default:
      return null;
  }
};

export const doOauthSignIn = async (
  provider: SocialProviderType,
  providerToken: string
) => {
  const result = await getSignInResult(provider, providerToken);

  if (!result) return;

  if (result.status === 200) {
    doSignIn(result.data.accessToken);

    return location.replace('/');
  }

  if (result.status === 202) {
    const { email } = result.data;

    setCookie('email', email);
    setCookie('token', providerToken);
    setCookie('provider', provider);

    return (location.href = '/sign-up');
  }
};
