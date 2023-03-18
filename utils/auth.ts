import { setCookie } from './cookies';

export function doSignIn() {
  const expireAt = new Date();
  expireAt.setHours(expireAt.getHours() + 1);

  setCookie('expireAt', expireAt.toString());
}
