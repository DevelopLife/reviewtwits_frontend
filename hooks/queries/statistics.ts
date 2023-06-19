import { useQuery } from '@tanstack/react-query';
import { statisticsAPI } from 'api/statistics';
import type { StatisticsRange } from 'typings/chart';

interface useVisitGraphInfosQueryProps {
  // projectName?: string;
  range: StatisticsRange;
  interval: StatisticsRange;
  referenceData?: Date;
}

interface useDailyVisitGraphInfosQueryProps {
  range: StatisticsRange;
}

// projectId만 여기서 할당해주고 나머지 개별 props는 각자 호출하는쪽까지 내려간다.
//
const useStatistics = (projectName: string) => {
  const queryOptions = {
    enabled: !!projectName,
    retry: 0,
  };

  const useRecentVisitCountsQuery = () =>
    useQuery(
      ['recentVisitCounts', projectName],
      () => statisticsAPI.recentVisitCounts({ projectName }),
      queryOptions
    );

  const useSimpleProjectInfo = () =>
    useQuery(
      ['simpleProjectInfo', projectName],
      () => statisticsAPI.simpleProjectInfo(projectName),
      queryOptions
    );

  const useProductStatistics = () =>
    useQuery(
      ['productStatistics', projectName],
      () => statisticsAPI.productStatistics(projectName),
      {
        ...queryOptions,
        ...{
          onSuccess: (res) => console.log(res),
        },
      }
    );
  const useRequestInflowInfos = () =>
    useQuery(
      ['requestInflowInfos', projectName],
      () => statisticsAPI.requestInflowInfos(projectName),
      queryOptions
    );

  const useDailyVisitGraphInfosQuery = ({
    range,
  }: useDailyVisitGraphInfosQueryProps) =>
    useQuery(
      ['dailyVisitGraphInfos', projectName, range],
      () =>
        statisticsAPI.dailyVisitGraphInfos({
          projectName,
          range,
        }),
      queryOptions
    );

  const useVisitGraphInfosQuery = ({
    range,
    interval,
  }: useVisitGraphInfosQueryProps) => {
    return useQuery(
      ['visitGraphInfos', projectName, range, interval],
      () =>
        statisticsAPI.visitGraphInfos({
          projectName: projectName,
          range,
          interval,
        }),
      {
        ...queryOptions,
        ...{ enabled: !!projectName && !!range && !!interval },
      }
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
