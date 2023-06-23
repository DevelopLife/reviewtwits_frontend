export type DeviceType = 'MOBILE' | 'PC';

export type VisitInfo = {
  timeStamp: VisitTimeStamp;
  visitCount: number;
  previousCompare: number;
};

export type VisitGraphData = {
  isDifference: boolean;
} & VisitInfo;

export type DailyVisitGraphInfos = {
  range: string;
  visitInfo: VisitInfo[];
};

export type RecentVisitCounts = {
  todayVisit: number;
  yesterdayVisit: number;
  totalVisit: number;
};

export type VisitTimeStamp = `${number}${number}${number}${number}-${
  | 0
  | 1}${number}-${0 | 1 | 2 | 3}${number}`;

export type VisitGraphInfos = {
  interval: '3d';
  range: '3mo';
  visitInfo: VisitInfo[];
} & RecentVisitCounts;

export type InflowInfos = {
  total: number;
  naver: number;
  daum: number;
  google: number;
  zoom: number;
  bing: number;
  yahoo: number;
  etc: number;
};

export type LeadTimeInfo = {
  '0': number;
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  '10': number;
  '11': number;
  '12': number;
  '13': number;
  '14': number;
  '15': number;
  '16': number;
  '17': number;
  '18': number;
  '19': number;
  '20': number;
  '21': number;
  '22': number;
  '23': number;
};
