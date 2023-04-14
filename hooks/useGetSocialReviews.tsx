import { useQuery } from '@tanstack/react-query';

import { snsAPI } from 'api/sns';

const useGetSocialReviews = (nickname: string) => {
  return useQuery(['socialMyReviews'], () => snsAPI.getMyReviews(nickname), {
    enabled: !!nickname,
  });
};

export default useGetSocialReviews;
