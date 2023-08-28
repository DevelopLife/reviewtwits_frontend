import type {
  TooltipProps,
  LegendProps,
  BarProps,
  XAxisProps,
  YAxisProps,
} from 'recharts';
import {
  ResponsiveContainer,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

interface CustomBarChartProps {
  data: object[];
  xAxisList?: XAxisProps[];
  yAxisList?: YAxisProps[];
  tooltipProps?: TooltipProps<ValueType, NameType>;
  legendProps?: LegendProps;
  barPropsList: BarProps[];
}

const CustomBarChart = ({
  data,
  xAxisList,
  yAxisList,
  tooltipProps,
  legendProps,
  barPropsList,
}: CustomBarChartProps) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        {xAxisList?.map((props, index) => (
          <XAxis key={`x-${index}`} {...props} />
        ))}
        {yAxisList?.map((props, index) => (
          <YAxis key={`y-${index}`} {...props} />
        ))}
        {tooltipProps && <Tooltip {...tooltipProps} />}
        {legendProps && fixRefType(Legend, legendProps)}
        {barPropsList.map((props, index) => fixRefType(Bar, props, index))}
      </BarChart>
    </ResponsiveContainer>
  );
};

const fixRefType = (
  Element: any,
  props: LegendProps | BarProps,
  index?: number
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref, ...restProps } = props;
  return <Element key={index} {...restProps} />;
};

export default CustomBarChart;

const S = {};
