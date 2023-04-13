import { useMutation, useQueryClient } from '@tanstack/react-query';

import { snsAPI } from 'api/sns';
import { ReactionType } from 'typings/reviews';

const useReaction = (reviewId: number) => {
  const queryClient = useQueryClient();
  const { mutate: addReactionMutate } = useMutation(
    (reaction: ReactionType) => snsAPI.addReaction(reviewId, reaction),
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(['feed']);
      },
    }
  );
  const { mutate: deleteReactionMutate } = useMutation(
    () => snsAPI.deleteReaction(reviewId),
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(['feed']);
      },
    }
  );

  return {
    doReact: addReactionMutate,
    cancelReact: deleteReactionMutate,
  };
};

export default useReaction;
