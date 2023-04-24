import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { snsAPI } from 'api/sns';
import { ResponseError } from 'typings/error';
import { redirectErrorHandler } from 'utils/errorHandler';

const useGetSocialProfile = (nickname: string) => {
  const socialProfileQuery = useQuery(
    ['socialProfile', nickname],
    () => snsAPI.getProfile(nickname),
    {
      enabled: !!nickname,
      onError: (err: AxiosError<ResponseError>) => redirectErrorHandler(err),
    }
  );

  return socialProfileQuery;
};

export default useGetSocialProfile;
