import { AxiosResponse } from 'axios';

import { publicAPI, requiredTokenApi } from 'api/instance';
import type {
  DailyVisitGraphInfos,
  DeviceType,
  LeadTimeInfo,
  RecentVisitCounts,
  VisitGraphInfos,
  VisitTimeStamp,
} from 'typings/statistics';

const STATISTICS_URL = '/statistics';
const DASHBOARD_URL = '/dashboard';

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

    return await publicAPI.post(`${STATISTICS_URL}/visited-info`, body);
  },
  dailyVisitGraphInfos: async (params: {
    projectName: string;
    range: string;
  }): Promise<AxiosResponse<DailyVisitGraphInfos>> => {
    return await requiredTokenApi.get(
      `${STATISTICS_URL}/daily-visit-graph-infos`,
      {
        params,
      }
    );
  },
  recentVisitCounts: async (params: {
    projectName: string;
  }): Promise<AxiosResponse<RecentVisitCounts>> => {
    return await requiredTokenApi.get(`${STATISTICS_URL}/recent-visit-counts`, {
      params,
    });
  },
  visitGraphInfos: async (params: {
    projectName: string;
    range: string;
    interval: string;
    endDate?: VisitTimeStamp;
  }): Promise<AxiosResponse<VisitGraphInfos>> => {
    return await requiredTokenApi.get(`${STATISTICS_URL}/visit-graph-infos`, {
      params,
    });
  },
  requestInflowInfos: async (projectName: string) => {
    const { data } = await requiredTokenApi.get(
      `${STATISTICS_URL}/request-inflow-infos`,
      {
        params: { projectName },
      }
    );

    return data;
  },
  simpleProjectInfo: async (projectName: string) => {
    const { data } = await requiredTokenApi.get(
      `${STATISTICS_URL}${DASHBOARD_URL}/simple-project-info`,
      {
        params: { projectName },
      }
    );

    return data;
  },
  productStatistics: async (projectName: string) => {
    const { data } = await requiredTokenApi.get(
      `${STATISTICS_URL}${DASHBOARD_URL}/product-statistics`,
      {
        params: { projectName },
      }
    );

    return data;
  },

  readTimeInfo: async (projectName: string): Promise<LeadTimeInfo> => {
    const { data } = await requiredTokenApi.get(
      `${STATISTICS_URL}/readtime-info`,
      { params: { projectName } }
    );

    return data;
  },
};
