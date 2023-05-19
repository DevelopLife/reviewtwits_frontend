import React from 'react';
import {
  ComprehensiveRates,
  KeywordRates,
  ReviewHeader,
  Reviews,
} from './@index';
import * as S from './ShoppingMallReview.styles';
import {
  ShoppingMallReviewDetail,
  ShoppingMallReviewInfo,
} from 'typings/reviews';

interface ShoppingMallReviewProps {
  shoppingmallReviewInfoData: ShoppingMallReviewInfo;
  shoppingmallReviewList: ShoppingMallReviewDetail[];
}

const ShoppingMallReview = ({
  shoppingmallReviewInfoData,
  shoppingmallReviewList,
}: ShoppingMallReviewProps) => {
  return (
    <S.Layout>
      <S.ComprehensiveRatesLayout>
        <ComprehensiveRates
          shoppingmallReviewInfoData={shoppingmallReviewInfoData}
        />
      </S.ComprehensiveRatesLayout>
      <S.KeywordRatesLayout>
        <KeywordRates />
      </S.KeywordRatesLayout>
      <S.ReviewHeaderLayout>
        <ReviewHeader />
      </S.ReviewHeaderLayout>
      <S.ReviewsLayout>
        <Reviews shoppingmallReviewList={shoppingmallReviewList} />
      </S.ReviewsLayout>
      <S.LinkButton href="/review/write">리뷰작성</S.LinkButton>
    </S.Layout>
  );
};

export default ShoppingMallReview;
