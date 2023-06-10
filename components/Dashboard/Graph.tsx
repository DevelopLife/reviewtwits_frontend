import GraphHeader from './GraphHeader';
// import GraphSide from './GraphSide';
import Shadow from './common/Shadow';

import * as S from './Graph.styles';
import SimpleLineChart from 'components/common/Charts/SimpleLineChart';
import useStatistics from 'hooks/queries/statistics';
import { VisitInfo } from 'typings/statistics';

interface GraphProps {
  projectId: string;
}

const Graph = ({ projectId }: GraphProps) => {
  const { useVisitGraphInfosQuery } = useStatistics({
    projectId,
  });

  const { data } = useVisitGraphInfosQuery();
  const chartData = data?.data.visitInfo;

  function transformData(datas: VisitInfo[]) {
    return datas.reduce((acc, cur, index) => {
      const { timeStamp } = cur;
      const previousVisitInfo = acc[index - 1];

      if (previousVisitInfo) {
        const { timeStamp: previouseTimeStamp } = acc[index - 1];

        const isDifferenceMonth =
          new Date(timeStamp).getMonth() !==
          new Date(previouseTimeStamp).getMonth();

        return [...acc, { ...cur, isDifferenceMonth }];
      }

      return [...acc, { ...cur, isDifferenceMonth: false }];
    }, [] as VisitInfo[]);
  }

  const transformedData = chartData && transformData(chartData);

  return (
    <S.Container>
      <Shadow boxSize="MEDIUM">
        <GraphHeader projectId={projectId} />
        {chartData?.length && transformedData?.length ? (
          <SimpleLineChart
            data={transformedData}
            dataKeys={['visitCount']}
            xKeys={['timeStamp']}
            strokeColors={['red']}
          />
        ) : null}
      </Shadow>
      {/* <GraphSide /> */}
    </S.Container>
  );
};

export default Graph;
