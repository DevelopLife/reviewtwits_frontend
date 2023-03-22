import { api } from 'api/instance';
import { SUCCESS_MESSAGE } from 'constants/reviews';

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
      .then(({ status }) => {
        switch (status) {
          case 200:
            alert(SUCCESS_MESSAGE.CREATE);
            break;
        }

        return { ok: true };
      })
      .catch((err) => {
        const { response } = err;

        switch (response.status) {
          case 400:
            alert(response.data[0].message);
            break;
        }
      });
  },
};

export { shoppingAPI };
