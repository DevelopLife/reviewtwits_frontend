import Image from 'next/image';

import { SocialFeedCard } from 'components/Social/profile/SocialFeedCard';
import SocialFeedSectionView, {
  CARD_WIDTH,
} from 'components/Social/profile/SocialFeedSection/SocialFeedSectionView';
import { useGetInfiniteSocialReviews } from 'hooks/queries/sns';
import { useUserProfile } from 'hooks/queries/users';
import { formattedImageUrl } from 'utils/format';

const SocialMyFeedSection = () => {
  const userData = useUserProfile();

  const { targetRef, data: myReviews } = useGetInfiniteSocialReviews(
    userData?.nickname || ''
  );

  return (
    <SocialFeedSectionView columnWidth={CARD_WIDTH} targetRef={targetRef}>
      {myReviews?.map(
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
            nickname={userData.nickname}
            reviewId={reviewId}
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
      )}
    </SocialFeedSectionView>
  );
};

export default SocialMyFeedSection;
