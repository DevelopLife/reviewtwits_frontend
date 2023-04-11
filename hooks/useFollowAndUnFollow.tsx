import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { snsAPI } from 'api/sns';
import { alertErrorHandler } from 'utils/errorHandler';
import type { ResponseError } from 'typings/error';

const useFollowAndUnFollow = (targetUserAccountId: string) => {
  const { mutate: follow } = useMutation(
    () => snsAPI.follow({ targetUserAccountId }),
    {
      onError: (err: AxiosError<ResponseError>) => alertErrorHandler(err),
    }
  );
  const { mutate: unfollow } = useMutation(
    () => snsAPI.unfollow({ targetUserAccountId }),
    {
      onError: (err: AxiosError<ResponseError>) => alertErrorHandler(err),
    }
  );

  return {
    follow: () => follow(),
    unfollow: () => unfollow(),
  };
};

export default useFollowAndUnFollow;
