import styled from '@emotion/styled';

import BookmarkOutlineIcon from 'public/icons/bookmark_outline.svg';
import BookmarkFillIcon from 'public/icons/bookmark_fill.svg';
import { useAddScrap, useDeleteScrap } from 'hooks/queries/sns';

interface ScrapButtonProps {
  isScrapped: boolean;
  reviewId: number;
  position?: PositionType;
}
type PositionType = 'absolute' | 'static';

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
  position: PositionType;
}

const ScrapButtonView = ({
  isScrapped,
  handleClickScrapButton,
  position,
}: ScrapButtonViewProps) => {
  return (
    <S.ButtonWrap position={position}>
      <S.Button onClick={handleClickScrapButton}>
        {isScrapped ? <BookmarkFillIcon /> : <BookmarkOutlineIcon />}
      </S.Button>
    </S.ButtonWrap>
  );
};

export default ScrapButton;

const S = {
  ButtonWrap: styled.div<{ position: PositionType }>`
    position: ${({ position }) => position};
    top: 10px;
    right: 10px;
  `,
  Button: styled.button``,
};
