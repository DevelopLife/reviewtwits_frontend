import styled from '@emotion/styled';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <S.Button type="button" {...rest}>
      {children}
    </S.Button>
  );
};

const S = {
  Button: styled.button`
    background-color: transparent;
    border: none;
    outline: none;

    width: 126px;
    height: 40px;

    border: 1px solid rgba(189, 189, 189, 1);
    border-radius: 10px;
  `,
};

export default Button;
