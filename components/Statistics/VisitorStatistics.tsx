import { Colors } from 'styles/theme';
import Shadow from './common/Shadow';
import * as S from './VisitorStatistics.styles';
import useStatistics from 'hooks/queries/statistics';

interface VisitorStatisticsProps {
  projectName: string;
}

interface RecentCountDatas {
  text: string;
  count?: number;
  pointColor?: Colors;
}

const VisitorStatistics = ({ projectName }: VisitorStatisticsProps) => {
  const { useRecentVisitCountsQuery } = useStatistics(projectName);
  const { data: recentVisitCounts, isLoading } = useRecentVisitCountsQuery();

  //TODO: Suspense

  const recentCountDatas: RecentCountDatas[] = [
    {
      text: '오늘 방문자수',
      count: recentVisitCounts?.data.todayVisit,
      pointColor: undefined,
    },
    {
      text: '오늘 방문자수',
      count: recentVisitCounts?.data.yesterdayVisit,
      pointColor: undefined,
    },
    {
      text: '오늘 방문자수',
      count: recentVisitCounts?.data.totalVisit,
      pointColor: 'blue_1',
    },
  ];

  return (
    <Shadow boxWidth={682} boxHeight={200}>
      <S.Container>
        {recentCountDatas.map(({ text, count, pointColor }) => (
          <S.VisitorInfoBox key={text}>
            <S.VisitorInfo>{text}</S.VisitorInfo>
            <S.VisitorTotalNumber pointColor={pointColor}>
              {count}
            </S.VisitorTotalNumber>
          </S.VisitorInfoBox>
        ))}
        {/* <S.VisitorInfoBox>
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
        </S.VisitorInfoBox> */}
      </S.Container>
    </Shadow>
  );
};

export default VisitorStatistics;
