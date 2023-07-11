import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface StatisticsPageLayoutProps {
  children: ReactNode;
}

const StatisticsPageLayout = ({ children }: StatisticsPageLayoutProps) => {
  return <S.Container>{children}</S.Container>;
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 240px;

    width: ${({ theme }) => theme.devices.desktop}px;
    height: auto;
  `,
};

export default StatisticsPageLayout;
