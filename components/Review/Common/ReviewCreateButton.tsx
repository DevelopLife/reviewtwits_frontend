import { ReactNode } from 'react';

import styled from '@emotion/styled';
import { Colors } from 'styles/theme';

export interface ReviewCreateButtonProps {
  color: Colors;
  disabled: boolean;
  children: ReactNode;
}

const ReviewCreateButton = ({ children, ...rest }: ReviewCreateButtonProps) => {
  return (
    <S.Button type="submit" {...rest}>
      {children}
    </S.Button>
  );
};

export default ReviewCreateButton;

const S = {
  Button: styled.button<{ color: Colors }>`
    font-size: 18px;
    font-weight: 600;
    padding: 17px 37px;
    border-radius: 15px;

    color: white;
    background: ${({ theme, color }) => theme.colors[color]};

    &:disabled {
      background: ${({ theme }) => theme.colors.gray_3};
      cursor: default;

      :hover {
        opacity: 1;
      }
    }
  `,
};
