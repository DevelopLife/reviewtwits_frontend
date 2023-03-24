import { api } from 'api/instance';

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
  getReviewDetail: async (reviewId: number) => {
    return await api.get(`${SHOPPING_URL}/${reviewId}`).then((res) => res.data);
  },
  editReview: async (reviewId: number, values: FormData) => {
    const body = values;
    return await api.patch(`${SHOPPING_URL}/${reviewId}`, body);
  },
};

export { shoppingAPI };
