import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';

import { ResponseError } from 'typings/error';
import { FollowListType, FollowType, FollowingDictionary } from 'typings/sns';
import { SocialReview } from 'typings/social';
import { alertErrorHandler } from 'utils/errorHandler';
import { linkageInfiniteScrollData } from 'utils/linkageDataToArray';
import { snsAPI } from 'api/sns';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useInfiniteScrollQuery from './useInfiniteScrollQuery';
import {
  CommentResponseType,
  ProductType,
  ReviewResponseType,
} from 'typings/reviews';
import { selectedUserState } from 'states/reviews';

export const FOLLOWING_DICTIONARY_KEY = ['FollowingDictionary'];
export const FOLLOW_SUGGESTION_KEY = ['followSuggestion'];

export const useGetFollowerList = (nickname: string) => {
  const followerListInfiniteQuery = useInfiniteScrollQuery({
    queryKey: ['useGetFollowerList'],
    getNextPage: (nextRequest) => {
      return snsAPI.getFollowerList({
        nickname,
        size: 10,
        userId: nextRequest,
      });
    },
    nextRequest: 'userId',
    options: {
      enabled: !!nickname,
    },
  });

  const targetRef = useIntersectionObserver(
    followerListInfiniteQuery.fetchNextPage
  );
  const data = linkageInfiniteScrollData(followerListInfiniteQuery?.data);

  return {
    followerListInfiniteQuery,
    targetRef,
    data,
  };
};
export const useGetFollowingList = (nickname: string) => {
  const queryClient = useQueryClient();

  const setFollowingDictionary = (followingList: unknown[]) => {
    const data = followingList as unknown as FollowListType;
    const defaultFollowingDictionary: FollowingDictionary = {};

    const result = data?.reduce(
      (followingDictionary, { nickname, ...rest }) => {
        followingDictionary[nickname] = rest;
        return followingDictionary;
      },
      defaultFollowingDictionary
    );

    return result;
  };

  const followingListInfiniteQuery = useInfiniteScrollQuery<
    FollowType,
    'userId'
  >({
    queryKey: ['useGetFollowingList'],
    getNextPage: (nextRequest) => {
      return snsAPI.getFollowingList({
        nickname,
        size: 10,
        userId: nextRequest,
      });
    },
    nextRequest: 'userId',
    options: {
      onSuccess: (data) => {
        queryClient.cancelQueries(FOLLOWING_DICTIONARY_KEY);
        queryClient.fetchQuery({
          queryKey: FOLLOWING_DICTIONARY_KEY,
          queryFn: () => {
            const followingList = linkageInfiniteScrollData(data);

            return setFollowingDictionary(followingList || []);
          },
        });
      },
      enabled: !!nickname,
    },
  });
  const targetRef = useIntersectionObserver(
    followingListInfiniteQuery.fetchNextPage
  );

  const data = linkageInfiniteScrollData(followingListInfiniteQuery?.data);

  return {
    followingListInfiniteQuery,
    targetRef,
    data,
  };
};

export const useGetUserReviews = (nickname: string, reviewId?: number) => {
  return useQuery(['reviews', nickname], () =>
    snsAPI.getUserReviews(nickname, reviewId)
  );
};

const getNewSuggestArray = (array: FollowType[], nickname: string) => {
  return array.map((data) => {
    if (data.nickname === nickname) {
      return {
        ...data,
        isFollowed: !data.isFollowed,
      };
    }

    return data;
  });
};

export const useGetOneReview = (reviewId: number) => {
  return useQuery(['review', reviewId], () => snsAPI.getOneReview(reviewId));
};

export const useGetReviewComments = (reviewId: number) => {
  return useQuery(['review', 'comments', reviewId], () =>
    snsAPI.getReviewComments(reviewId)
  );
};

export const usePostReviewComment = (reviewId: number) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({
      reviewId,
      createdComment,
    }: {
      reviewId: number;
      createdComment: { content: string; parentId: number };
    }) => snsAPI.postReviewComment(reviewId, createdComment),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['review', 'comments', reviewId]);
      },
      onError: (err) => {
        alert(err);
      },
    }
  );
  return { mutate };
};

export const usePostlikeToComment = (reviewId: number, commentId: number) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({ commentId }: { commentId: number }) =>
      snsAPI.postLikeToComment(commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          'review',
          'comment',
          reviewId,
          commentId,
        ]);
      },
    }
  );
  return { mutate };
};

