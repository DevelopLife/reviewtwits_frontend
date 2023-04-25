import {
  QueryClient,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { ResponseError } from 'typings/error';
import { FollowListType, FollowingDictionary } from 'typings/sns';
import { alertErrorHandler, redirectErrorHandler } from 'utils/errorHandler';
import { snsAPI } from 'api/sns';
import { FOLLOWING_DICTIONARY_KEY } from 'hooks/useFollowAndUnFollow';

export const useGetFollowerList = (nickname: string) => {
  return useQuery<AxiosResponse<FollowListType>, AxiosError<ResponseError>>(
    ['useGetFollowerList'],
    () => snsAPI.getFollowerList(nickname),
    {
      enabled: !!nickname,
    }
  );
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

  return useQuery<AxiosResponse<FollowListType>, AxiosError>(
    ['useGetFollowingList'],
    () => snsAPI.getFollowingList(nickname),
    {
      onSuccess: (response) => {
        queryClient.cancelQueries(FOLLOWING_DICTIONARY_KEY);
        queryClient.fetchQuery({
          queryKey: FOLLOWING_DICTIONARY_KEY,
          queryFn: () => setFollowingDictionary(response.data),
        });
      },
      enabled: !!nickname,
    }
  );
};

export const useGetMyReviews = (nickname: string, reviewId?: number) => {
  return useQuery(['reviews', nickname], () =>
    snsAPI.getMyReviews(nickname, reviewId)
  );
};

// import {
//   QueryClient,
//   useMutation,
//   useQueryClient,
// } from '@tanstack/react-query';
// import type { AxiosError } from 'axios';

// import { snsAPI } from 'api/sns';
// import { alertErrorHandler } from 'utils/errorHandler';
// import type { ResponseError } from 'typings/error';
// import { FollowingDictionary } from 'typings/sns';

// export const FOLLOWING_DICTIONARY_KEY = ['FollowingDictionary'];

export const useFollowAndUnFollow = (targetUserNickname: string) => {
  const queryClient = useQueryClient();
  const originFollowingDictionary = queryClient.getQueryData(
    FOLLOWING_DICTIONARY_KEY
  ) as FollowingDictionary;

  const onFollowOptimisticUpdate = () => {
    optimisticUpdateByReactQuery({
      queryClient,
      queryKey: FOLLOWING_DICTIONARY_KEY,
      newData: {
        ...originFollowingDictionary,
        [targetUserNickname]: {},
      },
    });
  };

  const onUnfollowOptimisticUpdate = () => {
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
    () => snsAPI.follow({ targetUserNickname }),
    {
      onMutate: () => {
        onFollowOptimisticUpdate();
      },
      onError: (err: AxiosError<ResponseError>) => {
        resetOriginFollowingDictionary();
        alertErrorHandler(err);
      },
    }
  );
  const { mutate: unfollow } = useMutation(
    () => snsAPI.unfollow({ targetUserNickname }),
    {
      onMutate: () => {
        onUnfollowOptimisticUpdate();
      },
      onError: (err: AxiosError<ResponseError>) => {
        resetOriginFollowingDictionary();
        alertErrorHandler(err);
      },
    }
  );

  return {
    follow: () => follow(),
    unfollow: () => unfollow(),
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

export const useGetSocialReviews = (nickname: string) => {
  const getMyReviewsInfiniteQuery = async ({ pageParam = 0 }) => {
    const resposne = await snsAPI.getMyReviews(nickname);

    // TODO: if lastPage?

    return {
      currentPage: resposne,
      nextPage: pageParam + 1,
    };
  };

  return useInfiniteQuery({
    queryKey: ['socialMyReviews', nickname],
    queryFn: getMyReviewsInfiniteQuery,
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    onError: (err: AxiosError<ResponseError>) => redirectErrorHandler(err),
    enabled: !!nickname,
  });
};
