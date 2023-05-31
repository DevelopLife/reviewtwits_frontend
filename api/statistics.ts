import { optionalTokenAPI } from 'api/instance';
import { DeviceType } from 'typings/statistics';

const STATISTICS_URL = '/statistics';

export const statisticsAPI = {
  reportVisitorInfo: async (
    currentUrl: string,
    searchRoute: string | null,
    device: DeviceType
  ) => {
    const body = {
      productUrl: currentUrl,
      inflowUrl: searchRoute,
      device,
    };

    return await optionalTokenAPI.post(`${STATISTICS_URL}/visited-info`, body);
  },
};
