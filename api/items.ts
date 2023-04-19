import { api } from 'api/instance';

const ITEMS_URL = '/items';

const itemsAPI = {
  searchProductName: async (productName: string) => {
    const params = { productName };

    return await api
      .get(`${ITEMS_URL}/search`, { params })
      .then((res) => JSON.parse(res.data.slice(1, -1)));
  },
};

export default itemsAPI;
