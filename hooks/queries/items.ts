import { useQuery } from '@tanstack/react-query';
import itemsAPI from 'api/items';

import { ProductInfoType, ProductSearchResultType } from 'typings/product';

export const useGetSearchResult = (searchValue: string) => {
  const data = useQuery<ProductSearchResultType[]>(
    ['searchProductName', searchValue],
    () => itemsAPI.searchProductName(searchValue),
    {
      enabled: !!searchValue,
      refetchOnWindowFocus: false,
    }
  );
  return data;
};

export const useGetProductInfo = (productName?: string) => {
  const data = useQuery<ProductInfoType | null>(
    ['productInfo', productName],
    () => (productName ? itemsAPI.getProductInfo(productName) : null),
    {
      enabled: !!productName,
      refetchOnWindowFocus: false,
    }
  );
  return data;
};
