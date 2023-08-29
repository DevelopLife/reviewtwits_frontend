import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface CommonChartButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const CommonChartButton = ({ onClick, children }: CommonChartButtonProps) => {
  return <S.ChartChageButton onClick={onClick}>{children}</S.ChartChageButton>;
};

export default CommonChartButton;

const S = {
  ChartChageButton: styled.button``,
};
