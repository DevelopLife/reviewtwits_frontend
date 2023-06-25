import {
  useGetFollowingList,
  useIsFollowingDictionary,
} from 'hooks/queries/sns';
import useUserProfile from 'hooks/queries/users';

export const useGetIsFollowing = (nickname: string) => {
  const userData = useUserProfile();
  useGetFollowingList(userData?.nickname || '');
  const { data: isFollowingDictionary } = useIsFollowingDictionary();

  if (!isFollowingDictionary) {
    return false;
  }

  const isFollowing = isFollowingDictionary?.[nickname] ? true : false;
  return isFollowing;
};

export default useGetIsFollowing;