export const useFollowAndUnFollow = () => {
  const queryClient = useQueryClient();
  const originFollowingDictionary = queryClient.getQueryData(
    FOLLOWING_DICTIONARY_KEY
  ) as FollowingDictionary;
  const originFollowSuggestion = queryClient.getQueryData(
    FOLLOW_SUGGESTION_KEY
  ) as FollowType[];

  const onFollowOptimisticUpdate = (targetUserNickname: string) => {
    optimisticUpdateByReactQuery({
      queryClient,
      queryKey: FOLLOWING_DICTIONARY_KEY,
      newData: {
        ...originFollowingDictionary,
        [targetUserNickname]: {},
      },
    });

    optimisticUpdateByReactQuery({
      queryClient,
      queryKey: FOLLOW_SUGGESTION_KEY,
      newData: getNewSuggestArray(originFollowSuggestion, targetUserNickname),
    });
  };

  const onUnfollowOptimisticUpdate = (targetUserNickname: string) => {
    const { [targetUserNickname]: removedValue, ...restIsFollowingDictionary } =
      originFollowingDictionary;

    optimisticUpdateByReactQuery({
      queryClient,
      queryKey: FOLLOWING_DICTIONARY_KEY,
      newData: restIsFollowingDictionary,
    });

    optimisticUpdateByReactQuery({
      queryClient,
      queryKey: FOLLOW_SUGGESTION_KEY,
      newData: getNewSuggestArray(originFollowSuggestion, targetUserNickname),
    });
  };

  const resetOriginFollowingDictionary = () => {
    queryClient.setQueryData(
      FOLLOWING_DICTIONARY_KEY,
      originFollowingDictionary
    );
  };

  type OptimisticUpdateByReactQueryParams = {
    queryClient: QueryClient;
    queryKey: string[];
    newData: unknown;
  };

  function optimisticUpdateByReactQuery({
    queryClient,
    queryKey,
    newData,
  }: OptimisticUpdateByReactQueryParams) {
    queryClient.cancelQueries(queryKey);
    queryClient.setQueryData(queryKey, newData);
  }

  const { mutate: follow } = useMutation(
    (targetUserNickname: string) => snsAPI.follow({ targetUserNickname }),
    {
      onMutate: (targetUserNickname) => {
        onFollowOptimisticUpdate(targetUserNickname);
      },
      onError: (err: AxiosError<ResponseError>) => {
        resetOriginFollowingDictionary();
        alertErrorHandler(err);
      },
    }
  );
  const { mutate: unfollow } = useMutation(
    (targetUserNickname: string) => snsAPI.unfollow({ targetUserNickname }),
    {
      onMutate: (targetUserNickname) => {
        onUnfollowOptimisticUpdate(targetUserNickname);
      },
      onError: (err: AxiosError<ResponseError>) => {
        resetOriginFollowingDictionary();
        alertErrorHandler(err);
      },
    }
  );

  return {
    follow,
    unfollow,
  };
};

export const useGetSocialProfile = (nickname: string) => {
  const socialProfileQuery = useQuery(
    ['socialProfile'],
    () => snsAPI.getProfile(nickname),
    {
      enabled: !!nickname,
    }
  );

  return socialProfileQuery;
};
export const useGetInfiniteSocialReviews = (nickname: string) => {
  const infiniteQuery = useInfiniteScrollQuery<SocialReview, 'reviewId'>({
    queryKey: ['socialMyReviews', nickname],
    getNextPage: (nextRequest) => {
      return snsAPI.getUserReviews(nickname, nextRequest);
    },
    nextRequest: 'reviewId',
  });

  const targetRef = useIntersectionObserver(infiniteQuery.fetchNextPage);
  const data = linkageInfiniteScrollData(infiniteQuery?.data);

  return {
    targetRef,
    data,
  };
};

export const useGetInfiniteFeed = () => {
  const selectedUser = useRecoilValue(selectedUserState);
  const infiniteQuery = useInfiniteScrollQuery<ReviewResponseType, 'reviewId'>({
    queryKey: ['useGetInfiniteFeed', selectedUser],
    getNextPage: (nextRequest) => {
      return selectedUser === ''
        ? snsAPI.getInfiniteFeed(nextRequest)
        : snsAPI.getFilteredReviews(selectedUser, nextRequest);
    },
    nextRequest: 'reviewId',
  });

  const targetRef = useIntersectionObserver(infiniteQuery.fetchNextPage);
  const data = linkageInfiniteScrollData(infiniteQuery?.data);
  return {
    targetRef,
    data,
  };
};

export const useGetInfiniteScrapList = () => {
  const infiniteQuery = useInfiniteScrollQuery<ReviewResponseType, 'reviewId'>({
    queryKey: ['useGetInfiniteScrapList'],
    getNextPage: (nextRequest) => snsAPI.getInfiniteScrapList(nextRequest),
    nextRequest: 'reviewId',
  });

  const targetRef = useIntersectionObserver(infiniteQuery.fetchNextPage);
  const data = linkageInfiniteScrollData(infiniteQuery?.data);
  return {
    targetRef,
    data,
  };
};

export const useGetRecentUpdatedUsers = () => {
  const recentUpdatedUserQuery = useQuery(['recentUpdatedUser'], () =>
    snsAPI.getRecentUpdatedUsers()
  );

  return recentUpdatedUserQuery;
};

export const useGetFollowSuggestion = () => {
  return useQuery<FollowType[]>(
    ['followSuggestion'],
    () => snsAPI.getFollowSuggestion(),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useTrandyProductsContent = () => {
  const data = useQuery<ProductType[]>(['trend'], () =>
    snsAPI.getTrendyProducts()
  );
  return data;
};
