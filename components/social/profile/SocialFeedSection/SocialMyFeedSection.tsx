import Image from 'next/image';

import { SocialFeedCard } from 'components/social/profile/SocialFeedCard';
import SocialFeedSectionView, {
  CARD_WIDTH,
} from 'components/social/profile/SocialFeedSection/SocialFeedSectionView';
import useGetSocialReviews from 'hooks/useGetSocialReviews';
import useUserProfile from 'hooks/useUserProfile';
import { formattedImageUrl } from 'utils/format';

const SocialMyFeedSection = () => {
  const userData = useUserProfile();

  const { data: socialMyReviewPages, status: socialMyReviewsStatus } =
    useGetSocialReviews(userData?.nickname);

  if (socialMyReviewsStatus === 'success' && socialMyReviewPages) {
    const reviewPages = socialMyReviewPages?.pages;
    return (
      <SocialFeedSectionView columnWidth={CARD_WIDTH}>
        {reviewPages.map(({ currentPage }) =>
          currentPage.map(
            ({ reviewId, reviewImageUrlList, reactionCount, commentCount }) => (
              <SocialFeedCard
                key={reviewId}
                styles={{
                  width: CARD_WIDTH,
                  height: 318,
                  borderRadius: 20,
                }}
                reactionCount={reactionCount}
                commentCount={commentCount}
              >
                <Image
                  quality={100}
                  src={
                    reviewImageUrlList?.[0]
                      ? formattedImageUrl(reviewImageUrlList[0])
                      : ''
                  }
                  alt="feedThumbnail"
                  fill
                />
              </SocialFeedCard>
            )
          )
        )}
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

export default SocialMyFeedSection;
