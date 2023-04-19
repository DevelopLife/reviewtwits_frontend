import { useQuery } from '@tanstack/react-query';
import { shoppingAPI } from 'api/reviews';
import { AxiosError, AxiosResponse } from 'axios';
import { ResponseError } from 'typings/error';
import {
  ShoppingMallReviewDetail,
  ShoppingMallReviewInfo,
} from 'typings/reviews';

export const useGetShoppingMallReviewInfo = () => {
  return useQuery<
    AxiosResponse<ShoppingMallReviewInfo>,
    AxiosError<ResponseError>
  >(['useGetShoppingMallReviewInfo'], () =>
    shoppingAPI.getShoppingMallReviewInfo()
  );
};

export const useGetShoppingMallReviewList = () => {
  return useQuery<
    AxiosResponse<ShoppingMallReviewDetail[]>,
    AxiosError<ResponseError>
  >(['useGetShoppingMallReviewList'], () =>
    shoppingAPI.getShoppingMallReviewList()
  );
};
