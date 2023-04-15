import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { snsAPI } from 'api/sns';
import { alertErrorHandler } from 'utils/errorHandler';
import type { ResponseError } from 'typings/error';

const useFollowAndUnFollow = (targetUserAccountId: string) => {
  const queryClient = useQueryClient();
  const invalidateUserGetFollowingListQuery = () =>
    queryClient.invalidateQueries(['useGetFollowingList']);

  const { mutate: follow } = useMutation(
    () => snsAPI.follow({ targetUserAccountId }),
    {
      onSuccess: () => {
        invalidateUserGetFollowingListQuery();
      },
      onError: (err: AxiosError<ResponseError>) => alertErrorHandler(err),
    }
  );
  const { mutate: unfollow } = useMutation(
    () => snsAPI.unfollow({ targetUserAccountId }),
    {
      onSuccess: () => {
        invalidateUserGetFollowingListQuery();
      },
      onError: (err: AxiosError<ResponseError>) => alertErrorHandler(err),
    }
  );

  return {
    follow: () => follow(),
    unfollow: () => unfollow(),
  };
};

export default useFollowAndUnFollow;
