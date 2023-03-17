import { useState, MouseEvent } from 'react';
import Image from 'next/image';

import * as S from './RatingBox.styles';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

const RatingBox = () => {
  const [score, setScore] = useState(0);
  const [hoverScore, setHoverScore] = useState(0);

  const changeScore = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedStarNumber = Number(e.currentTarget.id);

    setScore(selectedStarNumber);
  };

  const handleHoverStar = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedStarNumber = Number(e.currentTarget.id);

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
        <S.ProductName>오뚜기 콤비네이션 피자 415g 오뚜기, 2개</S.ProductName>
        <S.StarRating onMouseLeave={handleLeaveStar}>
          {Array.from({ length: 5 }).map((_, i) => (
            <S.Star
              id={(i + 1).toString()}
              key={i}
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
