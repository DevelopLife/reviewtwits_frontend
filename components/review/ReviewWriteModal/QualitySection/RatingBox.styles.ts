import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface StarStyleProps {
  isActive: boolean;
}

const Box = styled.div`
  display: flex;
  gap: 20px;

  padding: 12px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 14px 0;
  }
`;

const ProductName = styled.span`
  font-size: 16px;
  color: black;
`;

const StarRating = styled.div`
  display: flex;
  gap: 5px;
`;

const Star = styled.button<StarStyleProps>`
  outline: none;
  background: none;
  border: none;
  padding: 0;

  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      @keyframes expand {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
      }

      animation: expand 0.3s reverse;
    `}
`;

export { Box, ProductName, StarRating, Star };
