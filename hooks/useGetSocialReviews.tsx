import { useInfiniteQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { snsAPI } from 'api/sns';
import type { ResponseError } from 'typings/error';
import { redirectErrorHandler } from 'utils/errorHandler';

const SIZE = 5;

const useGetSocialReviews = (nickname: string) => {
  const getMyReviewsInfiniteQuery = async ({ pageParam = 0 }) => {
    const resposne = await snsAPI.getMyReviews({
      nickname,
      size: SIZE,
    });

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

export default useGetSocialReviews;
