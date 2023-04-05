import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface BoxSize {
  boxWidth: number;
  boxHeight: number;
}

interface ShadowProps extends BoxSize {
  children: ReactNode;
}

const Shadow = ({ children, boxWidth, boxHeight }: ShadowProps) => {
  return (
    <S.Background boxWidth={boxWidth} boxHeight={boxHeight}>
      {children}
    </S.Background>
  );
};

const S = {
  Background: styled.div<BoxSize>`
    position: relative;

    width: ${({ boxWidth }) => boxWidth}px;
    height: ${({ boxHeight }) => boxHeight}px;

    background: #ffffff;

    box-shadow: 4px 4px 23px rgba(0, 0, 0, 0.14);
    border-radius: 15px;
  `,
};

export default Shadow;
