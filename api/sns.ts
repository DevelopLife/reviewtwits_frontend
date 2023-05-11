import { optionalTokenAPI, requiredTokenApi } from 'api/instance';
import { SocialProfile, SocialReview } from 'typings/social';

import { ReactionType } from 'typings/reviews';

const SNS_URL = '/sns';

export const snsAPI = {
  //
  // feed(home)
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

  //
  // create

  createReview: (formData: FormData) => {
    return requiredTokenApi.post(`${SNS_URL}/reviews`, formData);
  },

  //
  // following | follower

  getFollowerList: async (nickname: string) => {
    return await optionalTokenAPI.get(`${SNS_URL}/get-followers/${nickname}`);
  },
  getFollowingList: async (nickname: string) => {
    return await optionalTokenAPI.get(`${SNS_URL}/get-followings/${nickname}`);
  },

  follow: (body: FollowAndUnFollowRequestBody) =>
    requiredTokenApi.post(`${SNS_URL}/request-follow`, body),

  unfollow: (body: FollowAndUnFollowRequestBody) =>
    requiredTokenApi.post(`${SNS_URL}/request-unfollow`, body),

  //
  // reaction(scrap & reaction)

  deleteReaction: (reviewId: number) => {
    return requiredTokenApi.delete(`${SNS_URL}/review-reaction/${reviewId}`);
  },
  addScrap: (reviewId: number) => {
    return requiredTokenApi.post(`${SNS_URL}/scrap-reviews/${reviewId}`);
  },
  deleteScrap: (reviewId: number) => {
    return requiredTokenApi.delete(`${SNS_URL}/scrap-reviews/${reviewId}`);
  },

  getProfile: async (nickname: string): Promise<SocialProfile> => {
    const response = await optionalTokenAPI.get(
      `${SNS_URL}/profile/${nickname}`
    );

    return response.data;
  },

  //
  // Profile

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

  //
  // modal
  getOneReview: async (reviewId: number) => {
    const response = await optionalTokenAPI.get(
      `${SNS_URL}/reviews/${reviewId}`
    );
    return response.data;
  },

  getReviewComments: async (reviewId: number) => {
    const response = await optionalTokenAPI.get(
      `${SNS_URL}/comments/${reviewId}`
    );
    return response.data;
  },

  postReviewComment: async (
    reviewId: number,
    createdComment: { content: string; parentId: number }
  ) => {
    const response = await requiredTokenApi.post(
      `${SNS_URL}/comments/${reviewId}`,
      createdComment
    );
    console.log(response.data, '리턴값이어떻게');

    return response.data;
  },
};

type FollowAndUnFollowRequestBody = {
  targetUserNickname: string;
};
