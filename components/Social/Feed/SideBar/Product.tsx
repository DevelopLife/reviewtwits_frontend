import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

import FullStarImg from 'public/images/full_star_img.png';
import { ProductType } from 'typings/reviews';

interface ProductProps {
  data: ProductType;
}

const Product = ({ data }: ProductProps) => {
  return (
    <Link target="_blank" href={data.url}>
      <S.Box>
        <Image
          width={84}
          height={84}
          unoptimized
          src={data?.productImageUrl}
          alt=""
        />
        <S.ProductInfoBox>
          <S.ProductName>{data?.productName}</S.ProductName>
          <S.MetaInfoBox>
            <S.StarRateBox>
              <Image width={15} height={15} src={FullStarImg} alt="star" />
              <S.StarRate>{data?.score}</S.StarRate>
            </S.StarRateBox>
            <S.ReviewCntText>32개의 상품평</S.ReviewCntText>
          </S.MetaInfoBox>
        </S.ProductInfoBox>
      </S.Box>
    </Link>
  );
};

export default Product;

const MetaText = styled.span`
  color: ${({ theme }) => theme.colors.gray_4};
  line-height: normal;
`;

const S = {
  Box: styled.div`
    display: flex;
    gap: 12px;

    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  `,

  ProductInfoBox: styled.div`
    width: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  ProductName: styled.span`
    font-size: 18px;
    line-height: 1.2;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,

  ProductImage: styled(Image)`
    width: 84px;
    height: 84px;

    background: gray;
  `,

  MetaInfoBox: styled.div`
    display: flex;
    align-items: center;
  `,

  StarRateBox: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    ::after {
      content: '|';
      margin-left: 3.5px;
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.gray_6};
    }
  `,

  StarRate: styled(MetaText)``,

  ReviewCntText: styled(MetaText)``,
};
