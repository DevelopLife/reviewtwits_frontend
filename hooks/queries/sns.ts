import { useQuery } from '@tanstack/react-query';
import { snsAPI } from 'api/sns';
import { AxiosError, AxiosResponse } from 'axios';
import useInfiniteScrollQuery from 'hooks/queries/useInfiniteScrollQuery';
import { ResponseError } from 'typings/error';
import { ReviewResponseType } from 'typings/reviews';
import { FollowListType } from 'typings/sns';

export const useGetFollowerList = (accountId: string) => {
  return useQuery<AxiosResponse<FollowListType>, AxiosError<ResponseError>>(
    ['useGetFollowerList'],
    () => snsAPI.getFollowerList(accountId)
  );
};

export const useGetFollowingList = (accountId: string) => {
  return useQuery<AxiosResponse, AxiosError<ResponseError>>(
    ['useGetFollowingList'],
    () => snsAPI.getFollowingList(accountId)
  );
};

// infiniteScroll 설명을 위한 임시 작업
export const useGetInfiniteFeed = () => {
  return useInfiniteScrollQuery({
    queryKey: ['useGetInfiniteFeed'],
    getNextPage: (nextRequest) => {
      return snsAPI.getInfiniteFeed(nextRequest);
    },
  });
};
