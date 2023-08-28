import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from 'styles/theme';

import * as S from '../ReviewWriteModal.styles';

interface ThumbButtonStyleProps {
  isActive: boolean;
}

const ReviewFor = S.ReviewFor;

const SatisfactionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ThumbButtonBox = styled.div`
  display: flex;
  gap: 10px;
  height: fit-content;
`;

const ThumbButton = styled.button<ThumbButtonStyleProps>`
  border-radius: 50%;
  background: white;
  padding: 7px 7px 4px 7px;

  border: 1px solid ${theme.colors.gray_2};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${theme.colors.blue_0};

      > img {
        filter: invert();
      }
    `};
`;

export { SatisfactionBox, ReviewFor, ThumbButtonBox, ThumbButton };
