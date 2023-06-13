import { VisitGraphData, VisitInfo } from 'typings/statistics';

type Data = {
  timeStamp: Date;
  isDifference: boolean;
};

// TODO: Refactoring 중복코드 제거
const dateChartTickFormatter = {
  date: (value: Date) => new Date(value).getDate().toString(),
  month: (value: string, index: number, data: Data[]) => {
    const { isDifference, timeStamp } = data[index];

    return isDifference ? `${new Date(timeStamp).getMonth() + 1}월` : '';

    // 기준이 될 키를 넣어주면 그 기준으로 boolean으로 해결한다.
    // return isDifferenceMonth ? `${new Date(timeStamp).getMonth() + 1}월` : '';
  },
  year: (value: string, index: number, data: Data[]) => {
    const { isDifference, timeStamp } = data[index];

    return isDifference ? `${new Date(timeStamp).getFullYear()}년` : '';
  },
};

export function transformData(datas: VisitInfo[]) {
  const returnInitialData: VisitGraphData[] = datas.map((value) => ({
    ...value,
    isDifference: false,
  }));
  const result = returnInitialData.reduce((acc, cur, index) => {
    const { timeStamp } = cur;
    const previousVisitInfo = acc[index - 1];

    if (previousVisitInfo) {
      const { timeStamp: previouseTimeStamp } = acc[index - 1];
      const isDifference =
        new Date(timeStamp).getMonth() !==
        new Date(previouseTimeStamp).getMonth();

      const nextAcc = [...acc, { ...cur, isDifference }];

      return nextAcc;
    }

    return [...acc, { ...cur, isDifference: false }];
  }, [] as VisitGraphData[]);

  return result;
}

export default dateChartTickFormatter;
