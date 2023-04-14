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
  addReaction: (reviewId: number, reaction: ReactionType) => {
    const params = { reaction };

    return api.post(`${SNS_URL}/review-reaction/${reviewId}`, null, {
      params,
    });
  },
  deleteReaction: (reviewId: number) => {
    return api.delete(`${SNS_URL}/review-reaction/${reviewId}`);
  },
  addScrap: (reviewId: number) => {
    return api.post(`${SNS_URL}/scrap-reviews/${reviewId}`);
  },
  deleteScrap: (reviewId: number) => {
    return api.delete(`${SNS_URL}/scrap-reviews/${reviewId}`);
  },
  createReview: (formData: FormData) => {
    return api.post(`${SNS_URL}/reviews`, formData);
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
