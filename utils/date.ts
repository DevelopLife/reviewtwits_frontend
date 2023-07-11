import type { StatisticsRange } from 'typings/chart';

const getDetailPadStartDate = (referenceDate: Date) => {
  const year = referenceDate.getFullYear();
  const month = String(referenceDate.getMonth() + 1).padStart(2, '0');
  const date = String(referenceDate.getDate()).padStart(2, '0');

  return { year, month, date };
};

const getTimeStamp = (referenceDate: Date) => {
  const { year, month, date } = getDetailPadStartDate(referenceDate);
  return `${year}-${month}-${date}`;
};

type PlusAndMinusOperator = '+' | '-';
type StatisticsRangeOperator = `${PlusAndMinusOperator}${StatisticsRange}`;

const transferStringIntervalToNumber = (
  targetDate: Date,
  interval: StatisticsRangeOperator
) => {
  // 정규표현식으로 숫자와 문자만 추출
  const numberExp = /[0-9]/g;
  const minusExp = /[-+]/g;
  const abbreviationExp = /[d,mo,y]/g;

  const matchedMinus = interval.match(minusExp);
  const matchedNumber = interval.match(numberExp);
  const matchedAbbreviation = interval.match(abbreviationExp);

  if (matchedAbbreviation && matchedNumber && matchedMinus) {
    const range = Number(matchedNumber[0]);

    const operator = matchedMinus[0];
    const totalRange = Number(operator + range);

    if (matchedAbbreviation[0] === 'd') {
      return new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate() + totalRange
      );
    }
    if (matchedAbbreviation[0] === 'm') {
      return new Date(
        targetDate.getFullYear(),
        targetDate.getMonth() + totalRange,
        targetDate.getDate()
      );
    }
    if (matchedAbbreviation[0] === 'y') {
      return new Date(
        targetDate.getFullYear() + totalRange,
        targetDate.getMonth(),
        targetDate.getDate()
      );
    }
  }
};

export { getDetailPadStartDate, getTimeStamp, transferStringIntervalToNumber };
