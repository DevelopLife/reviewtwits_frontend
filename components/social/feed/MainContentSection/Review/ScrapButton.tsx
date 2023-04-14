import styled from '@emotion/styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { snsAPI } from 'api/sns';

import BookmarkOutlineIcon from 'public/icons/bookmark_outline.svg';
import BookmarkFillIcon from 'public/icons/bookmark_fill.svg';

interface ScrapButtonProps {
  isScrapped: boolean;
  reviewId: number;
}

const ScrapButton = ({ isScrapped, reviewId }: ScrapButtonProps) => {
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

  const handleClickScrapButton = () => {
    isScrapped ? deleteScrapMutate() : addScrapMutate();
  };

  const props = {
    isScrapped,
    handleClickScrapButton,
  };

  return <ScrapButtonView {...props} />;
};

interface ScrapButtonViewProps {
  isScrapped: boolean;
  handleClickScrapButton: () => void;
}

const ScrapButtonView = ({
  isScrapped,
  handleClickScrapButton,
}: ScrapButtonViewProps) => {
  return (
    <S.Button onClick={handleClickScrapButton}>
      {isScrapped ? <BookmarkFillIcon /> : <BookmarkOutlineIcon />}
    </S.Button>
  );
};

export default ScrapButton;

const S = {
  Button: styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
  `,
};
