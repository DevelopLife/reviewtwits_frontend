import { useMutation, useQueryClient } from '@tanstack/react-query';
import { snsAPI } from 'api/sns';
import { queryKey } from 'hooks/queries';

const useScrap = (reviewId: number) => {
  const queryClient = useQueryClient();
  const { mutate: addScrapMutate } = useMutation(
    () => snsAPI.addScrap(reviewId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey.socialInfiniteFeed());
        queryClient.invalidateQueries(queryKey.review(reviewId));
      },
    }
  );
  const { mutate: deleteScrapMutate } = useMutation(
    () => snsAPI.deleteScrap(reviewId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey.socialInfiniteFeed());
        queryClient.invalidateQueries(queryKey.review(reviewId));
      },
    }
  );

  return {
    doScrap: addScrapMutate,
    cancelScrap: deleteScrapMutate,
  };
};

export default useScrap;
