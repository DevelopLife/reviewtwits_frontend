import Image from 'next/image';

import { SocialFeedCard } from 'components/social/profile/SocialFeedCard';
import SocialFeedSectionView, {
  CARD_WIDTH,
} from 'components/social/profile/SocialFeedSection/SocialFeedSectionView';
import useGetSocialReviews from 'hooks/useGetSocialReviews';
import useUserProfile from 'hooks/useUserProfile';

const SocialMyFeedSection = () => {
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

export default SocialMyFeedSection;
