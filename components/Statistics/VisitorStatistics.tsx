import { UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import Shadow from './common/Shadow';
import * as S from './VisitorStatistics.styles';
import { RecentVisitCounts } from 'typings/statistics';

type VisitorStatisticsProps = Partial<RecentVisitCounts> & {
  getRecentVisitCounts: UseQueryResult<
    AxiosResponse<RecentVisitCounts, any>,
    unknown
  >;
};

const VisitorStatistics = ({
  getRecentVisitCounts,
}: VisitorStatisticsProps) => {
  const { data: recentVisitCounts, isLoading } = getRecentVisitCounts;

  // if (isLoading) return null;

  return (
    <Shadow boxWidth={682} boxHeight={200}>
      <S.Container>
        <S.VisitorInfoBox>
          <S.VisitorInfo>오늘 방문자수</S.VisitorInfo>
          <S.VisitorTotalNumber>
            {recentVisitCounts?.data.todayVisit}
          </S.VisitorTotalNumber>
        </S.VisitorInfoBox>
        <S.VisitorInfoBox>
          <S.VisitorInfo>어제 방문수</S.VisitorInfo>
          <S.VisitorTotalNumber>
            {recentVisitCounts?.data.yesterdayVisit}
          </S.VisitorTotalNumber>
        </S.VisitorInfoBox>
        <S.VisitorInfoBox>
          <S.VisitorInfo>누적 방문수</S.VisitorInfo>
          <S.VisitorTotalNumber pointColor="blue_1">
            {recentVisitCounts?.data.totalVisit}
          </S.VisitorTotalNumber>
        </S.VisitorInfoBox>
      </S.Container>
    </Shadow>
  );
};

export default VisitorStatistics;
