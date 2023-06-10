export const formattedImageUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`;

export const formattedProfileImageUrl = (url?: string | null) =>
  url ? formattedImageUrl(url) : '/images/default_user_profile_img.png';

export const formattedLastTime = (pastTimeArr?: number[]): string => {
  if (!pastTimeArr) return '';

  const [year, month, day, hour, min, sec] = pastTimeArr;
  const now = new Date();
  const pastDate = new Date(year, month - 1, day, hour, min, sec || 0);
  const timeDiff = now.getTime() - pastDate.getTime();

  const minDiff = Math.floor(timeDiff / 1000 / 60);
  const hourDiff = Math.floor(minDiff / 60);
  const dayDiff = Math.floor(hourDiff / 24);

  return dayDiff > 0
    ? `${dayDiff}d`
    : hourDiff > 0
    ? `${hourDiff}h`
    : minDiff > 0
    ? `${minDiff}m`
    : 'now';
};

export const formattedCreateDate = (createdDate: string): string => {
  const dateArr = createdDate?.split('T');
  const createDateFormat = dateArr[0].split('-');
  return createDateFormat.join('/');
};

export const formattedCreateDateArr = (
  createdDate: [number, number, number]
): string => {
  const [year, month, day] = createdDate;

  const createDateFormat = [
    year,
    String(month).padStart(2, '0'),
    String(day).padStart(2, '0'),
  ].join('.');
  return createDateFormat;
};
