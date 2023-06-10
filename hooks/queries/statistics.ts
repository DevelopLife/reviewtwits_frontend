import { useQuery } from '@tanstack/react-query';
import { statisticsAPI } from 'api/statistics';

type StatisticsRange =
  | '1d'
  | '3d'
  | '5d'
  | '7d'
  | '15d'
  | '1mo'
  | '3mo'
  | '6mo'
  | '1y'
  | '3y'
  | '5y';

interface useStatisticsProps {
  projectId: string;
  range?: StatisticsRange;
  interval?: StatisticsRange;
}

const useStatistics = ({
  projectId,
  range = '1mo',
  interval = '1d',
}: useStatisticsProps) => {
  const useRecentVisitCountsQuery = () =>
    useQuery({
      queryKey: ['recentVisitCounts', projectId],
      queryFn: () =>
        statisticsAPI.recentVisitCounts({
          projectId,
        }),
      enabled: !!projectId,
      retry: 0,
    });

  const useDailyVisitGraphInfosQuery = () =>
    useQuery({
      queryKey: ['dailyVisitGraphInfos', projectId],
      queryFn: () =>
        statisticsAPI.dailyVisitGraphInfos({
          projectId,
          range,
        }),
      enabled: !!projectId,
      retry: 0,
    });

  const useVisitGraphInfosQuery = () =>
    useQuery({
      queryKey: ['visitGraphInfos', projectId],
      queryFn: () =>
        statisticsAPI.visitGraphInfos({
          projectId,
          range,
          interval,
        }),
      enabled: !!projectId,
      retry: 0,
    });

  return {
    useRecentVisitCountsQuery,
    useDailyVisitGraphInfosQuery,
    useVisitGraphInfosQuery,
  };
};

export default useStatistics;
