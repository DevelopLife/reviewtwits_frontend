import { InfiniteData } from '@tanstack/react-query';

export const linkageInfiniteScrollData = <T>(
  datas: InfiniteData<T[]> | undefined
) => {
  if (!datas) return;
  const linkagedData: T[] = [];
  datas?.pages.forEach((data) => {
    linkagedData.push(...data);
  });
  return linkagedData;
};
