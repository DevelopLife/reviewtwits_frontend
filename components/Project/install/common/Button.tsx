import { ReactNode } from 'react';

import { Colors } from 'styles/theme';
import styled from '@emotion/styled';

export type CommonButtonStyleAttributes = {
  width: number;
  height: number;
  color: Colors;
  backgroundColor: Colors;
};

interface CommonButtonProps {
  children: ReactNode;
  styleAttributes: CommonButtonStyleAttributes;
  onClick: () => void;
}

const CommonButton = ({
  children,
  styleAttributes,
  ...rest
}: CommonButtonProps) => {
  return (
    <S.Button {...styleAttributes} {...rest}>
      {children}
    </S.Button>
  );
};

export default CommonButton;

const S = {
  Button: styled.button<CommonButtonStyleAttributes>`
    border: none;
    border-radius: 15px;
    font-weight: 500;
    font-size: 18px;
    overflow: hidden;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }

    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    color: ${({ theme, color }) => theme.colors[color]};
    background-color: ${({ theme, backgroundColor }) =>
      theme.colors[backgroundColor]};
  `,
};
