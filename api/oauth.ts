import { oauthApi } from '@/api/instance';

const googleOauth = {
  getProfile: (accessToken: string) =>
    oauthApi.get(`api/oauth2/google?token=${accessToken}`),
};

// const naverOauth = {
//   getProfile: () => {},
// };

export { googleOauth };
