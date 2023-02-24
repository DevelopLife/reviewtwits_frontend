import { oauthApi } from '@api/instance';

const kakaoOauth = {
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

const googleOauth = {
  getProfile: (accessToken: string) =>
    oauthApi.get(`api/oauth2/google?token=${accessToken}`),
};

// const naverOauth = {
//   getProfile: () => {},
// };

export { kakaoOauth, googleOauth };
