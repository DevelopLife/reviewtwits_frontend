import { oauthApi } from 'api/instance';

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

  getUserData: async (accessToken: string) => {
    const headers = { Authorization: `Bearer ${accessToken}` };

    return await oauthApi
      .get('https://kapi.kakao.com/v2/user/me', {
        headers,
      })
      .then((res) => res.data);
  },
};

const googleOauthAPI = {
  getProfileNextAPI: (accessToken: string) =>
    oauthApi.get(`api/auth/google?token=${accessToken}`),
  getUserDataOrigin: (accessToken: string) =>
    oauthApi.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
    ),
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
};

export { kakaoOauthAPI, googleOauthAPI, naverOauthAPI };
