import { atom } from 'recoil';
import { VisitTimeStamp } from 'typings/statistics';

type ChartNames = 'visitorChart';
export const chartStateDefault: Record<ChartNames, ChartState> = {
  visitorChart: {
    endDate: undefined,
    focusedTimeStamp: undefined,
    focusedElementIndex: -1,
  },
};

type ChartState = {
  endDate: undefined | VisitTimeStamp;
  focusedTimeStamp: undefined | VisitTimeStamp;
  focusedElementIndex: number;
};

export type ChartStateDefaultKeys = keyof typeof chartStateDefault;

const chartState = atom({
  key: 'charts',
  default: chartStateDefault,
});

export default chartState;

// isLast를 어떻게 구할 것인가?
