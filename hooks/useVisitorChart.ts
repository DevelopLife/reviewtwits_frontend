import { useEffect } from 'react';

import useStatistics from 'hooks/queries/statistics';
import useEndDate from 'hooks/useEndDate';
import useChartState from 'hooks/useChartState';
import { transformData } from 'utils/charts';
import type { ChartType, TimePeriod } from 'typings/chart';
import { intervals } from 'constants/chart';

interface VisitorChartProps {
  projectName: string;
  type: ChartType;
  timePeriod: TimePeriod;
}

// 여기서는 직접적으로 visitorChart관련된 로직
export const useVisitorChart = ({
  projectName,
  timePeriod,
}: VisitorChartProps) => {
  const { chartStates, chageFocusedDate, changeIndex } = useChartState({
    chartName: 'visitorChart',
  });
  // api 호출위한 부분
  const timePeriodParams = intervals[timePeriod];
  // api 호출하는 부분
  const { useVisitGraphInfosQuery } = useStatistics(projectName);
  const { data } = useVisitGraphInfosQuery({
    ...timePeriodParams,
    endDate: chartStates.visitorChart.endDate,
  });

  // 차트에서 쓰려고 변환하는 부분
  const visitInfos = data?.data.visitInfo;
  const transformedVisitInfo = transformData(visitInfos || []);

  const focusedBarTimeStamp =
    visitInfos?.[chartStates.visitorChart.focusedElementIndex]?.timeStamp;

  // index가 변경이 되면 data의 index로 접근해서 state를 변경하는 부분
  useEffect(() => {
    focusedBarTimeStamp && chageFocusedDate(focusedBarTimeStamp);
  }, [focusedBarTimeStamp]);

  const { buttonStates, onClickPrevChartButton, onClickNextChartButton } =
    useVisitorChartChage(transformedVisitInfo, timePeriod);

  return {
    chartState: chartStates,
    chartButtonState: buttonStates,
    chartData: transformedVisitInfo,
    onClickBar: changeIndex,
    onClickPrevButton: onClickPrevChartButton,
    onClickNextButton: onClickNextChartButton,
  };
};

export const useVisitorChartChage = (
  data: { timeStamp: string }[],
  timePeriod: TimePeriod
) => {
  const { changeDate } = useChartState({ chartName: 'visitorChart' });
  const endVisitTimeStamp = data[data.length - 1]?.timeStamp;
  const firstVisitTimeStamp = data[0]?.timeStamp;

  const firstVisitDate = new Date(firstVisitTimeStamp);
  const lastVisitDate = new Date(endVisitTimeStamp);

  const timePeriodParams = intervals[timePeriod];

  const { buttonStates, onClickPrevChartButton, onClickNextChartButton } =
    useEndDate({
      firstDate: firstVisitDate,
      lastDate: lastVisitDate,
      interval: timePeriodParams.interval,
      range: timePeriodParams.range,
      refetch: changeDate,
    });

  return {
    buttonStates,
    onClickPrevChartButton,
    onClickNextChartButton,
  };
};
