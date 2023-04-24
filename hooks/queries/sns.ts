import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { snsAPI } from 'api/sns';
import { FOLLOWING_DICTIONARY_KEY } from 'hooks/useFollowAndUnFollow';
import { ResponseError } from 'typings/error';
import { FollowListType, FollowingDictionary } from 'typings/sns';

export const useGetFollowerList = (nickname: string) => {
  return useQuery<AxiosResponse<FollowListType>, AxiosError<ResponseError>>(
    ['useGetFollowerList'],
    () => snsAPI.getFollowerList(nickname),
    {
      enabled: !!nickname,
    }
  );
};

export const useGetFollowingList = (nickname: string) => {
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
    () => snsAPI.getFollowingList(nickname),
    {
      onSuccess: (response) => {
        queryClient.cancelQueries(FOLLOWING_DICTIONARY_KEY);
        queryClient.fetchQuery({
          queryKey: FOLLOWING_DICTIONARY_KEY,
          queryFn: () => setFollowingDictionary(response.data),
        });
      },
      enabled: !!nickname,
    }
  );
};

export const useGetMyReviews = (nickname: string, reviewId?: number) => {
  return useQuery(['reviews', nickname], () =>
    snsAPI.getMyReviews(nickname, reviewId)
  );
};
