import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { Colors } from 'styles/theme';

interface ButtonProps {
  color: Colors;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ color, children, ...rest }: ButtonProps) => {
  return (
    <S.StyledButton color={color} {...rest}>
      {children}
    </S.StyledButton>
  );
};

export default Button;

const S = {
  StyledButton: styled.button<{ color: Colors }>`
    color: white;
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 37px;

    background: ${({ theme, color }) => theme.colors[color]};
  `,
};
