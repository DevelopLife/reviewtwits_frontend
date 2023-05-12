import styled from '@emotion/styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { snsAPI } from 'api/sns';

import BookmarkOutlineIcon from 'public/icons/bookmark_outline.svg';
import BookmarkFillIcon from 'public/icons/bookmark_fill.svg';

interface ScrapButtonProps {
  isScrapped: boolean;
  reviewId: number;
  position?: 'absolute' | 'static';
}

const ScrapButton = ({
  isScrapped,
  reviewId,
  position = 'absolute',
}: ScrapButtonProps) => {
  const queryClient = useQueryClient();
  const { mutate: addScrapMutate } = useMutation(
    () => snsAPI.addScrap(reviewId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['useGetInfiniteFeed']);
        queryClient.invalidateQueries(['review', reviewId]);
      },
    }
  );
  const { mutate: deleteScrapMutate } = useMutation(
    () => snsAPI.deleteScrap(reviewId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['useGetInfiniteFeed']);
        queryClient.invalidateQueries(['review', reviewId]);
      },
    }
  );

  const handleClickScrapButton = () => {
    isScrapped ? deleteScrapMutate() : addScrapMutate();
  };

  const props = {
    isScrapped,
    handleClickScrapButton,
    position,
  };

  return <ScrapButtonView {...props} />;
};

interface ScrapButtonViewProps {
  isScrapped: boolean;
  handleClickScrapButton: () => void;
  position: 'absolute' | 'static';
}

const ScrapButtonView = ({
  isScrapped,
  handleClickScrapButton,
  position,
}: ScrapButtonViewProps) => {
  return (
    <S.Button onClick={handleClickScrapButton} position={position}>
      {isScrapped ? <BookmarkFillIcon /> : <BookmarkOutlineIcon />}
    </S.Button>
  );
};

export default ScrapButton;

const S = {
  Button: styled.button<{ position: 'absolute' | 'static' }>`
    position: ${({ position }) => position};
    top: 10px;
    right: 10px;
  `,
};
