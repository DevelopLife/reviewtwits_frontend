import { useQuery } from '@tanstack/react-query';
import socialAPI from 'api/social';

const useGetSocialReviews = (nickname: string) => {
  return useQuery(['socialMyReviews'], () => socialAPI.getMyReviews(nickname), {
    enabled: !!nickname,
  });
};

export default useGetSocialReviews;
