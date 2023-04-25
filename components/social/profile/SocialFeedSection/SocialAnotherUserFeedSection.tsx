import Image from 'next/image';
import { useRouter } from 'next/router';

import { SocialFeedCard } from 'components/social/profile/SocialFeedCard';
import SocialFeedSectionView, {
  CARD_WIDTH,
} from 'components/social/profile/SocialFeedSection/SocialFeedSectionView';
import { formattedImageUrl } from 'utils/format';
import { useGetSocialReviews } from 'hooks/queries/sns';

const SocialAnoterUserFeedSection = () => {
  const router = useRouter();
  const { query } = router;
  const { nickname } = query as { nickname: string };

  const { data: socialMyReviewPages, status: socialMyReviewsStatus } =
    useGetSocialReviews(nickname);

  if (socialMyReviewsStatus === 'success' && socialMyReviewPages) {
    const reviewPages = socialMyReviewPages?.pages;
    return (
      <SocialFeedSectionView columnWidth={CARD_WIDTH}>
        {reviewPages?.map(({ currentPage }) =>
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
        // TODO: 다른 유저의 피드 페이지이기 때문에 피드가 없다는 걸 보여줘야 할 것 같다.
      }
    </SocialFeedSectionView>
  );
};

export default SocialAnoterUserFeedSection;
