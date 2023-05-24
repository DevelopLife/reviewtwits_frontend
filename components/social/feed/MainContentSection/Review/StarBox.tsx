import Image from 'next/image';
import styled from '@emotion/styled';

import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

interface StarBoxProps {
  score?: number;
  starSize?: number;
}

const StarBox = ({ score, starSize }: StarBoxProps) => {
  const props = {
    score,
    starSize,
  };

  return <StarBoxView {...props} />;
};

interface StarBoxViewProps {
  score?: number;
  starSize?: number;
}

const StarBoxView = ({ score, starSize }: StarBoxViewProps) => {
  if (!score) return null;
  return (
    <S.Box>
      {Array.from({ length: 5 }).map((_, i) => (
        <S.Star
          key={i}
          src={score <= i ? EmptyStarImg : FullStarImg}
          alt="star"
          starSize={starSize}
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

  Star: styled(Image)<Pick<StarBoxViewProps, 'starSize'>>`
    width: ${({ starSize }) => (starSize ? starSize : 15)}px;
    height: ${({ starSize }) => (starSize ? starSize : 15)}px;
  `,
};
