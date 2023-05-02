import { useMutation, useQueryClient } from '@tanstack/react-query';
import { snsAPI } from 'api/sns';

const useScrap = (reviewId: number) => {
  const queryClient = useQueryClient();
  const { mutate: addScrapMutate } = useMutation(
    () => snsAPI.addScrap(reviewId),
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(['feed']); //
      },
    }
  );
  const { mutate: deleteScrapMutate } = useMutation(
    () => snsAPI.deleteScrap(reviewId),
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(['feed']); //
      },
    }
  );

  return {
    doScrap: addScrapMutate,
    cancelScrap: deleteScrapMutate,
  };
};

export default useScrap;
