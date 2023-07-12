import styled from '@emotion/styled';
import Image from 'next/image';

import type { WrapProps } from 'typings/wrapperProps';

interface ProductBoxProps extends WrapProps {
  imageUrl: string | undefined;
  title: string | undefined;
}

const ProductBox = ({ imageUrl, title, children }: ProductBoxProps) => {
  return (
    <S.ProductBoxContainer>
      <Image
        src={imageUrl || 'default'}
        width={130}
        height={130}
        alt="productImageUrl"
      />
      <S.Right>
        <S.Title>{title}</S.Title>
        {children}
      </S.Right>
    </S.ProductBoxContainer>
  );
};

export default ProductBox;

const S = {
  ProductBoxContainer: styled.div`
    display: flex;
  `,
  Image: styled.span`
    display: inline-block;
    width: 150px;
    height: 150px;
    background-color: black;
  `,
  Title: styled.div`
    margin-bottom: 11px;
    color: ${({ theme }) => theme.colors.gray_7};
  `,
  Right: styled.div`
    padding-left: 17px;
  `,
};
