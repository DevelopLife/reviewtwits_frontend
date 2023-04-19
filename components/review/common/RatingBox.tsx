import { useState, MouseEvent } from 'react';
import Image from 'next/image';

import * as S from './RatingBox.styles';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

interface RatingBoxProps {
  productName?: string;
  score?: number;
  setValue: (name: string, value: number) => void;
}

const RatingBox = ({
  productName,
  score: initialScore,
  setValue,
}: RatingBoxProps) => {
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

  return (
    <S.Box>
      <Image
        width={150}
        height={150}
        src=""
        alt=""
        style={{ background: 'gray' }}
      />
      <div>
        <S.ProductName>
          {productName
            ? productName
            : '오뚜기 콤비네이션 피자 415g 오뚜기, 2개'}
        </S.ProductName>
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
      </div>
    </S.Box>
  );
};

export default RatingBox;
