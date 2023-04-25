import { useState, MouseEvent } from 'react';
import Image from 'next/image';

import * as S from './RatingBox.styles';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

interface RatingBoxProps {
  isFetching?: boolean;
  productName?: string;
  productImgUrl?: string;
  score?: number;
  setValue: (name: string, value: number) => void;
}

const RatingBox = ({
  isFetching,
  productName,
  productImgUrl,
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

  if (!productName) return null;
  return (
    <S.Box>
      {productImgUrl ? (
        <Image width={150} height={150} src={productImgUrl} alt="" />
      ) : isFetching ? (
        <S.LoadingBox>
          <S.Spinner />
        </S.LoadingBox>
      ) : (
        <S.NullImage>No Image</S.NullImage>
      )}
      <div>
        <S.ProductName>{productName}</S.ProductName>
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
