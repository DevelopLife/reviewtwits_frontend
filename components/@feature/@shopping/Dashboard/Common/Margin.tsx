import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface MarginType {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

interface MarginProps extends MarginType {
  children: ReactNode;
}

const Margin = ({
  children,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: MarginProps) => {
  return (
    <S.Margin
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </S.Margin>
  );
};

export default Margin;

const S = {
  Margin: styled.div<MarginType>`
    margin-top: ${({ marginTop }) => marginTop}px;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    margin-left: ${({ marginLeft }) => marginLeft}px;
    margin-right: ${({ marginRight }) => marginRight}px;
  `,
};
