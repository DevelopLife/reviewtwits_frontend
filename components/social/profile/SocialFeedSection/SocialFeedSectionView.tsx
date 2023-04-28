import styled from '@emotion/styled';
import { RefObject } from 'react';

import { WrapProps } from 'typings/wrapperProps';

export const CARD_WIDTH = 318;

interface SocialFeedSectionViewProps extends WrapProps {
  targetRef: RefObject<HTMLDivElement>;
  columnWidth: number;
}

const SocialFeedSectionView = ({
  targetRef,
  children,
  columnWidth,
}: SocialFeedSectionViewProps) => {
  return (
    <S.FeedSection columnWidth={columnWidth} ref={targetRef}>
      {children}
    </S.FeedSection>
  );
};

export default SocialFeedSectionView;

const S = {
  FeedSection: styled.section<{ columnWidth: number }>`
    width: 100%;
    display: grid;
    grid-template-columns: ${({ columnWidth }) =>
      `repeat(auto-fill, minmax(${columnWidth}px, ${columnWidth}px))`};
    gap: 16px 24px;
  `,
};
