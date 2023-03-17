import React from 'react';
import {
  ComprehensiveRates,
  KeywordRates,
  ReviewHeader,
  Reviews,
} from './@index';
import * as S from './ShoppingMallReview.styles';

const ShoppingMallReview = () => {
  return (
    <S.Layout>
      <S.ComprehensiveRatesLayout>
        <ComprehensiveRates />
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
