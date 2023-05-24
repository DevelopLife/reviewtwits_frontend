import { atom } from 'recoil';

export const selectedUserState = atom<string>({
  key: 'selectedUserState',
  default: '',
});
