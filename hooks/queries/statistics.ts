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
  range = '3mo',
  interval = '3d',
}: useStatisticsProps) => {
  const recentVisitCountsQuery = useQuery({
    queryKey: ['recentVisitCounts', projectId],
    queryFn: () =>
      statisticsAPI.recentVisitCounts({
        projectId,
      }),
  });

  const dailyVisitGraphInfosQuery = useQuery({
    queryKey: ['dailyVisitGraphInfos', projectId],
    queryFn: () =>
      statisticsAPI.dailyVisitGraphInfos({
        projectId,
        range,
      }),
  });

  const visitGraphInfosQuery = useQuery({
    queryKey: ['visitGraphInfos', projectId],
    queryFn: () =>
      statisticsAPI.visitGraphInfos({
        projectId,
        range,
        interval,
      }),
  });

  return {
    recentVisitCountsQuery,
    dailyVisitGraphInfosQuery,
    visitGraphInfosQuery,
  };
};

export default useStatistics;
