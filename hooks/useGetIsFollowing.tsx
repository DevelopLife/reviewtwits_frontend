import { useQuery } from '@tanstack/react-query';

import { queryKey } from 'hooks/queries';
import { useGetFollowingList } from 'hooks/queries/sns';
import useUserProfile from 'hooks/queries/users';
import { FollowingDictionary } from 'typings/sns';

export const useGetIsFollowing = (nickname: string) => {
  const userData = useUserProfile();
  useGetFollowingList(userData?.nickname || '');
  const { data: isFollowingDictionary } = useQuery<FollowingDictionary>(
    queryKey.followingDictionary(),
    {
      networkMode: 'offlineFirst',
    }
  );

  if (!isFollowingDictionary) {
    return false;
  }

  const isFollowing = isFollowingDictionary?.[nickname] ? true : false;
  return isFollowing;
};

export default useGetIsFollowing;
