import styled from '@emotion/styled';
import { WrapProps } from 'typings/wrapperProps';

export const CARD_WIDTH = 318;

interface SocialFeedSectionViewProps extends WrapProps {
  columnWidth: number;
}

const SocialFeedSectionView = ({
  children,
  columnWidth,
}: SocialFeedSectionViewProps) => {
  return <S.FeedSection columnWidth={columnWidth}>{children}</S.FeedSection>;
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
