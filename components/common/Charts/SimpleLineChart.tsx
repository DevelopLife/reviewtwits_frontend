import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import dateChartTickFormatter from 'utils/charts';

const margin = {
  top: 30,
  right: 30,
  left: 20,
  bottom: 5,
};

interface SimpleLineChartProps {
  data: any[];
  dataKeys: string[];
  xKeys: string[];
  strokeColors: string[];
}

const SimpleLineChart = ({
  data,
  dataKeys,
  strokeColors,
}: SimpleLineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={data} margin={margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          interval={0}
          dataKey="timeStamp"
          tickFormatter={(value) => dateChartTickFormatter.date(value)}
        />
        <XAxis
          xAxisId="second"
          dataKey="timeStamp"
          axisLine={false}
          tickLine={false}
          interval={0}
          tickFormatter={(value, index) =>
            dateChartTickFormatter.month(value, index, data)
          }
        />
        <Tooltip />
        {dataKeys.map((key, index) => (
          <Line
            key={key + index}
            height={1}
            scale="band"
            type="monotone"
            dataKey="visitCount"
            dot={{ stroke: 'red', strokeWidth: 5 }}
            stroke={strokeColors[0]}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
