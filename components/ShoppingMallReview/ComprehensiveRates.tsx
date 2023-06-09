import Image from 'next/image';
import React from 'react';

import risingArray from 'public/images/rising_array.png';
import grayStar from 'public/images/empty_star_img.png';
import * as S from './ComprehensiveRates.styles';
import { ShoppingMallReviewInfo } from 'typings/reviews';
import StarBox from 'components/social/common/Review/StarBox';

interface ComprehensiveRatesProps {
  shoppingmallReviewInfoData: ShoppingMallReviewInfo;
}

const ComprehensiveRates = ({
  shoppingmallReviewInfoData,
}: ComprehensiveRatesProps) => {
  return (
    <S.Container>
      <S.OverallReviewNumber>
        <S.Strong>전체 리뷰수 </S.Strong>
        <S.NumberInfos>
          <S.H4>
            {shoppingmallReviewInfoData.totalReviewCount >= 1000
              ? Math.floor(shoppingmallReviewInfoData.totalReviewCount / 1000) +
                'k'
              : shoppingmallReviewInfoData.totalReviewCount}
          </S.H4>
          <div>
            <div>
              {shoppingmallReviewInfoData.recentReviewCount}
              <Image
                src={risingArray}
                alt="arrow image"
                width={30}
                height={30}
              />
            </div>
          </div>
        </S.NumberInfos>
        <S.Desc>이번달에 작성된 리뷰 수</S.Desc>
      </S.OverallReviewNumber>

      <S.OverallRating>
        <S.Strong>평점</S.Strong>
        <S.StarInfos>
          <S.H4>{shoppingmallReviewInfoData.averageStarScore}</S.H4>

          <S.Stars>
            <StarBox
              score={shoppingmallReviewInfoData.averageStarScore}
              starSize={30}
            />
          </S.Stars>
        </S.StarInfos>
        <S.Desc>이번달 평균 평가</S.Desc>
      </S.OverallRating>

      <S.OverallRatingDetail>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />5{' '}
          <S.PrograssBar
            prograssRange={shoppingmallReviewInfoData.starScoreArray?.[0] || 0}
          />
        </li>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />4
          <S.PrograssBar
            prograssRange={shoppingmallReviewInfoData.starScoreArray?.[1] || 0}
          />
        </li>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />3
          <S.PrograssBar
            prograssRange={shoppingmallReviewInfoData.starScoreArray?.[2] || 0}
          />
        </li>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />2
          <S.PrograssBar
            prograssRange={shoppingmallReviewInfoData.starScoreArray?.[3] || 0}
          />
        </li>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />1
          <S.PrograssBar
            prograssRange={shoppingmallReviewInfoData.starScoreArray?.[4] || 0}
          />
        </li>
      </S.OverallRatingDetail>
    </S.Container>
  );
};

export default ComprehensiveRates;
