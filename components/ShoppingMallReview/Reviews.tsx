import React, { useEffect } from 'react';
import Review from './Review';
import { ShoppingMallReviewDetail } from 'typings/reviews';
import { useRouter } from 'next/router';
import { atomReviewSortButtonState } from 'states/atomReveiw';
import { useRecoilState } from 'recoil';
import {
  useGetShoppingMallReviewInfo,
  useGetShoppingMallReviewList,
} from 'hooks/queries/reviews';
import { useRegisterShoppingMallProduct } from 'hooks/queries/shopping';
import { RegisterProjectParams } from 'typings/register';
import { replaceUrlProtocool } from 'constants/regExp';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface ReviewsProps {
  projectName: string;
  productURL: string;
  title: string;
  image: string;
}

const Reviews = ({ projectName, productURL, title, image }: ReviewsProps) => {
  const [searchOption, setSearchOption] = useRecoilState(
    atomReviewSortButtonState
  );

  const { data: shoppingmallReviewList } = useGetShoppingMallReviewList(
    productURL,
    searchOption.selected
  );

  const cache = useQueryClient();

  const cachedData = cache.getQueryData<
    AxiosResponse<ShoppingMallReviewDetail[]>
  >(['useGetShoppingMallReviewList', productURL, 'NEWEST']);

  if (shoppingmallReviewList?.data) {
    return (
      <div>
        {shoppingmallReviewList.data.map((review: ShoppingMallReviewDetail) => (
          <Review reviewDetail={review} key={review.reviewId} />
        ))}
      </div>
    );
  }
  if (cachedData) {
    return (
      <div>
        {cachedData.data.map((review: ShoppingMallReviewDetail) => (
          <Review reviewDetail={review} key={review.reviewId} />
        ))}
      </div>
    );
  }
  return null;
};

export default Reviews;
