import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { snsAPI } from 'api/sns';
import { ResponseError } from 'typings/error';
import { FollowListType } from 'typings/sns';
import { alertErrorHandler } from 'utils/errorHandler';

export const useGetFollowerList = (accountId: string) => {
  return useQuery<AxiosResponse<FollowListType>, AxiosError<ResponseError>>(
    ['useGetFollowerList'],
    () => snsAPI.getFollowerList(accountId)
  );
};

export const useGetFollowingList = (accountId: string) => {
  return useQuery<AxiosResponse, AxiosError>(['useGetFollowingList'], () =>
    snsAPI.getFollowingList(accountId)
  );
};

export const useFollowAndUnFollow = (targetUserAccountId: string) => {
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

export const useGetSocialProfile = (nickname: string) => {
  const socialProfileQuery = useQuery(
    ['socialProfile'],
    () => snsAPI.getProfile(nickname),
    {
      enabled: !!nickname,
    }
  );

  return socialProfileQuery;
};

export const useGetSocialReviews = (nickname: string) => {
  return useQuery(['socialMyReviews'], () => snsAPI.getMyReviews(nickname), {
    enabled: !!nickname,
  });
};
