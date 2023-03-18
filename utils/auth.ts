import { api } from 'api/instance';
import { getCookie, setCookie } from './cookies';

function validateToken() {
  const now = new Date();
  const expiredAt = getCookie('expireAt');
  const expireAtDate = new Date(expiredAt);
  return expiredAt && now < expireAtDate;
}

export function setAuthorizationToken(token?: string) {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete api.defaults.headers.common['Authorization'];
}

export function doSignIn(token: string) {
  const expireAt = new Date();
  expireAt.setHours(expireAt.getHours() + 1);

  setCookie('expireAt', expireAt.toString());
  setAuthorizationToken(token);
}
