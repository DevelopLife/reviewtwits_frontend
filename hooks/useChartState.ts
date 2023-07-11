import { useRecoilState } from 'recoil';

import chartState, { ChartStateDefaultKeys } from 'states/atomCharts';
import { VisitTimeStamp } from 'typings/statistics';

interface UsePrevAndNextChartProps {
  chartName: ChartStateDefaultKeys;
}

const useChartState = ({ chartName }: UsePrevAndNextChartProps) => {
  const [chartStates, setChartStates] = useRecoilState(chartState);
  const { endDate, focusedTimeStamp, focusedElementIndex } =
    chartStates[chartName];

  const changeFocusedElementIndex = (index: number) => {
    setChartStates((prevChartStates) => ({
      ...prevChartStates,
      [chartName]: { endDate, focusedTimeStamp, focusedElementIndex: index },
    }));
  };

  const changeEndDate = (timeStamp: VisitTimeStamp) => {
    setChartStates((prevChartStates) => ({
      ...prevChartStates,
      [chartName]: {
        endDate: timeStamp,
        focusedTimeStamp,
        focusedElementIndex,
      },
    }));
  };

  const changeFocusedTimeStamp = (timeStamp: VisitTimeStamp) => {
    setChartStates((prevChartStates) => ({
      ...prevChartStates,
      [chartName]: {
        endDate,
        focusedTimeStamp: timeStamp,
        focusedElementIndex,
      },
    }));
  };

  return {
    chartStates,
    changeIndex: changeFocusedElementIndex,
    changeDate: changeEndDate,
    chageFocusedDate: changeFocusedTimeStamp,
  };
};

export default useChartState;
