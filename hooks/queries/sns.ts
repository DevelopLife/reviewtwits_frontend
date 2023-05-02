import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { ResponseError } from 'typings/error';
import { FollowListType, FollowingDictionary } from 'typings/sns';
import { SocialReview } from 'typings/social';
import { alertErrorHandler } from 'utils/errorHandler';
import { linkageInfiniteScrollData } from 'utils/linkageDataToArray';
import { snsAPI } from 'api/sns';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useInfiniteScrollQuery from './useInfiniteScrollQuery';
import { ReviewResponseType } from 'typings/reviews';

export const FOLLOWING_DICTIONARY_KEY = ['FollowingDictionary'];

export const useGetFollowerList = (nickname: string) => {
  const followerListQuery = useInfiniteScrollQuery({
    queryKey: ['useGetFollowerList'],
    getNextPage: (nextRequest) => {
      return snsAPI.getFollowerList({
        nickname,
        size: 3,
        followId: nextRequest,
      });
    },
    nextRequest: 'userId',
    options: {
      enabled: !!nickname,
    },
  });

  const targetRef = useIntersectionObserver(followerListQuery.fetchNextPage);
  const data = linkageInfiniteScrollData(followerListQuery?.data);

  return {
    targetRef,
    data,
  };
};
export const useGetFollowingList = (nickname: string) => {
  const queryClient = useQueryClient();

  const setFollowingDictionary = (followingList: FollowListType) => {
    const defaultFollowingDictionary: FollowingDictionary = {};
    const result = followingList.reduce(
      (followingDictionary, { nickname, ...rest }) => {
        followingDictionary[nickname] = rest;
        return followingDictionary;
      },
      defaultFollowingDictionary
    );

    return result;
  };

  const followingList = useInfiniteScrollQuery({
    queryKey: ['useGetFollowingList'],
    getNextPage: (nextRequest) => {
      console.log(nextRequest);
      return snsAPI.getFollowingList({
        nickname,
        size: 3,
        followId: nextRequest,
      });
    },
    nextRequest: 'userId',
    options: {
      onSuccess: (response) => {
        queryClient.cancelQueries(FOLLOWING_DICTIONARY_KEY);
        queryClient.fetchQuery({
          queryKey: FOLLOWING_DICTIONARY_KEY,
          queryFn: () => setFollowingDictionary(response.data),
        });
      },
      enabled: !!nickname,
    },
  });
  const targetRef = useIntersectionObserver(followingList.fetchNextPage);
  const data = linkageInfiniteScrollData(followingList?.data);

  return {
    targetRef,
    data,
  };
};

export const useGetMyReviews = (nickname: string, reviewId?: number) => {
  return useQuery(['reviews', nickname], () =>
    snsAPI.getMyReviews(nickname, reviewId)
  );
};

export const useGetOneReview = (nickname: string, reviewId: number) => {
  return useQuery(['review', nickname, reviewId], () =>
    snsAPI.getOneReview(nickname, reviewId)
  );
};

export const useGetReviewComments = (reviewId: number) => {
  return useQuery(['review', 'comments', reviewId], () =>
    snsAPI.getReviewComments(reviewId)
  );
};

export const useFollowAndUnFollow = () => {
  const queryClient = useQueryClient();
  const originFollowingDictionary = queryClient.getQueryData(
    FOLLOWING_DICTIONARY_KEY
  ) as FollowingDictionary;

  const onFollowOptimisticUpdate = (targetUserNickname: string) => {
    optimisticUpdateByReactQuery({
      queryClient,
      queryKey: FOLLOWING_DICTIONARY_KEY,
      newData: {
        ...originFollowingDictionary,
        [targetUserNickname]: {},
      },
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
  const infiniteQuery = useInfiniteScrollQuery({
    queryKey: ['socialMyReviews', nickname],
    getNextPage: (nextRequest) => {
      return snsAPI.getMyReviews(nickname, nextRequest);
    },
    nextRequest: 'reviewId',
  });

  const targetRef = useIntersectionObserver(infiniteQuery.fetchNextPage);
  const data = linkageInfiniteScrollData<SocialReview>(infiniteQuery?.data);

  return {
    targetRef,
    data,
  };
};

export const useGetInfiniteFeed = () => {
  const infiniteQuery = useInfiniteScrollQuery({
    queryKey: ['useGetInfiniteFeed'],
    getNextPage: (nextRequest) => {
      return snsAPI.getInfiniteFeed(nextRequest);
    },
    nextRequest: 'reviewId',
  });

  const targetRef = useIntersectionObserver(infiniteQuery.fetchNextPage);
  const data = linkageInfiniteScrollData<ReviewResponseType>(
    infiniteQuery?.data
  );
  return {
    targetRef,
    data,
  };
};
