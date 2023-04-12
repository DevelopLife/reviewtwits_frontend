import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { snsAPI } from 'api/sns';
import { ResponseError } from 'typings/error';
import { redirectErrorHandler } from 'utils/errorHandler';

const useGetSocialProfile = (nickname: string) => {
  const socialProfileQuery = useQuery(
    ['socialProfile', nickname],
    () => snsAPI.getProfile(nickname),
    {
      onError: (err: AxiosError<ResponseError>) => {
        redirectErrorHandler(err);
      },
      enabled: !!nickname,
    }
  );

  return socialProfileQuery;
};

export default useGetSocialProfile;
