import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { snsAPI } from 'api/sns';
import { alertErrorHandler } from 'utils/errorHandler';
import type { ResponseError } from 'typings/error';
import { FollowingDictionary } from 'typings/sns';

export const FOLLOWING_DICTIONARY_KEY = ['FollowingDictionary'];

const useFollowAndUnFollow = (targetUserAccountId: string) => {
  const queryClient = useQueryClient();
  const originFollowingDictionary = queryClient.getQueryData(
    FOLLOWING_DICTIONARY_KEY
  ) as FollowingDictionary;

  // FIXME: 팔로우할때는 accountId, 리뷰를 요청할때는 nickname 팔로우 중인지 소셜 프로필도 nickname이다. 이거 nickname으로 통일할 수 없나?
  const nickname = '0min';

  const onFollowOptimisticUpdate = () => {
    optimisticUpdateByReactQuery({
      queryClient,
      queryKey: FOLLOWING_DICTIONARY_KEY,
      newData: {
        ...originFollowingDictionary,
        [nickname]: {},
      },
    });
  };

  const onUnfollowOptimisticUpdate = () => {
    const { [nickname]: removedValue, ...restIsFollowingDictionary } =
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
    () => snsAPI.follow({ targetUserAccountId }),
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
    () => snsAPI.unfollow({ targetUserAccountId }),
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

export default useFollowAndUnFollow;
