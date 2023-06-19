import styled from '@emotion/styled';

import useScrap from 'hooks/useScrap';

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
  const { doScrap, cancelScrap } = useScrap(reviewId);

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
