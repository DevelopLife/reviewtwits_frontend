import React from 'react';
import Shadow from './common/Shadow';
import * as S from './LeadTimeRate.styles';
import SimpleLineChart from 'components/common/Charts/SimpleLineChart';
interface ViewsStatisticsProps {
  chartDatas?: object[];
  dataKey: string;
}

const LeadTimeRate = ({ chartDatas, dataKey }: ViewsStatisticsProps) => {
  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.LeadTimeTitle>시간별 리드타임 비율</S.LeadTimeTitle>
        <S.GraphBox>
          <SimpleLineChart
            data={chartDatas || []}
            dataKeys={[dataKey]}
            xKey={'timeStamp'}
            strokeColors={[]}
          />
        </S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default LeadTimeRate;
