import { requiredTokenApi, optionalTokenAPI } from './instance';
import { SocialProfile, SocialReview } from 'typings/social';
import { ReactionType, ReviewResponseType } from 'typings/reviews';
import type {
  FollowAndUnFollowRequestBody,
  FollowListType,
  GetFollowerListParams,
} from 'typings/sns';

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

  getInfiniteScrapList: async (lastId: number) => {
    const SIZE = 10;
    return await requiredTokenApi
      .get(`${SNS_URL}/scrap-reviews`, {
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

  getFollowerList: async ({
    nickname,
    size,
    userId,
  }: GetFollowerListParams): Promise<FollowListType> => {
    const params = { size, userId };
    const response = await optionalTokenAPI.get(
      `${SNS_URL}/get-followers/${nickname}`,
      {
        params,
      }
    );
    return response.data;
  },
  getFollowingList: async ({
    nickname,
    size,
    userId,
  }: GetFollowerListParams): Promise<FollowListType> => {
    const params = { size, userId };
    const response = await optionalTokenAPI.get(
      `${SNS_URL}/get-followings/${nickname}`,
      {
        params,
      }
    );

    return response.data;
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

  //
  // Profile

  getProfile: async (nickname: string): Promise<SocialProfile> => {
    const response = await optionalTokenAPI.get(
      `${SNS_URL}/profile/${nickname}`
    );
    return response.data;
  },

  getUserReviews: async (
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

  getFilteredReviews: async (
    nickname: string,
    reviewId?: number
  ): Promise<ReviewResponseType[]> => {
    const size = 10;
    const params = reviewId
      ? {
          size,
          nickname,
          reviewId,
        }
      : { size, nickname };
    const response = await requiredTokenApi.get(`${SNS_URL}/feeds/filter`, {
      params,
    });
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

  //
  // comments

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

    return response.data;
  },

  postLikeToComment: async (commentId: number) => {
    const response = await requiredTokenApi.post(
      `${SNS_URL}/comments-like/${commentId}`
    );
    return response;
  },

  deleteLikeToComment: async (commentId: number) => {
    const response = await requiredTokenApi.delete(
      `${SNS_URL}/comments-like/${commentId}`
    );
    return response;
  },

  deleteComment: async (commentId: number) => {
    const response = await requiredTokenApi.delete(
      `${SNS_URL}/comments/${commentId}`
    );
    return response;
  },

  patchComment: async (commentId: number, values: { content: string }) => {
    const params = values;

    const response = await requiredTokenApi.patch(
      `${SNS_URL}/comments/${commentId}`,
      null,
      { params }
    );
    return response;
  },

  getFollowSuggestion: () =>
    requiredTokenApi
      .get(`${SNS_URL}/suggest-followers`)
      .then((res) => res.data),

  getRecentUpdatedUsers: async () => {
    return await requiredTokenApi
      .get(`${SNS_URL}/recent-update-users`)
      .then((res) => res.data);
  },
};
