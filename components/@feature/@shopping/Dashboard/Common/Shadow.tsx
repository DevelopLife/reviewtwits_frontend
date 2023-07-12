import styled from '@emotion/styled';
import { BOX_SIZES } from 'styles/boxSizes';
import React, { ReactNode } from 'react';

interface BoxSize {
  boxSize: 'SMALL' | 'MEDIUM' | 'LARGE';
}

interface ShadowProps extends BoxSize {
  children: ReactNode;
}

const Shadow = ({ children, boxSize }: ShadowProps) => {
  return <S.Background boxSize={boxSize}>{children}</S.Background>;
};

const S = {
  Background: styled.div<BoxSize>`
    position: relative;

    width: ${({ boxSize }) => BOX_SIZES[boxSize].width}px;
    height: ${({ boxSize }) => BOX_SIZES[boxSize].height}px;

    background: #ffffff;

    box-shadow: 4px 4px 23px rgba(0, 0, 0, 0.14);
    border-radius: 15px;
  `,
};

export default Shadow;
