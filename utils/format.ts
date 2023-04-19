export const formattedImageUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`;

export const formattedLastTime = (pastTimeArr?: number[]): string => {
  if (!pastTimeArr) return '';

  const [year, month, day, hour, min, sec] = pastTimeArr;
  const now = new Date();
  const pastDate = new Date(year, month - 1, day, hour, min, sec || 0);
  const timeDiff = now.getTime() - pastDate.getTime();

  const minDiff = Math.floor(timeDiff / 1000 / 60);
  const hourDiff = Math.floor(minDiff / 60);
  const dayDiff = Math.floor(hourDiff / 60);

  return dayDiff
    ? `${dayDiff}d`
    : hourDiff
    ? `${hourDiff}h`
    : minDiff
    ? `${minDiff}m`
    : 'now';
};
