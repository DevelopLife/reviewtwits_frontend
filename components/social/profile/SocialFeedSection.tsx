import styled from '@emotion/styled';
import Image from 'next/image';

import { SocialFeedCard } from 'components/social/profile/SocialFeedCard';
import TestImage from 'public/images/empty_star_img.png';
import type { WrapProps } from 'typings/wrapperProps';

interface SocialFeedSectionProps extends WrapProps {
  columnWidth: number;
}

const CARD_WIDTH = 318;

const SocialFeedSection = () => {
  return (
    <SocialFeedSectionView columnWidth={CARD_WIDTH}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <SocialFeedCard
          key={index}
          styles={{
            width: CARD_WIDTH,
            height: 318,
            borderRadius: 20,
          }}
          emojiCount={20}
          commentCount={100}
        >
          <Image quality={100} src={TestImage} alt="feedThumbnail" fill />
        </SocialFeedCard>
      ))}
    </SocialFeedSectionView>
  );
};

const SocialFeedSectionView = ({
  children,
  columnWidth,
}: SocialFeedSectionProps) => {
  return <S.FeedSection columnWidth={columnWidth}>{children}</S.FeedSection>;
};

export default SocialFeedSection;

const S = {
  FeedSection: styled.section<{ columnWidth: number }>`
    width: 100%;
    display: grid;
    grid-template-columns: ${({ columnWidth }) =>
      `repeat(auto-fill, minmax(${columnWidth}px, ${columnWidth}px))`};
    gap: 16px 24px;
  `,
};
