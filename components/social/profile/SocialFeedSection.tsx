import styled from '@emotion/styled';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { SocialFeedCard } from 'components/social/profile/SocialFeedCard';
import type { WrapProps } from 'typings/wrapperProps';
import socialAPI from 'api/social';
import useUserProfile from 'hooks/useUserProfile';
import useGetSocialReviews from 'hooks/useGetSocialReviews';

interface SocialFeedSectionProps extends WrapProps {
  columnWidth: number;
}

const CARD_WIDTH = 318;

const SocialFeedSection = () => {
  const userData = useUserProfile();

  const { data: socialMyReviews, status: socialMyReviewsStatus } =
    useGetSocialReviews(userData?.nickname);

  if (socialMyReviewsStatus === 'success' && socialMyReviews) {
    return (
      <SocialFeedSectionView columnWidth={CARD_WIDTH}>
        {socialMyReviews?.map(({ reviewId, reviewImageNameList }) => (
          <SocialFeedCard
            key={reviewId}
            styles={{
              width: CARD_WIDTH,
              height: 318,
              borderRadius: 20,
            }}
            emojiCount={20}
            commentCount={100}
          >
            <Image
              quality={100}
              src={reviewImageNameList[0] || ''}
              alt="feedThumbnail"
              fill
            />
          </SocialFeedCard>
        ))}
      </SocialFeedSectionView>
    );
  }

  return (
    <SocialFeedSectionView columnWidth={CARD_WIDTH}>
      {
        // TODO: 리뷰작성유도 화면을 보여줘도 될 것 같음
      }
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
