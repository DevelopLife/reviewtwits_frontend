import { atom } from 'recoil';

export const isLoginState = atom({
  key: 'isLogin',
  default: false,
});
