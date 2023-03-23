import Image from 'next/image';
import React from 'react';

import grayStar from 'public/images/gray_star.png';
import thumbsUp from 'public/images/thumbs_up.png';
import * as S from './Review.styles';

const Review = () => {
  return (
    <S.Container>
      <S.WriterInfo>
        <S.WriterImage>
          <Image src="" alt="" />
        </S.WriterImage>
        <S.WriterDesc>
          <S.WriterName>인생마린</S.WriterName>
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
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
        </S.ProductImages>
      </S.ProductImageBox>

      <S.ProductDesc>
        <strong>마린의 손맛이 느껴지는 맛입니다</strong>
        <p>
          저번에 먹었던 마린이 직접만든 육개장보다 맛있어요!! 애는 단짠단짠의
          맛이구요~ 누군가는 좋아할맛이지만 호불호가 있는맛이라고 생각합니다
          영양성분 보시면 아시겠지만 타사의 제품과 다르게 건강에 신경쓴 부분도
          좋았어요 밖에서 사먹는 리조또 꿇리지 않네요 재구매의사 x100!!
        </p>
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
