import Image from 'next/image';
import styled from '@emotion/styled';

import { spinner } from 'styles/animation';
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
        <CommonS.NullImage>No Image</CommonS.NullImage>
      )}
      <div>
        <S.ProductName>{productName}</S.ProductName>
        <StarRating initialScore={initialScore} setValue={setValue} />
      </div>
    </S.Box>
  );
};

export default RatingBox;

const CommonS = {
  NullImage: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 150px;
    font-size: 20px;
    background: ${({ theme }) => theme.colors.gray_1};
    color: ${({ theme }) => theme.colors.gray_5};
  `,
};

const S = {
  Box: styled.div`
    display: flex;
    gap: 20px;

    padding: 12px 0;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 12px;

      font-weight: 500;
      padding: 5px 0;
    }
  `,

  LoadingBox: styled(CommonS.NullImage)``,

  Spinner: styled.div`
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: ${({ theme }) => theme.colors.blue_0};
    animation: ${spinner} 1s linear infinite;
  `,

  ProductName: styled.span`
    font-size: 16px;
    color: black;
  `,
};
