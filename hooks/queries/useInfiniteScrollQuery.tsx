import {
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { ReviewResponseType } from 'typings/reviews';

interface UseInfiniteScrollQueryParams {
  queryKey: QueryKey;
  getNextPage: (nextRequest: number) => Promise<ReviewResponseType[]>;
  options?: Omit<UseInfiniteQueryOptions, 'queryKey' | 'queryFn'>;
}
const useInfiniteScrollQuery = ({
  queryKey,
  getNextPage,
}: UseInfiniteScrollQueryParams) => {
  const query = useInfiniteQuery(
    queryKey,
    async ({ pageParam = 1000000 }) => {
      return await getNextPage(pageParam);
    },
    {
      getNextPageParam: (data) => {
        if (!data) return undefined;

        const pageParam = data.at(-1)?.reviewId;
        if (!pageParam) return undefined;

        return pageParam;
      },
    }
  );

  const clearCache = () => {
    return () => {
      query.remove();
    };
  };

  useEffect(() => {
    clearCache();
  }, []);

  return query;
};

export default useInfiniteScrollQuery;
