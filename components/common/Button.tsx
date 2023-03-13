import { ReactNode, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { Colors } from 'styles/theme';
import theme from 'styles/theme';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color?: Colors;
  large?: boolean;
  name?: string;
  value?: string;
  isActive?: boolean;
  disabled?: boolean;
  children: ReactNode;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  type = 'button',
  children,
  isActive,
  handleClick,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      isActive={isActive}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

interface ButtonStyleProps {
  color?: Colors;
  large?: boolean;
  isActive?: boolean;
}

const StyledButton = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 30px;
  padding: 8px 25px;
  font-size: 16px;
  background: ${({ color }) => (color ? theme.colors[color] : 'white')};

  ${({ color }) => {
    switch (color) {
      case 'primary':
        return css`
          color: white;
        `;
      case 'black':
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



  ${({ isActive }) =>
    isActive &&
    css`
      background: ${theme.colors.black};
      color: white;
    `}

  &:not(:disabled):hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:disabled {
    background: ${theme.colors.gray_4};
  }
`;

export default Button;
