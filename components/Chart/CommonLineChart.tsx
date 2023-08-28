import { LineProps } from 'recharts';

import CustomLineChart from 'components/Chart/CustomLineChart';
import theme from 'styles/theme';

type ChartKeysProps = {
  xKey: string[];
  yKey?: string[];
  tickKey: string[];
};

interface CommonLineChartProps {
  data: object[];
  chartKeys: ChartKeysProps;
}

const CommonLineChart = ({ data, chartKeys }: CommonLineChartProps) => {
  const xAxisList = chartKeys.xKey.map((key) => ({ dataKey: key }));
  const yAxisList = chartKeys.yKey?.map((key) => ({ dataKey: key }));
  const tickList = chartKeys.tickKey.map((key) => {
    const tickProps: LineProps = {
      dataKey: key,
      type: 'monotone',
      stroke: theme.colors.blue_1,
      strokeWidth: 2,
      dot: { stroke: theme.colors.blue_1, strokeWidth: 3 },
    };

    return tickProps;
  });

  const tooltipProps = {};

  return (
    <CustomLineChart
      data={data}
      xAxisList={xAxisList}
      yAxisList={yAxisList}
      tooltipProps={tooltipProps}
      linePropsList={tickList}
    />
  );
};

export default CommonLineChart;
