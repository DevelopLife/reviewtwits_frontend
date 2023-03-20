import { api } from 'api/instance';

const shoppingUrl = '/reviews/shopping';

const shoppingAPI = {
  createReview: async (values: FormData) => {
    const body = values;

    return await api
      .post(`${shoppingUrl}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => console.log(res.data));
  },
};

export { shoppingAPI };
