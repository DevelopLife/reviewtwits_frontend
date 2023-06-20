import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface DashboardPageLayoutProps {
  children: ReactNode;
}

const DashboardPageLayout = ({ children }: DashboardPageLayoutProps) => {
  return <S.Container>{children}</S.Container>;
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 240px;

    width: ${({ theme }) => theme.devices.desktop}px;
    height: 1706px;
  `,
};

export default DashboardPageLayout;
