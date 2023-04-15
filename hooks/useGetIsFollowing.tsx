import { useGetFollowingList } from 'hooks/queries/sns';
import useUserProfile from 'hooks/useUserProfile';

const useGetIsFolliwng = (nickname: string) => {
  const userData = useUserProfile();
  const { data } = useGetFollowingList(userData.accountId);

  const isFollowing = data?.data.some(
    ({ nickname: followingUserNickanme }) => followingUserNickanme === nickname
  );

  return isFollowing;
};

export default useGetIsFolliwng;
