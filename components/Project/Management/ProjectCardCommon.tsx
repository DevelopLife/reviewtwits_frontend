import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

import theme from 'styles/theme';

export type Styles = {
  color: keyof typeof theme.colors;
  backgroundColor: `${string}`;
};

export interface ProjectCardCommonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles: Styles;
}

export const ProjectCardCommon = ({
  children,
  styles,
  ...rest
}: ProjectCardCommonProps) => {
  return (
    <S.CardContainer styles={styles} {...rest}>
      {children}
    </S.CardContainer>
  );
};

const S = {
  CardContainer: styled.div<{ styles: Styles }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;

    width: 425px;
    height: 287px;
    border-radius: 30px;

    background-color: ${({ styles }) =>
      styles?.backgroundColor ? styles.backgroundColor : '#D9D9D9'};

    & * {
      color: ${() => 'white'};
    }

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
};
