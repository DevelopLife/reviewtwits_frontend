import React from 'react';
import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface SocialMainLayoutProps {
  children: ReactNode;
}

const SocialMainLayout = ({ children }: SocialMainLayoutProps) => {
  return <S.Layout>{children}</S.Layout>;
};

export default SocialMainLayout;

const S = {
  Layout: styled.div`
    display: flex;
    gap: 40px;
  `,
};
