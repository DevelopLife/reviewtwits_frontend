import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';

import { RegisterProductBody, shoppingAPI } from 'api/reviews';
import { SUCCESS_MESSAGE } from 'constants/reviews';
import { ReviewResponseType } from 'typings/reviews';

const REVIEW_QUERY_KEY = 'reviews';

export const useGetShoppingMallReview = (reviewId: number) => {
  return useQuery<ReviewResponseType>(
    [REVIEW_QUERY_KEY, reviewId],
    () => shoppingAPI.getReviewDetail(reviewId),
    {
      enabled: !!reviewId,
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
            alert(SUCCESS_MESSAGE.CREATE);
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

// TODO: 제품등록 임시 query hook
export const useRegisterShoppingMallProduct = () => {
  return useMutation(
    (formData: RegisterProductBody) => shoppingAPI.registerProduct(formData),
    {
      onSuccess: ({ status }) => {
        alert('성공');
      },
      onError: ({ response }) => {
        alert(response.data[0].message);
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
