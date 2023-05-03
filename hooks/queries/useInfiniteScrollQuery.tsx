import {
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useEffect } from 'react';

interface UseInfiniteScrollQueryParams<T, K> {
  queryKey: QueryKey;
  getNextPage: (nextRequest: number) => Promise<T[]>;
  nextRequest: K;
  options?: Omit<
    UseInfiniteQueryOptions<T[], unknown, T[]>,
    'queryKey' | 'queryFn'
  >;
}

function useInfiniteScrollQuery<T extends Record<K, number>, K extends string>({
  queryKey,
  getNextPage,
  nextRequest,
  options,
}: UseInfiniteScrollQueryParams<T, K>): UseInfiniteQueryResult<T[], unknown> {
  const query = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: async ({ pageParam }) => {
      return await getNextPage(pageParam);
    },
    getNextPageParam: (data) => {
      if (!data) return undefined;

      const pageParam = data.at(-1)?.[nextRequest];
      if (!pageParam) return undefined;

      return pageParam;
    },
    ...options,
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
