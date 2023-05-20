import { InternalAxiosRequestConfig } from 'axios';

import { optionalTokenAPI, requiredTokenApi } from 'api/instance';
import { getCookie, removeCookie, setCookie } from './cookies';
import { usersAPI } from 'api/users';
import { LOCAL_STORAGE_KEYS } from 'constants/localStorage';

export function validateToken() {
  const now = new Date();
  const expiredAt: Date = getCookie('expireAt');
  const expireAtDate = new Date(expiredAt);

  return expiredAt && now < expireAtDate;
}

export async function verifyToken(config: InternalAxiosRequestConfig<any>) {
  const headers = requiredTokenApi.defaults.headers.common;
  const isValid = validateToken();

  if (!headers['x-auth-token'] || !isValid) {
    const result = await usersAPI.reissueToken();

    if (result) {
      config.headers['x-auth-token'] = result.accessToken;
      doSignIn(result.accessToken);
    }
  }

  return config;
}

export function verifyTokenErrorHandler() {
  doSignOut();
}

export function setAuthorizationToken(token?: string) {
  if (token) {
    requiredTokenApi.defaults.headers.common['x-auth-token'] = token;
    optionalTokenAPI.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete requiredTokenApi.defaults.headers.common['x-auth-token'];
    delete optionalTokenAPI.defaults.headers.common['x-auth-token'];
  }
}

export function doSignIn(token: string) {
  const expireAt = new Date();
  expireAt.setHours(expireAt.getHours() + 1);

  setCookie('expireAt', expireAt.toString());

  setAuthorizationToken(token);
}

export function setLocalStorageExpireAt(hour: number) {
  const currentDate = Date.now();
  const milliseconds = hour * 60 * 60 * 1000;

  const data = {
    isLogin: true,
    expireAt: currentDate + milliseconds,
  };

  localStorage.setItem(
    LOCAL_STORAGE_KEYS.LOGIN_EXPIRE_AT,
    JSON.stringify(data)
  );
}

export function doSignOut() {
  usersAPI.signOut().then(() => {
    removeCookie('expireAt');
    setAuthorizationToken();
    window.location.href = '/';
  });
}

export function doSignOutOptionalTokenApi() {
  usersAPI.signOut();
  removeCookie('expireAt');
  setAuthorizationToken();
}
