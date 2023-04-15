import Image from 'next/image';
import styled from '@emotion/styled';

import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

interface StarBoxProps {
  score?: number;
}

const StarBox = ({ score }: StarBoxProps) => {
  const props = {
    score,
  };

  return <StarBoxView {...props} />;
};

interface StarBoxViewProps {
  score?: number;
}

const StarBoxView = ({ score }: StarBoxViewProps) => {
  if (!score) return null;
  return (
    <S.Box>
      {Array.from({ length: 5 }).map((_, i) => (
        <S.Star
          key={i}
          src={score <= i ? EmptyStarImg : FullStarImg}
          alt="star"
        />
      ))}
    </S.Box>
  );
};

export default StarBox;

const S = {
  Box: styled.div`
    display: flex;
    gap: 3px;
  `,

  Star: styled(Image)`
    width: 15px;
    height: 15px;
  `,
};
