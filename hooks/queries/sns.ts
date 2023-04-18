import { useQuery, useQueryClient } from '@tanstack/react-query';
import { snsAPI } from 'api/sns';
import { AxiosError, AxiosResponse } from 'axios';
import { ResponseError } from 'typings/error';
import { FollowListType, FollowingDictionary } from 'typings/sns';

export const useGetFollowerList = (accountId: string) => {
  return useQuery<AxiosResponse<FollowListType>, AxiosError<ResponseError>>(
    ['useGetFollowerList'],
    () => snsAPI.getFollowerList(accountId)
  );
};

export const useGetFollowingList = (accountId: string) => {
  const queryClient = useQueryClient();

  const setFollowingDictionary = (followingList: FollowListType) => {
    const defaultFollowingDictionary: FollowingDictionary = {};

    const result = followingList.reduce(
      (followingDictionary, { nickname, ...rest }) => {
        followingDictionary[nickname] = rest;
        return followingDictionary;
      },
      defaultFollowingDictionary
    );

    return result;
  };

  return useQuery<AxiosResponse<FollowListType>, AxiosError>(
    ['useGetFollowingList'],
    () => snsAPI.getFollowingList(accountId),
    {
      onSuccess: (response) => {
        queryClient.cancelQueries(['isFollowingDictionary']);
        queryClient.fetchQuery({
          queryKey: ['isFollowingDictionary'],
          queryFn: () => setFollowingDictionary(response.data),
        });
      },
    }
  );
};

export const useGetMyReviews = (nickname: string, reviewId?: number) => {
  return useQuery(['reviews', nickname], () =>
    snsAPI.getMyReviews(nickname, reviewId)
  );
};
