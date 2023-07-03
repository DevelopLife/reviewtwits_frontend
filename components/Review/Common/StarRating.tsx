import { useState, MouseEvent } from 'react';
import Image from 'next/image';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { expand } from 'styles/animation';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

interface StarRatingProps {
  initialScore?: number;
  setValue: (name: string, value: number) => void;
}

const StarRating = ({ initialScore, setValue }: StarRatingProps) => {
  const [score, setScore] = useState(initialScore || 0);
  const [hoverScore, setHoverScore] = useState(initialScore || 0);

  const changeScore = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedStarNumber = Number(e.currentTarget.value);

    setScore(selectedStarNumber);
    setValue('score', selectedStarNumber);
  };

  const handleHoverStar = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedStarNumber = Number(e.currentTarget.value);

    setHoverScore(selectedStarNumber);
  };

  const handleLeaveStar = () => setHoverScore(score);

  const props = {
    score,
    hoverScore,
    changeScore,
    handleHoverStar,
    handleLeaveStar,
  };

  return <StarRatingView {...props} />;
};

interface StarRatingViewProps {
  score: number;
  hoverScore: number;
  changeScore: (e: MouseEvent<HTMLButtonElement>) => void;
  handleHoverStar: (e: MouseEvent<HTMLButtonElement>) => void;
  handleLeaveStar: () => void;
}

const StarRatingView = ({
  score,
  hoverScore,
  changeScore,
  handleHoverStar,
  handleLeaveStar,
}: StarRatingViewProps) => {
  return (
    <S.StarRating onMouseLeave={handleLeaveStar}>
      {Array.from({ length: 5 }).map((_, i) => (
        <S.Star
          key={i}
          type="button"
          value={i + 1}
          isActive={score > i}
          onClick={changeScore}
          onMouseEnter={handleHoverStar}
        >
          <Image
            width={30}
            height={30}
            src={hoverScore <= i ? EmptyStarImg : FullStarImg}
            alt=""
          />
        </S.Star>
      ))}
    </S.StarRating>
  );
};

export default StarRating;

interface StarStyleProps {
  isActive: boolean;
}

const S = {
  StarRating: styled.div`
    display: flex;
    gap: 5px;
  `,

  Star: styled.button<StarStyleProps>`
    outline: none;
    background: none;
    border: none;
    padding: 0;

    cursor: pointer;

    ${({ isActive }) =>
      isActive &&
      css`
        animation: ${expand} 0.3s reverse;
      `};
  `,
};
