import { AxiosResponse } from 'axios';

import { publicAPI, requiredTokenApi } from 'api/instance';
import type {
  DailyVisitGraphInfos,
  DeviceType,
  RecentVisitCounts,
  VisitGraphInfos,
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
    projectId: string;
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
    projectId: string;
  }): Promise<AxiosResponse<RecentVisitCounts>> => {
    return await requiredTokenApi.get(`${STATISTICS_URL}/recent-visit-counts`, {
      params,
    });
  },
  visitGraphInfos: async (params: {
    projectId: string;
    range: string;
    interval: string;
  }): Promise<AxiosResponse<VisitGraphInfos>> => {
    return await requiredTokenApi.get(`${STATISTICS_URL}/visit-graph-infos`, {
      params,
    });
  },
  simpleProjectInfo: async (projectId: string) => {
    const { data } = await requiredTokenApi.get(
      `${STATISTICS_URL}${DASHBOARD_URL}/simple-project-info`,
      {
        params: { projectId },
      }
    );

    return data;
  },
  productStatistics: async (projectId: string) => {
    const { data } = await requiredTokenApi.get(
      `${STATISTICS_URL}${DASHBOARD_URL}/product-statistics`,
      {
        params: { projectId },
      }
    );

    return data;
  },
  requestInflowInfos: async (projectId: string) => {
    const { data } = await requiredTokenApi.get(
      `${STATISTICS_URL}${DASHBOARD_URL}/request-inflow-infos`,
      {
        params: { projectId },
      }
    );

    return data;
  },
};
