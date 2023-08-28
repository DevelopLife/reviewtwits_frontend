import Shadow from './Common/Shadow';
import * as S from './LeadTimeRate.styles';
import useStatistics from 'hooks/queries/statistics';
import CommonLineChart from 'components/Chart/CommonLineChart';
interface ViewsStatisticsProps {
  projectName: string;
}

const LeadTimeInfoSection = ({ projectName }: ViewsStatisticsProps) => {
  const { useLeadTimeInfo } = useStatistics(projectName);
  const { data } = useLeadTimeInfo();

  const chartData = Object.entries(data || {}).map(([key, value]) => ({
    time: key,
    count: value,
  }));

  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.LeadTimeTitle>시간별 리드타임 비율</S.LeadTimeTitle>
        <S.GraphBox>
          <CommonLineChart
            data={chartData}
            chartKeys={{
              xKey: ['time'],
              tickKey: ['count'],
            }}
          />
        </S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default LeadTimeInfoSection;
