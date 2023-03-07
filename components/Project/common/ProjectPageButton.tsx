import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface ProjectPageButtonProps {
  children: ReactNode;
}

export const ProjectPageButton = ({ children }: ProjectPageButtonProps) => {
  return <S.Button type="button">{children}</S.Button>;
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
