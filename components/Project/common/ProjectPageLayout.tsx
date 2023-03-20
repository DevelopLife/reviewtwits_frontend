import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface ProjectPageLayoutProps {
  children: ReactNode;
}

export const ProjectPageLayout = ({ children }: ProjectPageLayoutProps) => {
  return <S.Background>{children}</S.Background>;
};

const S = {
  Background: styled.div`
    min-height: 100vh;
    background-color: #f8f8f8;
  `,
};
