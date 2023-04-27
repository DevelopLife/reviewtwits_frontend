import {
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useEffect } from 'react';

interface UseInfiniteScrollQueryParams<T> {
  queryKey: QueryKey;
  getNextPage: (nextRequest: number) => Promise<T[]>;
  options?: Omit<UseInfiniteQueryOptions, 'queryKey' | 'queryFn'>;
}
function useInfiniteScrollQuery<T extends Record<'reviewId', number>>({
  queryKey,
  getNextPage,
}: UseInfiniteScrollQueryParams<T>) {
  const query = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: async ({ pageParam = 1000000 }) => {
      return await getNextPage(pageParam);
    },
    getNextPageParam: (data) => {
      if (!data) return undefined;

      const pageParam = data.at(-1)?.reviewId;
      if (!pageParam) return undefined;

      return pageParam;
    },
  });

  const clearCache = () => {
    return () => {
      query.remove();
    };
  };

  useEffect(() => {
    clearCache();
  }, []);

  return query;
}

export default useInfiniteScrollQuery;
