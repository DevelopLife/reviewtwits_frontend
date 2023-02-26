import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { Colors } from 'styles/theme';
import theme from 'styles/theme';

interface ButtonProps {
  color?: Colors;
  large?: boolean;
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 30px;
  padding: 8px 33px;
  font-size: 16px;
  background: ${({ color }) => (color ? theme.colors[color] : 'white')};

  ${({ color }) => {
    switch (color) {
      case 'primary':
        return css`
          color: white;
        `;
      default:
        return css`
          border: 1px solid black;
        `;
    }
  }}

  ${({ large }) =>
    large &&
    css`
      font-size: 18px;
      padding: 18px;
    `}

  &:focus {
    background: ${theme.colors.black};
    color: white;
  }
`;

export default Button;
