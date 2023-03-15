import { RefObject } from 'react';

export const scrollIntoTarget = (target: RefObject<HTMLElement>) => {
  target.current?.scrollIntoView({ behavior: 'smooth' });
};
