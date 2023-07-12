import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

interface ProjectPageButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ProjectPageButton = ({
  children,
  ...rest
}: ProjectPageButtonProps) => {
  return (
    <S.Button type="button" {...rest}>
      {children}
    </S.Button>
  );
};

const S = {
  Button: styled.button`
    width: 172px;
    height: 56px;
    border: none;
    border-radius: 15px;

    font-weight: 500;
    font-size: 18px;
    background-color: #fc4a55;
    color: #ffffff;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
};
