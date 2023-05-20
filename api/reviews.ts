import { optionalTokenAPI, requiredTokenApi } from 'api/instance';
import { ReviewResponseType } from 'typings/reviews';
import type { RegisterProjectParams } from 'typings/register';

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
  getReviewDetail: async (productName: string): Promise<ReviewResponseType> => {
    return await optionalTokenAPI
      .get(`${SHOPPING_URL}/${productName}`)
      .then((res) => res.data);
  },
  editReview: async (reviewId: number, values: FormData) => {
    const body = values;

    return await requiredTokenApi.patch(`${SHOPPING_URL}/${reviewId}`, body);
  },

  getShoppingMallReviewInfo: async (productURL: string) => {
    const { data } = await optionalTokenAPI.get(`${SHOPPING_URL}`, {
      headers: {
        productURL: productURL,
      },
    });
    return data;
  },

  getShoppingMallReviewList: async (productURL: string) => {
    const { data } = await optionalTokenAPI.get(`${SHOPPING_URL}/list`, {
      headers: {
        productURL: productURL,
      },
    });

    return data;
  },

  //
  // product register

  // TODO: 제품등록 임시 api
  registerProduct: async ({
    projectName,
    body: { productUrl, imageUrl, productName },
  }: RegisterProjectParams) => {
    return await requiredTokenApi.post(`/products/register/${projectName}`, {
      productUrl,
      imageUrl,
      productName,
    });
  },
};

export { shoppingAPI };
