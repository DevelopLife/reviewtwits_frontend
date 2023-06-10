import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  // YAxis,
  // Legend,
  ResponsiveContainer,
} from 'recharts';

interface SimpleLineChartProps {
  data: any[];
  dataKeys: string[];
  xKeys: string[];
  strokeColors: string[];
}

const SimpleLineChart = ({
  data,
  dataKeys,
  // xKeys,
  strokeColors,
}: SimpleLineChartProps) => {
  const margin = {
    top: 30,
    right: 30,
    left: 20,
    bottom: 5,
  };

  // const renderCustomTick = (value: string, index: number) => {
  //   const { isDifferenceMonth, timeStamp } = data[index] as {
  //     isDifferenceMonth: boolean;
  //     timeStamp: string;
  //   };

  //   return isDifferenceMonth ? `${new Date(timeStamp).getMonth() + 1}월` : '';
  // };

  const tickFormatter = {
    date: (value: Date) => new Date(value).getDate().toString(),
    month: (value: string, index: number) => {
      const { isDifferenceMonth, timeStamp } = data[index] as {
        isDifferenceMonth: boolean;
        timeStamp: string;
      };

      return isDifferenceMonth ? `${new Date(timeStamp).getMonth() + 1}월` : '';
    },
  };

  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart width={500} height={300} data={data} margin={margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          interval={0}
          dataKey="timeStamp"
          tickFormatter={(value) => tickFormatter.date(value)}
        />
        <XAxis
          xAxisId="quarter"
          dataKey="timeStamp"
          axisLine={false}
          tickLine={false}
          interval={0}
          tickFormatter={(value, index) => tickFormatter.month(value, index)}
        />
        <Tooltip />
        {/* <Legend /> */}
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
