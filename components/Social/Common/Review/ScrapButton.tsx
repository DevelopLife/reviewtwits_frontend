import styled from '@emotion/styled';

import BookmarkOutlineIcon from 'public/icons/bookmark_outline.svg';
import BookmarkFillIcon from 'public/icons/bookmark_fill.svg';
import { useAddScrap, useDeleteScrap } from 'hooks/queries/sns';

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
  const { mutate: doScrap } = useAddScrap(reviewId);
  const { mutate: cancelScrap } = useDeleteScrap(reviewId);

  const handleClickScrapButton = () => {
    isScrapped ? cancelScrap() : doScrap();
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
