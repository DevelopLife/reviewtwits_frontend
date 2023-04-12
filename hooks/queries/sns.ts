import { useQuery } from '@tanstack/react-query';
import { snsAPI } from 'api/sns';
import { AxiosError, AxiosResponse } from 'axios';
import { FollowListType } from 'typings/sns';

export const useGetFollowerList = (accountId: string) => {
  const { data, isLoading } = useQuery<
    AxiosResponse<FollowListType>,
    AxiosError
  >(['useGetFollowerList'], () => snsAPI.getFollowerList(accountId));
  return { isLoading, data };
};

export const useGetFollowingList = (accountId: string) => {
  const { data, isLoading } = useQuery<AxiosResponse, AxiosError>(
    ['useGetFollowingList'],
    () => snsAPI.getFollowingList(accountId)
  );
  return { isLoading, data };
};
