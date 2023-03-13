import React from 'react';
import * as S from './ComprehensiveRates.styles';

const ComprehensiveRates = () => {
  return (
    <S.Container>
      <S.OverallReviewNumber>
        <S.Strong>전체 리뷰수</S.Strong>
        <S.NumberInfos>
          <S.H4>10.3k</S.H4>
          <div>103</div>
        </S.NumberInfos>
        <S.Desc>이번달에 작성된 리뷰 수</S.Desc>
      </S.OverallReviewNumber>

      <S.OverallRating>
        <S.Strong>평점</S.Strong>
        <S.StarInfos>
          <S.H4>4.0</S.H4>
          <div>⭐⭐⭐⭐🟢</div>
        </S.StarInfos>
        <S.Desc>이번달 평균 평가</S.Desc>
      </S.OverallRating>

      <S.OverallRatingDetail>
        <li>
          ⭐5 <S.PrograssBar prograssRange={'150'} />
        </li>
        <li>
          ⭐4 <S.PrograssBar prograssRange={'75'} />
        </li>
        <li>
          ⭐3 <S.PrograssBar prograssRange={'30'} />
        </li>
        <li>
          ⭐2 <S.PrograssBar prograssRange={'15'} />
        </li>
        <li>
          ⭐1 <S.PrograssBar prograssRange={'12'} />
        </li>
      </S.OverallRatingDetail>
    </S.Container>
  );
};

export default ComprehensiveRates;
