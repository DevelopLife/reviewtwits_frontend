import Image from 'next/image';

import HeartFull from 'public/icons/like-heart-full.svg';
import HeartEmpty from 'public/icons/like-heart-empty.svg';

import grayStar from 'public/images/empty_star_img.png';
import thumbsUp from 'public/icons/thumbs_up.png';
import * as S from './Review.styles';
import { ShoppingMallReviewDetail } from 'typings/reviews';
import {
  formattedCreateDate,
  formattedCreateDateArr,
  formattedImageUrl,
  formattedLastTime,
} from 'utils/format';
import StarBox from 'components/social/feed/MainContentSection/Review/StarBox';
import Card from 'components/common/Card';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';
import { shoppingAPI } from 'api/reviews';

interface ReviewProps {
  reviewDetail: ShoppingMallReviewDetail;
}

const Review = ({ reviewDetail }: ReviewProps) => {
  const router = useRouter();
  const [likedComment, setLikedComment] = useState<boolean>(
    reviewDetail.isLiked
  );
  const [likedCount, setLikedCount] = useState<number>(
    reviewDetail.reactionCount
  );

  const onClickLikeButton = () => {
    likedComment
      ? setUnlike(reviewDetail.reviewId)
      : setLike(reviewDetail.reviewId);
    setLikedComment((prev) => !prev);
  };

  const setUnlike = (reviewId: number) => {
    // shoppingAPI.deleteLikeToReview(reviewId);

    setLikedCount((prev) => prev - 1);
  };
  const setLike = (reviewId: number) => {
    shoppingAPI.postLikeToReview(reviewId);

    setLikedCount((prev) => prev + 1);
  };

  const { nickname, profileImageUrl } = reviewDetail.userInfo;
  const { content, reviewImageUrlList, createdDate, lastModifiedDate } =
    reviewDetail;

  const handleUserClick = () => {
    router.push(`/social/user/${nickname}`);
  };
  return (
    <S.Container>
      <Card cardType="reviewCard">
        <S.WriterInfo onClick={handleUserClick}>
          <S.ProfileImage
            src={profileImageUrl ? formattedImageUrl(profileImageUrl) : ''}
            alt=""
            width={50}
            height={50}
          />
          <S.WriterDesc>
            <S.WriterName>{nickname}</S.WriterName>
            <S.StarRateWithDate>
              <StarBox starSize={18} score={reviewDetail.score} />
              <S.WriteDate>{formattedCreateDateArr(createdDate)}</S.WriteDate>
            </S.StarRateWithDate>
            {/* <S.SellerName>판매자: 마린 컴퍼니(주)</S.SellerName> */}
          </S.WriterDesc>
        </S.WriterInfo>

        <S.ProductImageBox>
          {/* <p>마린이 직접만든 리조또, 520g 1팩</p> */}
          <S.ProductImages>
            {reviewImageUrlList ? (
              reviewImageUrlList?.map((imageURL, idx) => (
                <Image
                  src={imageURL ? formattedImageUrl(imageURL) : ''}
                  alt=""
                  key={imageURL + idx}
                  height={80}
                  width={100}
                />
              ))
            ) : (
              <h1>이미지가 없어요 </h1>
            )}
          </S.ProductImages>
        </S.ProductImageBox>

        <S.ProductDesc>
          {/* <strong>마린의 손맛이 느껴지는 맛입니다</strong> */}
          <p>{content}</p>
        </S.ProductDesc>

        {/* <S.Keywords>
          <S.KeywordDetail>
            <strong>맛 만족도</strong>
            <p>예상보다 맛있어요</p>
          </S.KeywordDetail>
          <S.KeywordDetail>
            <strong>간편함</strong>
            <p>조리가 간편해요</p>
          </S.KeywordDetail>
        </S.Keywords> */}

        <S.HelpfulRates>
          <p>{likedCount}명에게 도움이 됨</p>
          <button>
            <Image src={thumbsUp} alt=""></Image>
            <S.LikeButton onClick={onClickLikeButton}>
              {likedComment ? <HeartFull /> : <HeartEmpty />}
            </S.LikeButton>
          </button>
        </S.HelpfulRates>
      </Card>
    </S.Container>
  );
};

export default Review;
