import Image from 'next/image';

import { SocialFeedCard } from 'components/social/profile/SocialFeedCard';
import SocialFeedSectionView, {
  CARD_WIDTH,
} from 'components/social/profile/SocialFeedSection/SocialFeedSectionView';
import useGetSocialReviews from 'hooks/useGetSocialReviews';

import { useRouter } from 'next/router';

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
            ({
              reviewId,
              reviewImageNameList,
              reactionCount,
              commentCount,
            }) => (
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
                    // TODO: 지수가 작업한 formattedImageUrl (https://github.com/DevelopLife/reviewtwits_frontend/pull/128/files/c520e4a1249e073e1bc4d2036f4d18cc5644fb64#diff-3984ffbe4039599af4e1ec47a5294914d774dde97b957c884e8d8967c400d67f)
                    // 로 변경해야함
                    reviewImageNameList[0]
                      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/request-images/${reviewImageNameList[0]}`
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
