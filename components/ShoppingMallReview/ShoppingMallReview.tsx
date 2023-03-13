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
      <ComprehensiveRates />
      <KeywordRates />
      <ReviewHeader />
      <Reviews />
    </S.Layout>
  );
};

export default ShoppingMallReview;
