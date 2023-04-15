import { api } from 'api/instance';
import { SocialProfile, SocialReview } from 'typings/social';

import { ReactionType } from 'typings/reviews';

const SNS_URL = '/sns';

export const snsAPI = {
  getFeed: async () => {
    const SIZE = 10;

    return await api
      .get(`${SNS_URL}/feeds`, {
        params: {
          size: SIZE,
        },
      })
      .then((res) => res.data);
  },
  addReaction: async (reviewId: number, reaction: ReactionType) => {
    const params = { reaction };

    return await api.post(`${SNS_URL}/review-reaction/${reviewId}`, null, {
      params,
    });
  },
  deleteReaction: async (reviewId: number) => {
    return await api.delete(`${SNS_URL}/review-reaction/${reviewId}`);
  },
  addScrap: async (reviewId: number) => {
    return await api.post(`${SNS_URL}/scrap-reviews/${reviewId}`);
  },
  deleteScrap: async (reviewId: number) => {
    return await api.delete(`${SNS_URL}/scrap-reviews/${reviewId}`);
  },
  createReview: async (formData: FormData) => {
    return await api.post(`${SNS_URL}/reviews`, formData);
  },

  getFollowerList: async (accountId: string) => {
    return await api.get(`${SNS_URL}/get-followers/${accountId}`);
  },

  getFollowingList: async (accountId: string) => {
    return await api.get(`${SNS_URL}/get-followings/${accountId}`);
  },
  getProfile: async (nickname: string): Promise<SocialProfile> => {
    const response = await api.get(`${SNS_URL}/profile/${nickname}`);

    return response.data;
  },
  getMyReviews: async (nickname: string): Promise<SocialReview[]> => {
    const response = await api.get(`${SNS_URL}/profile/reviews/${nickname}`);

    return response.data;
  },
  follow: (body: FollowAndUnFollowRequestBody) =>
    api.post(`${SNS_URL}/request-follow`, body),

  unfollow: (body: FollowAndUnFollowRequestBody) =>
    api.post(`${SNS_URL}/request-unfollow`, body),
};

type FollowAndUnFollowRequestBody = {
  targetUserAccountId: string;
};
