import { useQuery } from '@tanstack/react-query';

import socialAPI from 'api/social';

const useGetSocialProfile = (nickname: string) => {
  const socialProfileQuery = useQuery(
    ['socialProfile'],
    () => socialAPI.getProfile(nickname),
    {
      enabled: !!nickname,
    }
  );

  return socialProfileQuery;
};

export default useGetSocialProfile;
