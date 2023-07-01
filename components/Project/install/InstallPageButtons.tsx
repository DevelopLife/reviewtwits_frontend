import type { ReactNode } from 'react';
import styled from '@emotion/styled';

interface InstallPageButtonsProps {
  children: ReactNode;
}

const InstallPageButtons = ({ children }: InstallPageButtonsProps) => {
  return <S.ButtonsWrap>{children}</S.ButtonsWrap>;
};

export default InstallPageButtons;

const S = {
  ButtonsWrap: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};
