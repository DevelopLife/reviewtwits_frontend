import React, { useEffect, useState } from 'react';
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
import { useRecoilState } from 'recoil';
import { atomReviewSortButtonState } from 'states/atomReveiw';
import { replaceUrlProtocool } from 'constants/regExp';
import { RegisterProjectParams } from 'typings/register';
import { useRegisterShoppingMallProduct } from 'hooks/queries/shopping';
import {
  useGetShoppingMallReviewInfo,
  useGetShoppingMallReviewList,
} from 'hooks/queries/reviews';

interface ShoppingMallReviewProps {
  projectName: string;
  productURL: string;
  title: string;
  image: string;
  // shoppingmallReviewInfoData: ShoppingMallReviewInfo;
  // shoppingmallReviewList: ShoppingMallReviewDetail[];
}

//   {
//   shoppingmallReviewInfoData,
//   shoppingmallReviewList,
// }: ShoppingMallReviewProps

const ShoppingMallReview = ({
  projectName,
  productURL,
  title,
  image,
}: ShoppingMallReviewProps) => {
  const router = useRouter();

  const [searchOption, setSearchOption] = useRecoilState(
    atomReviewSortButtonState
  );

  const handleSetSearchOption = (selectingOption: 'BEST' | 'NEWEST') => {
    setSearchOption({ selected: selectingOption });
  };

  const { data: shoppingmallReviewInfoData } =
    useGetShoppingMallReviewInfo(productURL);
  const { data: shoppingmallReviewList } = useGetShoppingMallReviewList(
    productURL,
    searchOption.selected
  );

  const { mutateAsync } = useRegisterShoppingMallProduct();

  useEffect(() => {
    if (
      shoppingmallReviewInfoData?.status === 202 &&
      router.query.projectName &&
      router.query.productURL &&
      router.query.title &&
      router.query.image
    ) {
      const params: RegisterProjectParams = {
        projectName: projectName,
        body: {
          productUrl: productURL,
          productName: title,
          imageUrl: replaceUrlProtocool(image),
        },
      };

      mutateAsync(params);
    }
  }, [
    shoppingmallReviewInfoData?.status,
    router.query,
    mutateAsync,
    projectName,
    productURL,
    title,
    image,
  ]);

  if (shoppingmallReviewInfoData?.data && shoppingmallReviewList?.data) {
    return (
      <S.Layout>
        <S.ComprehensiveRatesLayout>
          <ComprehensiveRates
            shoppingmallReviewInfoData={shoppingmallReviewInfoData.data}
          />
        </S.ComprehensiveRatesLayout>
        <S.KeywordRatesLayout>
          <KeywordRates />
        </S.KeywordRatesLayout>
        <S.ReviewHeaderLayout>
          <ReviewHeader handleSetSearchOption={handleSetSearchOption} />
        </S.ReviewHeaderLayout>
        <S.ReviewsLayout>
          <Reviews shoppingmallReviewList={shoppingmallReviewList.data} />
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
  }

  return null;
};

export default ShoppingMallReview;
