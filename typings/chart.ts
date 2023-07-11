export type TimePeriod = 'daily' | 'weekly' | 'monthly';
export type ChartType = 'bar' | 'line';

export type Intervals = Record<
  TimePeriod,
  { interval: StatisticsRange; range: StatisticsRange }
>;

export type StatisticsRange =
  | '1d'
  | '3d'
  | '5d'
  | '7d'
  | '15d'
  | '1mo'
  | '3mo'
  | '6mo'
  | '1y'
  | '3y'
  | '5y';
