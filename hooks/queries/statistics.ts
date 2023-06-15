import { useQuery } from '@tanstack/react-query';
import { statisticsAPI } from 'api/statistics';
import type { StatisticsRange } from 'typings/chart';

interface useVisitGraphInfosQueryProps {
  // projectId?: string;
  range: StatisticsRange;
  interval: StatisticsRange;
  referenceData?: Date;
}

interface useDailyVisitGraphInfosQueryProps {
  range: StatisticsRange;
}

// projectId만 여기서 할당해주고 나머지 개별 props는 각자 호출하는쪽까지 내려간다.
//
const useStatistics = (projectId: string) => {
  const queryOptions = {
    enabled: !!projectId,
    retry: 0,
  };

  const useRecentVisitCountsQuery = () =>
    useQuery(
      ['recentVisitCounts', projectId],
      () => statisticsAPI.recentVisitCounts({ projectId }),
      queryOptions
    );

  const useSimpleProjectInfo = () =>
    useQuery(
      ['simpleProjectInfo', projectId],
      () => statisticsAPI.simpleProjectInfo(projectId),
      queryOptions
    );

  const useProductStatistics = () =>
    useQuery(
      ['productStatistics', projectId],
      () => statisticsAPI.productStatistics(projectId),
      {
        ...queryOptions,
        ...{
          onSuccess: (res) => console.log(res),
        },
      }
    );
  const useRequestInflowInfos = () =>
    useQuery(
      ['requestInflowInfos', projectId],
      () => statisticsAPI.requestInflowInfos(projectId),
      queryOptions
    );

  const useDailyVisitGraphInfosQuery = ({
    range,
  }: useDailyVisitGraphInfosQueryProps) =>
    useQuery(
      ['dailyVisitGraphInfos', projectId, range],
      () =>
        statisticsAPI.dailyVisitGraphInfos({
          projectId,
          range,
        }),
      queryOptions
    );

  const useVisitGraphInfosQuery = ({
    range,
    interval,
  }: useVisitGraphInfosQueryProps) => {
    return useQuery(
      ['visitGraphInfos', projectId, range, interval],
      () =>
        statisticsAPI.visitGraphInfos({
          projectId: projectId,
          range,
          interval,
        }),
      { ...queryOptions, ...{ enabled: !!projectId && !!range && !!interval } }
    );
  };

  return {
    useRecentVisitCountsQuery,
    useSimpleProjectInfo,
    useProductStatistics,
    useRequestInflowInfos,
    useDailyVisitGraphInfosQuery,
    useVisitGraphInfosQuery,
  };
};

export default useStatistics;
