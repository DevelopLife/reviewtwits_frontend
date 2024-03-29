import { optionalTokenAPI } from 'api/instance';

const ITEMS_URL = '/items';

const itemsAPI = {
  searchProductName: async (productName: string) => {
    const params = { productName };

    return await optionalTokenAPI
      .get(`${ITEMS_URL}/search`, { params })
      .then((res) => res.data);
  },
  getProductInfo: async (productName: string) => {
    const params = { productName };

    return await optionalTokenAPI
      .post(`${ITEMS_URL}/request-crawling`, {}, { params })
      .then((res) => res.data);
  },
};

export default itemsAPI;
