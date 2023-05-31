import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface SimpleLineChartProps {
  data: unknown[];
  dataKeys: string[];
  xKey: string;
  strokeColors: string[];
}

const SimpleLineChart = ({ data, dataKeys, xKey }: SimpleLineChartProps) => {
  const margin = {
    top: 30,
    right: 30,
    left: 20,
    bottom: 5,
  };

  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart width={500} height={300} data={data} margin={margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis interval={0} dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeys.map((key) => (
          <Line key={key} type="monotone" dataKey={key} stroke="#120d60" />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
