import { api } from 'api/instance';
import { ReviewResponseType } from 'typings/reviews';

const SHOPPING_URL = '/reviews/shopping';

const shoppingAPI = {
  createReview: async (values: FormData) => {
    const body = values;

    return await api.post(`${SHOPPING_URL}`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getReviewDetail: async (reviewId: number): Promise<ReviewResponseType> => {
    return await api.get(`${SHOPPING_URL}/${reviewId}`).then((res) => res.data);
  },
  editReview: async (reviewId: number, values: FormData) => {
    const body = values;
    return await api.patch(`${SHOPPING_URL}/${reviewId}`, body);
  },

  getShoppingMallReviewInfo: async (
    productURL = 'http://www.example.com/123'
  ) => {
    return await api.get(`${SHOPPING_URL}`, {
      headers: {
        productURL: productURL,
      },
    });
  },

  getShoppingMallReviewList: async (
    productURL = 'http://www.example.com/123'
  ) => {
    return await api.get(`${SHOPPING_URL}/list`, {
      headers: {
        productURL: productURL,
      },
    });
  },
};

export { shoppingAPI };
