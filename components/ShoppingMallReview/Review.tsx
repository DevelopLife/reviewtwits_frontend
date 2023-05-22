import Image from 'next/image';

import grayStar from 'public/images/empty_star_img.png';
import thumbsUp from 'public/icons/thumbs_up.png';
import * as S from './Review.styles';
import { ShoppingMallReviewDetail } from 'typings/reviews';
import { formattedImageUrl, formattedProfileImageUrl } from 'utils/format';

interface ReviewProps {
  reviewDetail: ShoppingMallReviewDetail;
}

const Review = ({ reviewDetail }: ReviewProps) => {
  const { nickname, profileImageUrl } = reviewDetail.userInfo;
  const { content, reviewImageUrlList } = reviewDetail;
  return (
    <S.Container>
      <S.WriterInfo>
        <S.WriterImage>
          <Image
            src={formattedProfileImageUrl(profileImageUrl || '')}
            alt="reviwer_profile"
            fill
          />
        </S.WriterImage>
        <S.WriterDesc>
          <S.WriterName>{nickname}</S.WriterName>
          <S.StarRateWithDate>
            <S.Stars>
              <li>
                <Image src={grayStar} alt="" />
              </li>

              <li>
                <Image src={grayStar} alt="" />
              </li>

              <li>
                <Image src={grayStar} alt="" />
              </li>

              <li>
                <Image src={grayStar} alt="" />
              </li>

              <li>
                <Image src={grayStar} alt="" />
              </li>
            </S.Stars>
            <S.WriteDate>2023.03.01</S.WriteDate>
          </S.StarRateWithDate>
          <S.SellerName>판매자: 마린 컴퍼니(주)</S.SellerName>
        </S.WriterDesc>
      </S.WriterInfo>

      <S.ProductImageBox>
        <p>마린이 직접만든 리조또, 520g 1팩</p>
        <S.ProductImages>
          {reviewImageUrlList?.map((imageURL) => (
            <Image
              src={imageURL ? formattedImageUrl(imageURL) : ''}
              alt=""
              key={imageURL}
              height={80}
              width={100}
            />
          ))}
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
        </S.ProductImages>
      </S.ProductImageBox>

      <S.ProductDesc>
        <strong>마린의 손맛이 느껴지는 맛입니다</strong>
        <p>{content}</p>
      </S.ProductDesc>

      <S.Keywords>
        <S.KeywordDetail>
          <strong>맛 만족도</strong>
          <p>예상보다 맛있어요</p>
        </S.KeywordDetail>
        <S.KeywordDetail>
          <strong>간편함</strong>
          <p>조리가 간편해요</p>
        </S.KeywordDetail>
      </S.Keywords>

      <S.HelpfulRates>
        <p>2명에게 도움이 됨</p>
        <button>
          <Image src={thumbsUp} alt=""></Image>
        </button>
      </S.HelpfulRates>
    </S.Container>
  );
};

export default Review;
