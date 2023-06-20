import { atom } from 'recoil';

export const isFocusedTimeStampAtom = atom<string>({
  key: 'isFocusedTimeStamp',
  default: '',
});
