import { InternalAxiosRequestConfig } from 'axios';

import { api } from 'api/instance';
import { getCookie, removeCookie, setCookie } from './cookies';
import { usersAPI } from 'api/users';

function validateToken() {
  const now = new Date();
  const expiredAt = getCookie('expireAt');
  const expireAtDate = new Date(expiredAt);
  return expiredAt && now < expireAtDate;
}

export async function verifyToken(config: InternalAxiosRequestConfig<any>) {
  const headers = api.defaults.headers.common;
  const isValid = validateToken();

  if (!headers['x-auth-token'] || !isValid) {
    const result = await usersAPI.reissueToken();

    if (result) doSignIn(result.accessToken);
  }

  return config;
}

export function verifyTokenErrorHandler() {
  doSignOut();
}

export function setAuthorizationToken(token?: string) {
  if (token) api.defaults.headers.common['x-auth-token'] = token;
  else delete api.defaults.headers.common['x-auth-token'];
}

export function doSignIn(token: string) {
  const expireAt = new Date();
  expireAt.setHours(expireAt.getHours() + 1);

  setCookie('expireAt', expireAt.toString());
  setAuthorizationToken(token);
}

export function doSignOut() {
  usersAPI.signOut();
  removeCookie('expireAt');
  setAuthorizationToken();
}
