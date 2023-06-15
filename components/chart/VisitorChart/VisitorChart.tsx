import styled from '@emotion/styled';
import type {
  LegendProps,
  TooltipProps,
  XAxisProps,
  YAxisProps,
  BarProps,
} from 'recharts';
import type {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { useState } from 'react';

import CustomBarChart from 'components/chart/CustomBarChart';
import CustomVisitorTooltip from 'components/chart/VisitorChart/CustomVisitorTooltip';
import CustomBar from 'components/chart/CustomBar';
import useStatistics from 'hooks/queries/statistics';
import dateChartTickFormatter, { transformData } from 'utils/charts';
import type { ChartType, Intervals, TimePeriod } from 'typings/chart';

const intervals: Intervals = {
  daily: { range: '1mo', interval: '1d' },
  weekly: { range: '3mo', interval: '7d' },
  monthly: { range: '1y', interval: '1mo' },
};

interface VisitorChartProps {
  projectId: string;
  type: ChartType;
  timePeriod: TimePeriod;
}

const VisitorChart = ({ projectId, type, timePeriod }: VisitorChartProps) => {
  // DEL: projectId만을 받고 나머지는 개별 useQueryHooks 에서 받도록 하자.
  const { useVisitGraphInfosQuery } = useStatistics(projectId);
  const timePeriodParams = intervals[timePeriod];

  const { data } = useVisitGraphInfosQuery(timePeriodParams);

  const visitInfos = data?.data.visitInfo;
  const transformedVisitInfo = transformData(visitInfos || []);

  const [focusedBarIndex, setFocusedBarIndex] = useState(-1);
  const onClick = (index: number) => setFocusedBarIndex(index);

  if (visitInfos) {
    return (
      <VisitorChartView
        type={type}
        data={transformedVisitInfo}
        xAxisList={[
          {
            dataKey: 'timeStamp',
            tickFormatter: dateChartTickFormatter.date,
          },
          {
            dataKey: 'timeStamp',
            xAxisId: 'second',
            axisLine: false,
            tickLine: false,
            tickFormatter: (value, index) =>
              dateChartTickFormatter.month(value, index, transformedVisitInfo),
          },
        ]}
        tooltipProps={{
          content: <CustomVisitorTooltip />,
        }}
        barPropsList={[
          {
            dataKey: 'visitCount',
            shape: (props) => (
              <CustomBar
                onClick={onClick}
                focusedBarIndex={focusedBarIndex}
                {...props}
              />
            ),
          },
        ]}
      />
    );
  }

  return null;
};

export default VisitorChart;

// TODO: 분리해야한다 파일

interface VisitorChartViewProps {
  data: object[];
  type: ChartType;
  xAxisList?: XAxisProps[];
  yAxisList?: YAxisProps[];
  tooltipProps?: TooltipProps<ValueType, NameType>;
  legendProps?: LegendProps;
  barPropsList: BarProps[];
}

const VisitorChartView = (props: VisitorChartViewProps) => {
  if (props.type === 'bar') {
    return (
      <S.VisitorChartContainer>
        <CustomBarChart {...props} />
      </S.VisitorChartContainer>
    );
  }
  if (props.type === 'line') {
    return <div>{props.type}</div>;
  }

  return null;
};

const S = {
  VisitorChartContainer: styled.section`
    width: 100%;
    height: 100%;
  `,
};
