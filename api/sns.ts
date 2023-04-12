import { api } from 'api/instance';

const SNS_URL = '/sns';

export const snsAPI = {
  createReview: async (formData: FormData) => {
    return await api.post(`${SNS_URL}/reviews`, formData);
  },

  getFollowerList: async (accountId: string) => {
    return await api.get(`${SNS_URL}/get-followers/${accountId}`);
  },

  getFollowingList: async (accountId: string) => {
    return await api.get(`${SNS_URL}/get-followings/${accountId}`);
  },

  follow: (body: FollowAndUnFollowRequestBody) =>
    api.post(`${SNS_URL}/request-follow`, body),

  unfollow: (body: FollowAndUnFollowRequestBody) =>
    api.post(`${SNS_URL}/request-unfollow`, body),
};

type FollowAndUnFollowRequestBody = {
  targetUserAccountId: string;
};
