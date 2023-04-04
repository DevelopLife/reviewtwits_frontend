import Image from 'next/image';
import styled from '@emotion/styled';

import FullStarImg from 'public/images/full_star_img.png';

const Product = () => {
  return (
    <S.Box>
      <S.ProductImage src="" alt="" />
      <S.ProductInfoBox>
        <S.ProductName>마이셰프 이금기 마라우육면 밀키트</S.ProductName>
        <S.MetaInfoBox>
          <S.StarRateBox>
            <Image width={15} height={15} src={FullStarImg} alt="" />
            <S.StarRate>4.9</S.StarRate>
          </S.StarRateBox>
          <S.ReviewCntText>32개의 상품평</S.ReviewCntText>
        </S.MetaInfoBox>
      </S.ProductInfoBox>
    </S.Box>
  );
};

export default Product;

const MetaText = styled.span`
  color: ${({ theme }) => theme.colors.gray_5};
  line-height: normal;
`;

const S = {
  Box: styled.div`
    display: flex;
    gap: 12px;
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
      color: ${({ theme }) => theme.colors.gray_7};
    }
  `,

  StarRate: styled(MetaText)``,

  ReviewCntText: styled(MetaText)``,
};
