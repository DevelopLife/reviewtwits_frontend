import React from 'react';
import {
  ComprehensiveRates,
  KeywordRates,
  ReviewHeader,
  Reviews,
} from './@index';
import * as S from './ShoppingMallReview.styles';
import { ShoppingMallReviewInfo } from 'typings/reviews';

interface ShoppingMallReviewProps {
  shoppingmallReviewInfoData: ShoppingMallReviewInfo;
}

const ShoppingMallReview = ({
  shoppingmallReviewInfoData,
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
        <Reviews />
      </S.ReviewsLayout>
    </S.Layout>
  );
};

export default ShoppingMallReview;
