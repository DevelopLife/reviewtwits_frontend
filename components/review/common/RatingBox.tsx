import Image from 'next/image';

import * as S from './RatingBox.styles';
import StarRating from './StarRating';

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
        <StarRating initialScore={initialScore} setValue={setValue} />
      </div>
    </S.Box>
  );
};

export default RatingBox;
