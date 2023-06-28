import { useRecoilState } from 'recoil';

import chartState, { ChartStateDefaultKeys } from 'states/atomCharts';
import { VisitTimeStamp } from 'typings/statistics';

interface UsePrevAndNextChartProps {
  chartName: ChartStateDefaultKeys;
}

const useChartState = ({ chartName }: UsePrevAndNextChartProps) => {
  const [chartStates, setChartStates] = useRecoilState(chartState);
  const { endDate, focusedElementIndex } = chartStates[chartName];

  const changeFocusedElementIndex = (index: number) => {
    setChartStates((prevChartStates) => ({
      ...prevChartStates,
      [chartName]: { endDate, focusedElementIndex: index },
    }));
  };

  const changeEndDate = (date: VisitTimeStamp) => {
    setChartStates((prevChartStates) => ({
      ...prevChartStates,
      [chartName]: { endDate: date, focusedElementIndex },
    }));
  };

  return {
    chartStates,
    changeIndex: changeFocusedElementIndex,
    changeDate: changeEndDate,
  };
};

export default useChartState;
