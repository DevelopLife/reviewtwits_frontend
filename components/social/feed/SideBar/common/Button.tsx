import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { Colors } from 'styles/theme';

interface ButtonProps {
  color: Colors;
  children: ReactNode;
}

const Button = ({ color, children }: ButtonProps) => {
  return <S.StyledButton color={color}>{children}</S.StyledButton>;
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
