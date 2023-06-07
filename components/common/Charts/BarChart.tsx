import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  // TooltipProps,
} from 'recharts';
import styled from '@emotion/styled';

// import { DefaultTooltipContent } from 'recharts/lib/component/DefaultTooltipContent';

import type { TooltipProps } from 'recharts';
import type {
  ValueType,
  NameType,
  // Payload,
} from 'recharts/types/component/DefaultTooltipContent';
import type { VisitGraphInfos, VisitInfo } from 'typings/statistics';

interface BarChartProps {
  data: VisitInfo[] | undefined;
}

const CustomTooltip = (props: TooltipProps<ValueType, NameType>) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const { value } = payload[0];

    return (
      <S.CustomTootipItem>
        <S.Intro>방문자수 : {value}명</S.Intro>
      </S.CustomTootipItem>
    );

    // const newPayload: Payload<ValueType, NameType>[] = [
    //   {
    //     ...payload[0],
    //     name: '방문자수',
    //   },
    // ];

    // return <DefaultTooltipContent {...props} payload={newPayload} />;
  }

  return null;
};

const S = {
  CustomTootipItem: styled.div`
    background-color: white;
    padding: 15px;
    border-radius: 5px;
  `,
  Intro: styled.div``,
};

const SimpleBarChart = ({ data }: BarChartProps) => {
  if (data) {
    return (
      <ResponsiveContainer>
        <BarChart
          data={
            data
              ? data
              : MOCK_DATA.visitInfo.map(
                  ({ timeStamp, visitCount, previousCompare }) => {
                    const splitedTimeStamp = timeStamp.split('-');

                    return {
                      timeStamp: `${splitedTimeStamp[1]}.${splitedTimeStamp[2]}`,
                      visitCount,
                      previousCompare,
                    };
                  }
                )
          }
        >
          <XAxis dataKey="timeStamp" interval={0} tickSize={5} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="visitCount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return null;
};

export default SimpleBarChart;

const MOCK_DATA: VisitGraphInfos = {
  interval: '3d',
  range: '3mo',
  todayVisit: 30,
  totalVisit: 1000,
  yesterdayVisit: 100,
  visitInfo: [
    { timeStamp: '2023-03-01', visitCount: 300, previousCompare: 50 },
    { timeStamp: '2023-03-02', visitCount: 1500, previousCompare: 50 },
    { timeStamp: '2023-03-03', visitCount: 1, previousCompare: 50 },
    { timeStamp: '2023-03-04', visitCount: 14, previousCompare: 50 },
    { timeStamp: '2023-03-05', visitCount: 202, previousCompare: 50 },
    { timeStamp: '2023-03-06', visitCount: 343, previousCompare: 50 },
    { timeStamp: '2023-03-07', visitCount: 0, previousCompare: 50 },
    { timeStamp: '2023-03-08', visitCount: 892, previousCompare: 50 },
    { timeStamp: '2023-03-09', visitCount: 3, previousCompare: 50 },
    { timeStamp: '2023-03-10', visitCount: 30, previousCompare: 50 },
    { timeStamp: '2023-03-11', visitCount: 300, previousCompare: 50 },
    { timeStamp: '2023-03-12', visitCount: 1500, previousCompare: 50 },
    { timeStamp: '2023-03-13', visitCount: 1, previousCompare: 50 },
    { timeStamp: '2023-03-14', visitCount: 14, previousCompare: 50 },
    { timeStamp: '2023-03-15', visitCount: 202, previousCompare: 50 },
    { timeStamp: '2023-03-16', visitCount: 343, previousCompare: 50 },
    { timeStamp: '2023-03-17', visitCount: 0, previousCompare: 50 },
    { timeStamp: '2023-03-18', visitCount: 892, previousCompare: 50 },
    { timeStamp: '2023-03-19', visitCount: 3, previousCompare: 50 },
    { timeStamp: '2023-03-20', visitCount: 30, previousCompare: 50 },
    { timeStamp: '2023-03-21', visitCount: 300, previousCompare: 50 },
    { timeStamp: '2023-03-22', visitCount: 1500, previousCompare: 50 },
    { timeStamp: '2023-03-23', visitCount: 1, previousCompare: 50 },
    { timeStamp: '2023-03-24', visitCount: 14, previousCompare: 50 },
    { timeStamp: '2023-03-25', visitCount: 202, previousCompare: 50 },
    { timeStamp: '2023-03-26', visitCount: 343, previousCompare: 50 },
    { timeStamp: '2023-03-27', visitCount: 0, previousCompare: 50 },
    { timeStamp: '2023-03-28', visitCount: 892, previousCompare: 50 },
    { timeStamp: '2023-03-29', visitCount: 3, previousCompare: 50 },
    { timeStamp: '2023-03-30', visitCount: 30, previousCompare: 50 },
    { timeStamp: '2023-03-31', visitCount: 30, previousCompare: 50 },
  ],
};

// const S = {};
