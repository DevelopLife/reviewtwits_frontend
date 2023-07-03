import Image from 'next/image';
import { useRouter } from 'next/router';

import { SocialFeedCard } from 'components/Social/Profile/SocialFeedCard';
import SocialFeedSectionView, {
  CARD_WIDTH,
} from 'components/Social/Profile/SocialFeedSection/SocialFeedSectionView';
import { formattedImageUrl } from 'utils/format';
import { useGetInfiniteSocialReviews } from 'hooks/queries/sns';

const SocialAnoterUserFeedSection = () => {
  const router = useRouter();
  const { query } = router;
  const { nickname } = query as { nickname: string };

  const { targetRef, data: userReviews } =
    useGetInfiniteSocialReviews(nickname);

  return (
    <SocialFeedSectionView columnWidth={CARD_WIDTH} targetRef={targetRef}>
      {userReviews?.map(
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
            nickname={nickname}
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

export default SocialAnoterUserFeedSection;
