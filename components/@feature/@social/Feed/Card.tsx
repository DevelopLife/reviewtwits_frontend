import { ReactNode } from 'react';

import styled from '@emotion/styled';
import { Colors } from 'styles/theme';

interface CardProps {
  color?: Colors;
  children: ReactNode;
}

const Card = ({ color, children }: CardProps) => {
  return <S.Box color={color}>{children}</S.Box>;
};

export default Card;

const S = {
  Box: styled.div<{ color?: Colors }>`
    display: flex;
    justify-content: center;

    width: 510px;
    border-radius: 20px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.21);

    background: ${({ color, theme }) => color && theme.colors[color]};
    color: ${({ color }) => color === 'text_black_100' && 'white'};
  `,
};
