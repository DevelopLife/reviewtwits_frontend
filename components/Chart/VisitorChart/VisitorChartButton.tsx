import type { ReactNode } from 'react';
import styled from '@emotion/styled';

import DownTriangleIcon from 'public/icons/down_triangle.svg';

type Direction = 'left' | 'right';
interface VisitorChartButtonProps {
  direction: Direction;
  disabled: boolean;
  onClick: () => void;
}

const VisitorChartButton = ({
  direction,
  disabled,
  onClick,
}: VisitorChartButtonProps) => {
  // TODO: Hook 호출

  // viewLogic, state를 props로 View 단에 넘겨줌

  return (
    <VisitorChartButtonView
      disabled={disabled}
      onClick={onClick}
      direction={direction}
    >
      <DownTriangleIcon />
    </VisitorChartButtonView>
  );
};

interface VisitorChartButtonViewProps {
  onClick: () => void;
  disabled: boolean;
  direction: Direction;
  children: ReactNode;
}

const VisitorChartButtonView = ({
  onClick,
  disabled,
  direction,
  children,
}: VisitorChartButtonViewProps) => {
  // 넘겨받은 props를 변경하지않고 그대로 UI 렌더링에 사용
  return (
    // <S.ChartButtonWrap>
    <S.ChartButton disabled={disabled} onClick={onClick} direction={direction}>
      {children}
    </S.ChartButton>
    // </S.ChartButtonWrap>
  );
};

export default VisitorChartButton;

const S = {
  ChartButtonWrap: styled.div`
    padding: 5px;
  `,
  ChartButton: styled.button<{ direction: Direction }>`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${({ direction }) =>
      direction === 'left' ? 'rotate(90deg)' : 'rotate(-90deg)'};

    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray_9};
    border-radius: 10%;
    background-color: ${({ theme }) => theme.colors.white};
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
};
