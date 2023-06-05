import React from 'react';
import Shadow from './common/Shadow';
import * as S from './VisitorStatistics.styles';
import { RecentVisitCounts } from 'typings/statistics';

type VisitorStatisticsProps = Partial<RecentVisitCounts>;

const VisitorStatistics = ({
  todayVisit = 0,
  yesterdayVisit = 0,
  totalVisit = 0,
}: VisitorStatisticsProps) => {
  return (
    <Shadow boxWidth={682} boxHeight={200}>
      <S.Container>
        <S.VisitorInfoBox>
          <S.VisitorInfo>오늘 방문자수</S.VisitorInfo>
          <S.VisitorTotalNumber>{todayVisit}</S.VisitorTotalNumber>
        </S.VisitorInfoBox>
        <S.VisitorInfoBox>
          <S.VisitorInfo>어제 방문수</S.VisitorInfo>
          <S.VisitorTotalNumber>{yesterdayVisit}</S.VisitorTotalNumber>
        </S.VisitorInfoBox>
        <S.VisitorInfoBox>
          <S.VisitorInfo>누적 방문수</S.VisitorInfo>
          <S.VisitorTotalNumber pointColor="blue_1">
            {totalVisit}
          </S.VisitorTotalNumber>
        </S.VisitorInfoBox>
      </S.Container>
    </Shadow>
  );
};

export default VisitorStatistics;
