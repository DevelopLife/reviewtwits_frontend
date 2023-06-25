import { useQuery } from '@tanstack/react-query';
import { shoppingAPI } from 'api/reviews';
import { queryKey } from 'hooks/queries';

export const useGetShoppingMallReviewInfo = (productURL: string) => {
  return useQuery(
    queryKey.shoppingMallReviewInfo(productURL),
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
    queryKey.shoppingMallReviewList(productURL, sort),
    () => shoppingAPI.getShoppingMallReviewList(encodeURI(productURL), sort),
    {
      enabled: !!productURL,
    }
  );
};
