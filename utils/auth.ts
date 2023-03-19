import { InternalAxiosRequestConfig } from 'axios';

import { api } from 'api/instance';
import { getCookie, setCookie } from './cookies';
import { usersAPI } from 'api/users';

function validateToken() {
  const now = new Date();
  const expiredAt = getCookie('expireAt');
  const expireAtDate = new Date(expiredAt);
  return expiredAt && now < expireAtDate;
}

export async function verifyToken(config: InternalAxiosRequestConfig<any>) {
  const { Authorization } = api.defaults.headers.common;
  const isValid = validateToken();

  if (!Authorization || !isValid) {
    const result = await usersAPI.reissueToken();

    if (result) doSignIn(result.accessToken);
  }

  return config;
}

export function verifyTokenErrorHandler() {
  // signOut
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
