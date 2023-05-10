import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';

import { shoppingAPI } from 'api/reviews';
import { SUCCESS_MESSAGE } from 'constants/reviews';
import { getSearchParams } from 'utils/searchParams';
import type { ReviewResponseType } from 'typings/reviews';
import type { RegisterProjectParams } from 'typings/register';

const REVIEW_QUERY_KEY = 'reviews';

export const useGetShoppingMallReview = (productName: string) => {
  return useQuery<ReviewResponseType>(
    [REVIEW_QUERY_KEY, productName],
    () => shoppingAPI.getReviewDetail(productName),
    {
      enabled: !!productName,
    }
  );
};

export const useCreateShoppingMallReview = () => {
  const router = useRouter();

  return useMutation(
    (formData: FormData) => shoppingAPI.createReview(formData),
    {
      onSuccess: ({ status }) => {
        switch (status) {
          case 200:
            // eslint-disable-next-line no-case-declarations
            const productURL = getSearchParams('productURL');
            alert(SUCCESS_MESSAGE.CREATE);
            router.push(`/review?productURL=${productURL}`);
            break;
        }
      },
      onError: ({ response }) => {
        switch (response?.status) {
          case 400:
            alert(response.data[0].message);
            break;
        }
      },
    }
  );
};

// TODO: 제품등록 임시 query hook
export const useRegisterShoppingMallProduct = () => {
  return useMutation(
    (params: RegisterProjectParams) => {
      return shoppingAPI.registerProduct({
        projectName: params.projectName,
        body: params.body,
      });
    },
    {
      onSuccess: ({ status }) => {
        alert('성공');
      },
      onError: ({ response }) => {
        alert(response.data[0]?.message);
      },
    }
  );
};

export const useEditShoppingMallReview = (reviewId: number) => {
  const router = useRouter();

  return useMutation(
    (formData: FormData) => shoppingAPI.editReview(reviewId, formData),
    {
      onSuccess: ({ status }) => {
        switch (status) {
          case 200:
            alert(SUCCESS_MESSAGE.EDIT);
            router.push('/review');
            break;
        }
      },
      onError: ({ response }) => {
        switch (response?.status) {
          case 400:
            alert(response.data[0].message);
            break;
        }
      },
    }
  );
};
