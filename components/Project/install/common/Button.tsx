import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Colors } from 'styles/theme';

import * as S from './Button.styles';

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
