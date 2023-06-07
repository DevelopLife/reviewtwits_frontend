import React, { useEffect, useState } from 'react';
import {
  ComprehensiveRates,
  KeywordRates,
  ReviewHeader,
  Reviews,
} from './@index';
import * as S from './ShoppingMallReview.styles';

interface ShoppingMallReviewProps {
  projectName: string;
  productURL: string;
  title: string;
  image: string;
}

const ShoppingMallReview = ({
  projectName,
  productURL,
  title,
  image,
}: ShoppingMallReviewProps) => {
  return (
    <S.Layout>
      <S.ComprehensiveRatesLayout>
        <ComprehensiveRates
          projectName={projectName}
          productURL={productURL}
          title={title}
          image={image}
        />
      </S.ComprehensiveRatesLayout>
      <S.KeywordRatesLayout>
        <KeywordRates />
      </S.KeywordRatesLayout>
      <S.ReviewHeaderLayout>
        <ReviewHeader
        // handleSetSearchOption={handleSetSearchOption}
        />
      </S.ReviewHeaderLayout>
      <S.ReviewsLayout>
        <Reviews
          projectName={projectName}
          productURL={productURL}
          title={title}
          image={image}
        />
      </S.ReviewsLayout>
      <S.LinkButton
        href={{
          pathname: '/review/write',
          query: { productURL, title },
        }}
        as={`/review/write/${title}`}
      >
        리뷰작성
      </S.LinkButton>
    </S.Layout>
  );
};

export default ShoppingMallReview;
