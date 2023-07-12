import { ReactNode, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { Colors } from 'styles/theme';
import theme from 'styles/theme';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color?: Colors;
  fontColor?: Colors;
  borderType?: 'none' | 'solid';
  large?: boolean;
  name?: string;
  value?: string;
  isActive?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  type = 'button',
  children,
  isActive,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton type={type} isActive={isActive} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

interface ButtonStyleProps {
  color?: Colors;
  fontColor?: Colors;
  borderType?: 'none' | 'solid';
  large?: boolean;
  isActive?: boolean;
}

const StyledButton = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 30px;
  padding: 8px 25px;
  font-size: 16px;
  background: ${({ color }) => (color ? theme.colors[color] : 'white')};
  width: 100%;

  ${({ color, borderType, fontColor }) => {
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
          color: ${fontColor ? fontColor : 'black'};
          border: ${borderType === 'none' ? borderType : '1px solid black'};
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

  &:disabled:hover {
    cursor: default;
    opacity: 1;
  }

  &:disabled {
    background: ${theme.colors.gray_3};
  }
`;

export default Button;
