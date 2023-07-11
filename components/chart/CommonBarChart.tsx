import CustomBarChart from 'components/chart/CustomBarChart';

type ChartKeys = {
  xKey: string[];
  yKey: string[];
  tickKey: string[];
};

interface CommonBarChartProps {
  data: object[];
  chartKeys: ChartKeys;
}

const CommonBarChart = ({ data, chartKeys }: CommonBarChartProps) => {
  const xAxisList = chartKeys.xKey.map((key) => ({ dataKey: key }));
  const yAxisList = chartKeys.yKey.map((key) => ({ dataKey: key }));
  const tickList = chartKeys.tickKey.map((key) => ({ dataKey: key }));

  const tooltipProps = {};

  return (
    <CustomBarChart
      data={data}
      xAxisList={xAxisList}
      yAxisList={yAxisList}
      tooltipProps={tooltipProps}
      barPropsList={tickList}
    />
  );
};

export default CommonBarChart;
