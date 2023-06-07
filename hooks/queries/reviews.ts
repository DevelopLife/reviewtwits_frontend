import { useQuery } from '@tanstack/react-query';
import { shoppingAPI } from 'api/reviews';
import { AxiosError, AxiosResponse } from 'axios';
import { ResponseError } from 'typings/error';
import {
  ShoppingMallReviewDetail,
  ShoppingMallReviewInfo,
} from 'typings/reviews';

export const useGetShoppingMallReviewInfo = (productURL: string) => {
  return useQuery(
    ['useGetShoppingMallReviewInfo', productURL],
    () => shoppingAPI.getShoppingMallReviewInfo(encodeURI(productURL)),
    {
      enabled: !!productURL,
    }
  );
};

export const useGetShoppingMallReviewList = (
  productURL: string,
  sort: 'BEST' | 'NEWEST'
) => {
  return useQuery(
    ['useGetShoppingMallReviewList', productURL, sort],
    () => shoppingAPI.getShoppingMallReviewList(encodeURI(productURL), sort),
    {
      enabled: !!productURL,
    }
  );
};
