import styled from '@emotion/styled';

import Shadow from 'components/Dashboard/common/Shadow';
import SimpleLineChart from 'components/common/Charts/SimpleLineChart';
import SimpleBarChart from 'components/common/Charts/SimpleBarChart';
import useStatistics from 'hooks/queries/statistics';
import { BOX_SIZES } from 'constants/dashboard';
import { transformData } from 'utils/charts';

type BoxSize = keyof typeof BOX_SIZES;
type BoxSizeProps = { boxSize: BoxSize };

interface VisitGraphProps {
  projectId: string;
  boxSize: BoxSize;
  graphType: 'line' | 'bar';
}

const VisitGraph = ({ projectId, boxSize, graphType }: VisitGraphProps) => {
  const { useVisitGraphInfosQuery } = useStatistics({
    projectId,
  });

  const { data } = useVisitGraphInfosQuery();
  const chartData = data?.data.visitInfo;

  const transformedData = chartData ? transformData(chartData) : [];

  if (!transformData.length) {
    return (
      <Shadow>
        <S.Container boxSize={boxSize} />
      </Shadow>
    );
  }

  if (graphType === 'bar') {
    return (
      <Shadow>
        <S.Container boxSize={boxSize}>
          <SimpleBarChart
            data={transformedData}
            focusedDate={new Date()}
            onClickBar={() => console.log('click')}
            onClickLeftButton={() => console.log('leftButton')}
            onClickRightButton={() => console.log('right Button')}
          />
        </S.Container>
      </Shadow>
    );
  }

  if (graphType === 'line') {
    return (
      <Shadow>
        <S.Container boxSize={boxSize}>
          {chartData?.length && transformedData?.length ? (
            <SimpleLineChart
              data={transformedData}
              dataKeys={['visitCount']}
              xKeys={['timeStamp']}
              strokeColors={['red']}
            />
          ) : null}
        </S.Container>
      </Shadow>
    );
  }

  return null;
};

export default VisitGraph;

const S = {
  Container: styled.div<BoxSizeProps>`
    width: ${({ boxSize }) => BOX_SIZES[boxSize].width}px;
    height: ${({ boxSize }) => BOX_SIZES[boxSize].height}px;
  `,
};
