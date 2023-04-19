import { useQuery } from '@tanstack/react-query';
import { snsAPI } from 'api/sns';
import { AxiosError, AxiosResponse } from 'axios';
import { FollowListType } from 'typings/sns';

export const useGetFollowerList = (accountId: string) => {
return useQuery<
    AxiosResponse<FollowListType>,
    AxiosError<ResponseError>
  >(['useGetFollowerList'], () => snsAPI.getFollowerList(accountId));
};

export const useGetFollowingList = (accountId: string) => {
  const { data, isLoading } = useQuery<AxiosResponse, AxiosError>(
    ['useGetFollowingList'],
    () => snsAPI.getFollowingList(accountId)
  );
  return { isLoading, data };
};
