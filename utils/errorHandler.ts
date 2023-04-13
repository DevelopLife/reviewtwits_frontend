import { AxiosError } from 'axios';

import { windowNavigate } from 'utils/windowNavigate';
import type { ResponseError } from 'typings/error';

const SIGN_IN = 'sign-in';

export function redirectErrorHandler(err: AxiosError<ResponseError, any>) {
  const REDIRECT_URL = `${window?.location.origin}/${SIGN_IN}`;
  const status = err.response?.status;

  if (!status) {
    return console.error(status);
  }

  if (status === 401) {
    alert('재로그인이 필요해요.');
    return windowNavigate(REDIRECT_URL);
  }
  if (status === 403) {
    alert('권한이 없어요.');
    return windowNavigate(REDIRECT_URL);
  }
  if (status === 404) {
    return windowNavigate('/404');
  }

  throw err;
}

export function alertErrorHandler(err: AxiosError<ResponseError, any>) {
  const status = err.response?.status;

  if (status === 415) {
    console.warn('header의 content-type을 확인해주세요');
    return alert(`${status} 개발자에게 문의해 주세요. reviewTwit@google.com`);
  }

  const message = err.response?.data[0].message;
  alert(message);
}