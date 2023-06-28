import { atom } from 'recoil';
import { VisitTimeStamp } from 'typings/statistics';

export const chartStateDefault: { [key: string]: ChartState } = {
  visitorChart: {
    endDate: undefined,
    focusedElementIndex: -1,
  },
};

type ChartState = {
  endDate: undefined | VisitTimeStamp;
  focusedElementIndex: number;
};

export type ChartStateDefaultKeys = keyof typeof chartStateDefault;

const chartState = atom({
  key: 'charts',
  default: chartStateDefault,
});

export default chartState;

// isLast를 어떻게 구할 것인가?
