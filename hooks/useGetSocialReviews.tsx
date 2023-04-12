import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { snsAPI } from 'api/sns';
import { ResponseError } from 'typings/error';
import { redirectErrorHandler } from 'utils/errorHandler';

const useGetSocialReviews = (nickname: string) => {
  return useQuery(
    ['socialMyReviews', nickname],
    () => snsAPI.getMyReviews(nickname),
    {
      onError: (err: AxiosError<ResponseError>) => redirectErrorHandler(err),
      enabled: !!nickname,
    }
  );
};

export default useGetSocialReviews;
