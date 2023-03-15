import Image from 'next/image';
import React from 'react';
import risingArray from 'public/images/rising_array.png';
import grayStar from 'public/images/gray_star.png';
import * as S from './ComprehensiveRates.styles';

const ComprehensiveRates = () => {
  return (
    <S.Container>
      <S.OverallReviewNumber>
        <S.Strong>전체 리뷰수</S.Strong>
        <S.NumberInfos>
          <S.H4>10.3k</S.H4>
          <div>
            <div>
              103
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
          <S.H4>4.0</S.H4>
          <ul>
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
          </ul>
        </S.StarInfos>
        <S.Desc>이번달 평균 평가</S.Desc>
      </S.OverallRating>

      <S.OverallRatingDetail>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />
          5 <S.PrograssBar prograssRange={'150'} />
        </li>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />4
          <S.PrograssBar prograssRange={'75'} />
        </li>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />3
          <S.PrograssBar prograssRange={'30'} />
        </li>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />2
          <S.PrograssBar prograssRange={'15'} />
        </li>
        <li>
          <Image src={grayStar} alt="" width={15} height={15} />1
          <S.PrograssBar prograssRange={'12'} />
        </li>
      </S.OverallRatingDetail>
    </S.Container>
  );
};

export default ComprehensiveRates;
