import { MouseEventHandler, useEffect, useState } from 'react';
import { VisitInfo } from 'typings/statistics';

type CreateInitialStateParams = {
  interval: number;
  elementCount: number;
};
interface useVisitChartProps {
  createInitialStateParams: CreateInitialStateParams;
}

const useVisitChart = ({ createInitialStateParams }: useVisitChartProps) => {
  const [lastDate, useLastDate] = useState<Date>(new Date());
  const [selectedValue, useSelectedValue] = useState<
    'day' | 'week' | 'month'
  >();
  const [barChartDatas, setBarChartDatas] = useState<string[]>([]);
  const [origin, useOrigin] = useState<VisitInfo[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useOrigin(() => {
      const nextOrigin = createInitialOrigin(selectedValue || 'day');
      return nextOrigin;
    });
  }, [barChartDatas]);

  const handleSelectedValueOnClick: MouseEventHandler = (event) => {
    if (event.target === event.currentTarget) return;

    const target = event.target as HTMLButtonElement;
    const { name } = target;

    if (name === 'day' || name === 'week' || name === 'month') {
      changeSelectedValue(name);
    }
  };

  const changeSelectedValue = (selectedElement: 'day' | 'week' | 'month') => {
    useSelectedValue(selectedElement);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createInitialOrigin = (selectedValue: 'day' | 'week' | 'month') => {
    const dates = createInitialState({
      interval:
        selectedValue === 'month' ? 30 : selectedValue === 'week' ? 7 : 1,
      elementCount: 20,
    });

    const intialOrigin = dates.map(
      (date): VisitInfo => ({
        timeStamp: date,
        visitCount: 0,
        previousCompare: 0,
      })
    );

    return intialOrigin;
  };

  useEffect(() => {
    const dates = createInitialState(createInitialStateParams);

    setBarChartDatas(() => [...dates]);
  }, [selectedValue]);

  const createInitialState = ({
    interval,
    elementCount,
  }: CreateInitialStateParams) => {
    const dates = [];

    for (let i = 0; i < elementCount; i++) {
      const date = new Date(
        lastDate.getFullYear(),
        lastDate.getMonth(),
        lastDate.getDate() - i * interval
      )
        .toLocaleDateString()
        .split('.');

      const month = date[1];
      const day = date[2];

      dates.push(`${month.trim()}.${day.trim()}`);
    }

    return dates.reverse();
  };

  return {
    origin,
    handleSelectedValueOnClick,
  };
};

export default useVisitChart;

// 기본상태
// 차트 클릭시 selectedValue 변경  => key 값으로 객체 만듬
