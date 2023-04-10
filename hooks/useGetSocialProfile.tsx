import { useQuery } from '@tanstack/react-query';
import { snsAPI } from 'api/sns';

const useGetSocialProfile = (nickname: string) => {
  const socialProfileQuery = useQuery(
    ['socialProfile'],
    () => snsAPI.getProfile(nickname),
    {
      enabled: !!nickname,
    }
  );

  return socialProfileQuery;
};

export default useGetSocialProfile;
