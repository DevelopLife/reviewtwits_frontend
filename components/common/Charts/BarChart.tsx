import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { VisitInfo } from 'typings/statistics';

interface BarChartProps {
  data: VisitInfo[];
}

const SimpleBarChart = ({ data }: BarChartProps) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        <XAxis dataKey="timeStamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="visitCount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;

const S = {};
