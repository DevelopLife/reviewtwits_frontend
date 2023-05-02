import { useMutation, useQueryClient } from '@tanstack/react-query';
import { snsAPI } from 'api/sns';

const INFINITE_FEED_QUERY_KEY = 'useGetInfiniteFeed';

const useScrap = (reviewId: number) => {
  const queryClient = useQueryClient();
  const { mutate: addScrapMutate } = useMutation(
    () => snsAPI.addScrap(reviewId),
    {
      onSuccess: () => {
        return queryClient.invalidateQueries([INFINITE_FEED_QUERY_KEY]);
      },
    }
  );
  const { mutate: deleteScrapMutate } = useMutation(
    () => snsAPI.deleteScrap(reviewId),
    {
      onSuccess: () => {
        return queryClient.invalidateQueries([INFINITE_FEED_QUERY_KEY]);
      },
    }
  );

  return {
    doScrap: addScrapMutate,
    cancelScrap: deleteScrapMutate,
  };
};

export default useScrap;
