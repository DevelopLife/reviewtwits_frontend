import { useQuery } from '@tanstack/react-query';
import { useGetFollowingList } from 'hooks/queries/sns';
import { FOLLOWING_DICTIONARY_KEY } from 'hooks/useFollowAndUnFollow';
import useUserProfile from 'hooks/useUserProfile';
import { FollowingDictionary } from 'typings/sns';

export const useGetIsFollowing = (nickname: string) => {
  const userData = useUserProfile();
  useGetFollowingList(userData.nickname);
  const { data: isFollowingDictionary } = useQuery<FollowingDictionary>(
    FOLLOWING_DICTIONARY_KEY,
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
