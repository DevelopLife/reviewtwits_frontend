import { AxiosError } from 'axios';
import { windowNavigate } from 'utils/windowNavigate';

const SIGH_IN = 'sign-in';

export function errorHandler(err: AxiosError<any, any>) {
  const status = err.response?.status;

  if (!status) {
    return console.error(status);
  }

  if (status === 401) {
    alert('재로그인이 필요해요.');
    return windowNavigate(SIGH_IN);
  }
  if (status === 403) {
    alert('권한이 없어요.');
    return windowNavigate(SIGH_IN);
  }
}
