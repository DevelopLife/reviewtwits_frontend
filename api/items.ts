import { api } from 'api/instance';

const ITEMS_URL = '/items';

const itemsAPI = {
  searchProductName: async (productName: string) => {
    const params = { productName };

    return await api
      .get(`${ITEMS_URL}/search`, { params })
      .then((res) => res.data);
  },
};

export default itemsAPI;
