import { useQuery } from '@tanstack/react-query';
import { usersAPI } from 'api/users';

const USER_PROFILE_QUERY = 'userProfile';

const useUserProfile = () => {
  const { data: userData } = useQuery(
    [USER_PROFILE_QUERY],
    usersAPI.getUserProfile
  );

  return userData;
};

export default useUserProfile;
