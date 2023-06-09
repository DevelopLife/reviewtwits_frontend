import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import styled from '@emotion/styled';

import type { VisitInfo } from 'typings/statistics';

import CustomBar from 'components/chart/CustomBar';
import CustomTooltip from 'components/chart/CustomTootip';

interface BarChartProps {
  data: VisitInfo[] | undefined;
  focusedDate: Date;
  onClickBar: (date: Date) => void;
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
}

const SimpleBarChart = ({
  data,
  focusedDate,
  onClickBar,
  onClickLeftButton,
  onClickRightButton,
}: BarChartProps) => {
  if (data) {
    return (
      <S.SimpleBarChartContainer>
        <S.Button onClick={onClickLeftButton}>좌측</S.Button>
        <S.ChartWrap>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis
                xAxisId="0"
                dataKey="timeStamp"
                interval={0}
                tickSize={10}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="visitCount"
                fill="#8884d8"
                shape={(props) => (
                  <CustomBar
                    {...props}
                    onClick={onClickBar}
                    focusedDate={focusedDate}
                  />
                )}
              />
            </BarChart>
          </ResponsiveContainer>
        </S.ChartWrap>
        <S.Button onClick={onClickRightButton}>우측</S.Button>
      </S.SimpleBarChartContainer>
    );
  }

  return null;
};

const S = {
  SimpleBarChartContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  `,
  ChartWrap: styled.div`
    width: 80%;
    height: 90%;
  `,
  Button: styled.button`
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
  `,
};

export default SimpleBarChart;
