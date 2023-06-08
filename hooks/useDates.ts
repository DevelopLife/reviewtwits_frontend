import { useState } from 'react';

const useDates = () => {
  const [referenceDate, setReferenceDate] = useState<Date>(new Date());
  const [focusedDate, setFocusedDate] = useState<Date>(new Date());

  function getDetailDate(referenceDate: Date) {
    const year = referenceDate.getFullYear();
    const month = referenceDate.getMonth();
    const date = referenceDate.getDate();

    return { year, month, date };
  }

  const getPreviousDate = (dates: Date[]) => {
    const firstDate = dates[0];
    const { year, month, date } = getDetailDate(firstDate);

    return new Date(year, month, date - 1);
  };
  const getNextDate = (dates: Date[]) => {
    const lastDate = dates[dates.length - 1];
    const { year, month, date } = getDetailDate(lastDate);

    return new Date(year, month, date + 1);
  };

  const changeReferenceDateIntoPreviousReferenceDate = (dates: Date[]) => {
    const previousReferenceDate = getPreviousDate(dates);
    previousReferenceDate && setReferenceDate(previousReferenceDate);
  };

  const changeReferenceDateIntoNextReferenceDate = (dates: Date[]) => {
    const nextReferenceDate = getNextDate(dates);
    nextReferenceDate && setReferenceDate(nextReferenceDate);
  };

  const changeFocusedDate = (date: Date) => setFocusedDate(date);

  return {
    referenceDate,
    focusedDate,
    changeFocusedDate,
    changeReferenceDateIntoPreviousReferenceDate,
    changeReferenceDateIntoNextReferenceDate,
  };
};

export default useDates;
