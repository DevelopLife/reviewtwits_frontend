import { useEffect, useState } from 'react';

import { StatisticsRange } from 'typings/chart';
import { getTimeStamp, transferStringIntervalToNumber } from 'utils/date';

interface useEndDateProps {
  firstDate: Date;
  lastDate: Date;
  interval: StatisticsRange;
  range: StatisticsRange;
  refetch: (endDate: any) => void;
}

type DateInterval = `${'+' | '-'}${StatisticsRange}`;

const useEndDate = ({
  firstDate,
  lastDate,
  interval,
  range,
  refetch,
}: useEndDateProps) => {
  const [isLastButtons, setIsLastButtons] = useState({
    left: false,
    right: false,
  });

  // const prevEndDateInterval: DateInterval = `-${interval}`;

  const nextEndDateRange: DateInterval = `+${interval}`;
  const nextEndDateInterval: DateInterval = `+${range}`;

  // const prevEndDate = transferStringIntervalToNumber(
  //   firstDate,
  //   prevEndDateInterval
  // );
  const nextRangeDate = transferStringIntervalToNumber(
    lastDate,
    nextEndDateInterval
  );
  const nextEndDate =
    nextRangeDate &&
    transferStringIntervalToNumber(nextRangeDate, nextEndDateRange);

  const prevEndDate = new Date(
    firstDate.getFullYear(),
    firstDate.getMonth(),
    firstDate.getDate() - 1
  );
  const onClickPrevChartButton = () => {
    const newEndDate = prevEndDate && getTimeStamp(prevEndDate);
    newEndDate && refetch(newEndDate);
  };

  const onClickNextChartButton = () => {
    const newEndDate = nextEndDate && getTimeStamp(nextEndDate);
    newEndDate && refetch(newEndDate);
  };

  const isLast = nextEndDate ? nextEndDate > new Date() : true;

  useEffect(() => {
    setIsLastButtons(({ left, right }) => ({ left, right: isLast }));
  }, [isLast]);

  return {
    buttonStates: isLastButtons,
    prevEndDate,
    nextEndDate,
    onClickPrevChartButton,
    onClickNextChartButton,
  };
};

export default useEndDate;
