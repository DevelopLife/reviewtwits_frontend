import { useMutation, useQueryClient } from '@tanstack/react-query';

import { snsAPI } from 'api/sns';
import { ReactionType } from 'typings/reviews';

const useReaction = (reviewId: number) => {
  const queryClient = useQueryClient();
  const { mutate: addReactionMutate } = useMutation(
    (reaction: ReactionType) => snsAPI.toggleReaction(reviewId, reaction),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['useGetInfiniteFeed']);
        queryClient.invalidateQueries(['review', reviewId]);
      },
    }
  );

  return {
    doReact: addReactionMutate,
  };
};

export default useReaction;
