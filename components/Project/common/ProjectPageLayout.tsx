import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Header from 'components/Common/Header/Header';

interface ProjectPageLayoutProps {
  children: ReactNode;
}

export const ProjectPageLayout = ({ children }: ProjectPageLayoutProps) => {
  return (
    <S.Background>
      <Header />
      <S.Margin />
      {children}
    </S.Background>
  );
};

const S = {
  Background: styled.div`
    min-height: 100vh;
    max-width: 1920px;
    background-color: #f8f8f8;
  `,
  Margin: styled.div`
    height: 100px;
  `,
};
