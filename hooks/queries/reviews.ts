import { useQuery } from '@tanstack/react-query';
import { shoppingAPI } from 'api/reviews';
import { AxiosError, AxiosResponse } from 'axios';
import { ResponseError } from 'typings/error';
import {
  ShoppingMallReviewDetail,
  ShoppingMallReviewInfo,
} from 'typings/reviews';

export const useGetShoppingMallReviewInfo = (productURL: string) => {
  return useQuery<
    AxiosResponse<ShoppingMallReviewInfo>,
    AxiosError<ResponseError>
  >(
    ['useGetShoppingMallReviewInfo', productURL],
    () => shoppingAPI.getShoppingMallReviewInfo(encodeURI(productURL)),
    {
      enabled: !!productURL,
    }
  );
};

export const useGetShoppingMallReviewList = (productURL: string) => {
  return useQuery<
    AxiosResponse<ShoppingMallReviewDetail[]>,
    AxiosError<ResponseError>
  >(
    ['useGetShoppingMallReviewList', productURL],
    () => shoppingAPI.getShoppingMallReviewList(encodeURI(productURL)),
    {
      enabled: !!productURL,
    }
  );
};
