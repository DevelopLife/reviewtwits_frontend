import { optionalTokenAPI, requiredTokenApi } from 'api/instance';
import { SocialProfile, SocialReview } from 'typings/social';

import { ReactionType } from 'typings/reviews';

const SNS_URL = '/sns';

export const snsAPI = {
  getFeed: async () => {
    const SIZE = 10;

    return await optionalTokenAPI
      .get(`${SNS_URL}/feeds`, {
        params: {
          size: SIZE,
        },
      })
      .then((res) => res.data);
  },

  getInfiniteFeed: async (lastId: number) => {
    const SIZE = 10;

    return await optionalTokenAPI
      .get(`${SNS_URL}/feeds`, {
        params: {
          size: SIZE,
          reviewId: lastId,
        },
      })
      .then((res) => res.data);
  },

  getTrendyProducts: () =>
    optionalTokenAPI
      .get(`${SNS_URL}/recommend-product`)
      .then((res) => res.data),
  toggleReaction: (reviewId: number, reaction: ReactionType) => {
    const params = { reaction };

    return requiredTokenApi.post(
      `${SNS_URL}/review-reaction/${reviewId}`,
      null,
      {
        params,
      }
    );
  },
  deleteReaction: (reviewId: number) => {
    return requiredTokenApi.delete(`${SNS_URL}/review-reaction/${reviewId}`);
  },
  addScrap: (reviewId: number) => {
    return requiredTokenApi.post(`${SNS_URL}/scrap-reviews/${reviewId}`);
  },
  deleteScrap: (reviewId: number) => {
    return requiredTokenApi.delete(`${SNS_URL}/scrap-reviews/${reviewId}`);
  },
  createReview: (formData: FormData) => {
    return requiredTokenApi.post(`${SNS_URL}/reviews`, formData);
  },
  getFollowerList: async (nickname: string) => {
    return await optionalTokenAPI.get(`${SNS_URL}/get-followers/${nickname}`);
  },
  getFollowingList: async (nickname: string) => {
    return await optionalTokenAPI.get(`${SNS_URL}/get-followings/${nickname}`);
  },
  getProfile: async (nickname: string): Promise<SocialProfile> => {
    const response = await optionalTokenAPI.get(
      `${SNS_URL}/profile/${nickname}`
    );

    return response.data;
  },
  getMyReviews: async (
    nickname: string,
    reviewId?: number
  ): Promise<SocialReview[]> => {
    const size = 10;
    const params = reviewId
      ? {
          size,
          reviewId,
        }
      : { size };

    const response = await optionalTokenAPI.get(
      `${SNS_URL}/profile/reviews/${nickname}`,
      {
        params,
      }
    );

    return response.data;
  },

  getOneReview: async (nickname: string, reviewId: number) => {
    const size = 10;
    // 1로 했을 때 imageUrl, emotion을 하나씩만 받아오는 버그가 있어서 백 수정 전까지는  10으로 임의 사용
    const params = { size, reviewId: reviewId + 1 };

    const response = await optionalTokenAPI.get(`${SNS_URL}/feeds`, { params });

    return response.data[0];
  },

  getReviewComments: async (reviewId: number) => {
    const response = await optionalTokenAPI.get(
      `${SNS_URL}/comments/${reviewId}`
    );
    return response.data;
  },

  follow: (body: FollowAndUnFollowRequestBody) =>
    requiredTokenApi.post(`${SNS_URL}/request-follow`, body),

  unfollow: (body: FollowAndUnFollowRequestBody) =>
    requiredTokenApi.post(`${SNS_URL}/request-unfollow`, body),
};

type FollowAndUnFollowRequestBody = {
  targetUserNickname: string;
};
