import type { ReactNode } from 'react';
import * as S from './InstallPageButtons.styles';

interface InstallPageButtonsProps {
  children: ReactNode;
}

const InstallPageButtons = ({ children }: InstallPageButtonsProps) => {
  return <S.ButtonsWrap>{children}</S.ButtonsWrap>;
};

export default InstallPageButtons;
