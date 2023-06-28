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
import type { ReactNode } from 'react';

import type { ChartType, TimePeriod } from 'typings/chart';
import CustomBarChart from 'components/chart/CustomBarChart';
import CustomVisitorTooltip from 'components/chart/VisitorChart/CustomVisitorTooltip';
import CustomBar from 'components/chart/CustomBar';
import VisitorChartButton from 'components/chart/VisitorChart/VisitorChartButton';
import dateChartTickFormatter from 'utils/charts';
import { useVisitorChart } from 'hooks/useVisitorChart';

interface VisitorChartProps {
  projectName: string;
  type: ChartType;
  timePeriod: TimePeriod;
}

const VisitorChart = ({ projectName, type, timePeriod }: VisitorChartProps) => {
  const {
    chartState,
    chartButtonState,
    chartData,
    onClickBar,
    onClickPrevButton,
    onClickNextButton,
  } = useVisitorChart({
    projectName,
    timePeriod,
    type,
  });

  if (chartData) {
    return (
      <VisitorChartView
        type={type}
        data={chartData}
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
              dateChartTickFormatter.month(value, index, chartData),
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
                onClick={onClickBar}
                focusedBarIndex={chartState.visitorChart.focusedElementIndex}
                {...props}
              />
            ),
          },
        ]}
        buttons={{
          left: (
            <VisitorChartButton
              direction={'left'}
              disabled={chartButtonState.left}
              onClick={onClickPrevButton}
            />
          ),
          right: (
            <VisitorChartButton
              direction={'right'}
              disabled={chartButtonState.right}
              onClick={onClickNextButton}
            />
          ),
        }}
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
  buttons: { left: ReactNode; right: ReactNode };
}

const VisitorChartView = (props: VisitorChartViewProps) => {
  if (props.type === 'bar') {
    return (
      <S.VisitorChartContainer>
        <CustomBarChart {...props} />
        <S.ChartButtonWrap>
          {props.buttons.left && props.buttons.left}
          {props.buttons.right && props.buttons.right}
        </S.ChartButtonWrap>
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
    position: relative;
    width: 100%;
    height: 100%;
  `,
  ChartButtonWrap: styled.div`
    position: absolute;
    display: flex;
    left: -3%;
    right: -3%;
    bottom: 5%;
    justify-content: space-between;
  `,
};
