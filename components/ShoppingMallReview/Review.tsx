import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from '@emotion/styled';

import HeartFull from 'public/icons/like-heart-full.svg';
import HeartEmpty from 'public/icons/like-heart-empty.svg';
import thumbsUp from 'public/icons/thumbs_up.png';

import { ShoppingMallReviewDetail } from 'typings/reviews';
import Card from 'components/common/Card';

import { formattedCreateDateArr, formattedImageUrl } from 'utils/format';

import { shoppingAPI } from 'api/reviews';
import { PAGE_LIST } from 'constants/routers';
import StarBox from 'components/Social/Common/Review/StarBox';

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
  };

  const setUnlike = async (reviewId: number) => {
    const { status } = await shoppingAPI.postReviewLikeUnLike(reviewId);
    if (status === 200) {
      setLikedCount((prev) => prev - 1);
      setLikedComment((prev) => !prev);
    }
  };
  const setLike = async (reviewId: number) => {
    const { status } = await shoppingAPI.postReviewLikeUnLike(reviewId);
    if (status === 200) {
      setLikedCount((prev) => prev + 1);
      setLikedComment((prev) => !prev);
    }
  };

  const { nickname, profileImageUrl } = reviewDetail.userInfo;
  const { content, reviewImageUrlList, createdDate, lastModifiedDate } =
    reviewDetail;

  const handleUserClick = () => {
    router.push(`${PAGE_LIST.SOCIAL_PROFILE}/${nickname}`);
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

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  `,

  WriterInfo: styled.div`
    display: flex;
    flex-direction: row;

    gap: 8px;
  `,

  ProfileImage: styled(Image)`
    position: relative;
    width: 50px;
    height: 50px;

    background: #d9d9d9;
    border-radius: 50%;
  `,

  WriterDesc: styled.div`
    display: flex;
    flex-direction: column;

    color: #000000;
    font-style: normal;
    font-weight: 500;
  `,

  WriterName: styled.p`
    font-family: 'Inter';
    font-size: 18px;
    line-height: 22px;
  `,

  SellerName: styled.p`
    font-family: 'Pretendard';
    font-size: 12px;
    line-height: 14px;
  `,

  StarRateWithDate: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
    margin-bottom: 4px;
    gap: 8px;
  `,

  WriteDate: styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #828282;
  `,

  Stars: styled.ul`
    display: flex;
    flex-direction: row;

    margin-right: 8px;

    li {
      img {
        width: 18px;
        height: 18px;
      }
    }
  `,

  ProductImageBox: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;

      color: #828282;
    }
  `,

  ProductImages: styled.div`
    width: 424px;
    height: 80px;

    margin-top: 8px;
    margin-bottom: 16px;

    display: flex;
    flex-direction: row;
    gap: 8px;

    /* Image {
    width: 100px;
    height: 80px;

    background: #d9d9d9;
  } */
  `,

  ProductDesc: styled.div`
    width: 413px;
    max-height: 126px;

    font-family: 'Pretendard';
    font-style: normal;
    font-size: 12px;
    line-height: 120%;

    margin-bottom: 15px;

    color: #333333;
    strong {
      font-weight: 700;
    }
  `,

  Keywords: styled.div`
    width: 133px;
    height: 31px;

    display: flex;
    flex-direction: column;
    gap: 7px;
  `,

  KeywordDetail: styled.div`
    height: 12px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-family: 'Pretendard';
    font-style: normal;
    font-size: 10px;
    line-height: 12px;

    color: #181818;

    strong {
      font-weight: 700;
    }
    p {
      font-weight: 400;
    }
  `,

  HelpfulRates: styled.div`
    width: 50%;
    max-width: 128px;

    margin-top: 21px;
    margin-bottom: 28px;

    display: flex;
    flex-direction: row;

    p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;

      color: #333333;
    }

    button {
      outline: none;
      border: none;
      background-color: transparent;

      img {
        width: 16px;
        height: 16px;
      }
    }
  `,
  LikeButton: styled.button`
    width: 20px;
    height: 20px;
  `,
};
