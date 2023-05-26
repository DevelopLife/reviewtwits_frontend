import { authApi, oauthApi } from 'api/instance';
import { UserFormType } from 'typings/account';

const OAUTH_URL = '/oauth';

const kakaoOauthAPI = {
  getToken: async (code: string) => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const data = {
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
      code,
    };

    return await oauthApi
      .post('https://kauth.kakao.com/oauth/token', data, {
        headers,
      })
      .then((res) => res.data);
  },

  kakaoLogin: async (accessToken: string) => {
    const headers = {
      Authorization: accessToken,
    };

    return authApi.post(`${OAUTH_URL}/kakao`, {}, { headers });
  },
};

const googleOauthAPI = {
  getUserDataOrigin: (accessToken: string) =>
    oauthApi.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
    ),

  googleLogin: async (accessToken: string) => {
    const headers = {
      Authorization: accessToken,
    };

    return authApi.post(`${OAUTH_URL}/google`, {}, { headers });
  },
};

const naverOauthAPI = {
  getProfileNextAPI: (accessToken: string) => {
    return oauthApi.get(`api/auth/naver?token=${accessToken}`);
  },

  getUserDataOrigin: (accessToken: string) => {
    return oauthApi.get('https://openapi.naver.com/v1/nid/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  naverLogin: async (accessToken: string) => {
    const headers = {
      Authorization: accessToken,
    };

    return authApi.post(`${OAUTH_URL}/naver`, {}, { headers }).then((res) => {
      if (res.status === 202)
        return {
          status: res.status,
          data: res.data.response,
        };

      return res;
    });
  },
};

const registerAPI = {
  socialSignUp: (token: string, values: UserFormType) => {
    const headers = {
      Authorization: token,
    };

    const body = { ...values };
    delete body['accountId'];

    return authApi.post(`${OAUTH_URL}/register`, body, { headers });
  },
};

export { kakaoOauthAPI, googleOauthAPI, naverOauthAPI, registerAPI };
