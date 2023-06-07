import React, { useState } from 'react';
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
import { useRouter } from 'next/router';

interface ShoppingMallReviewProps {
  shoppingmallReviewInfoData: ShoppingMallReviewInfo;
  shoppingmallReviewList: ShoppingMallReviewDetail[];
}

const ShoppingMallReview = ({
  shoppingmallReviewInfoData,
  shoppingmallReviewList,
}: ShoppingMallReviewProps) => {
  const router = useRouter();
  const [searchOption, setSearchOption] = useState<'best' | 'new'>('new');
  const { projectName, productURL, title, image } = router.query as {
    projectName: string;
    productURL: string;
    title: string;
    image: string;
  };

  const handleSetSearchOption = (selectingOption: 'best' | 'new') => {
    setSearchOption((prev) => selectingOption);
  };

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
        <ReviewHeader handleSetSearchOption={handleSetSearchOption} />
      </S.ReviewHeaderLayout>
      <S.ReviewsLayout>
        <Reviews shoppingmallReviewList={shoppingmallReviewList} />
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
