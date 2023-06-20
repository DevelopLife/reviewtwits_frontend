import type {
  TooltipProps,
  LegendProps,
  BarProps,
  XAxisProps,
  YAxisProps,
  LineProps,
} from 'recharts';
import {
  ResponsiveContainer,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

interface CustomLineChartProps {
  data: object[];
  xAxisList?: XAxisProps[];
  yAxisList?: YAxisProps[];
  tooltipProps?: TooltipProps<ValueType, NameType>;
  legendProps?: LegendProps;
  linePropsList: LineProps[];
}

const CustomLineChart = ({
  data,
  xAxisList,
  yAxisList,
  tooltipProps,
  legendProps,
  linePropsList,
}: CustomLineChartProps) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        {xAxisList?.map(
          (props, index) =>
            props.dataKey && <XAxis key={`x-${index}`} {...props} />
        )}
        {yAxisList?.map(
          (props, index) =>
            props.dataKey && <YAxis key={`y-${index}`} {...props} />
        )}
        {tooltipProps && <Tooltip {...tooltipProps} />}
        {legendProps && fixRefType(Legend, legendProps)}
        {linePropsList.map((props, index) => fixRefType(Line, props, index))}
      </LineChart>
    </ResponsiveContainer>
  );
};

const fixRefType = (
  Element: any,
  props: LegendProps | BarProps | LineProps,
  index?: number
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref, ...restProps } = props;
  return <Element key={index} {...restProps} />;
};

export default CustomLineChart;

const S = {};
