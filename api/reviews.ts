import { optionalTokenAPI, requiredTokenApi } from 'api/instance';
import { ReviewResponseType } from 'typings/reviews';

const SHOPPING_URL = '/reviews/shopping';

const shoppingAPI = {
  createReview: async (values: FormData) => {
    const body = values;

    return await requiredTokenApi.post(`${SHOPPING_URL}`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getReviewDetail: async (reviewId: number): Promise<ReviewResponseType> => {
    return await optionalTokenAPI
      .get(`${SHOPPING_URL}/${reviewId}`)
      .then((res) => res.data);
  },
  editReview: async (reviewId: number, values: FormData) => {
    const body = values;

    return await requiredTokenApi.patch(`${SHOPPING_URL}/${reviewId}`, body);
  },

  getShoppingMallReviewInfo: async (productURL: string) => {
    return await optionalTokenAPI.get(`${SHOPPING_URL}`, {
      headers: {
        productURL: productURL,
      },
    });
  },

  getShoppingMallReviewList: async (productURL: string) => {
    return await optionalTokenAPI.get(`${SHOPPING_URL}/list`, {
      headers: {
        productURL: productURL,
      },
    });
  },

  //
  // product register

  // TODO: 제품등록 임시 api
  registerProduct: async ({ productUrl }: RegisterProductBody) => {
    return await requiredTokenApi.post(`/products/register`, {
      productUrl,
      projectId: 25020,
    });
  },
};

export interface RegisterProductBody {
  productUrl: string;
}

export { shoppingAPI };
