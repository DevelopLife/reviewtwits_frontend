import Shadow from './common/Shadow';
import * as S from './LeadTimeRate.styles';
// import SimpleLineChart from 'components/common/Charts/SimpleLineChart';
import useStatistics from 'hooks/queries/statistics';
import CustomBarChart from 'components/chart/CustomBarChart';
interface ViewsStatisticsProps {
  projectName: string;
  // chartDatas?: object[];
  // dataKey: string;
}

const LeadTimeInfoSection = ({
  projectName,
}: // chartDatas,
// dataKey,
ViewsStatisticsProps) => {
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
          {/* TODO: change line chart */}
          <CustomBarChart
            xAxisList={[
              {
                dataKey: 'time',
              },
            ]}
            data={chartData}
            barPropsList={[
              {
                dataKey: 'count',
              },
            ]}
          />
        </S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default LeadTimeInfoSection;
