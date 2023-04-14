import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { isLoginState } from 'states/isLogin';
import { getCookie } from 'utils/cookies';
import { validateToken } from 'utils/auth';

export const usePrivateRouting = (
  isRequiredLoginPage: boolean,
  statusCode?: number
) => {
  const [isLogined, setIsLogined] = useRecoilState(isLoginState);
  const setFalseIsLogined = useCallback(
    () => setIsLogined(false),
    [setIsLogined]
  );

  const setTrueIsLogined = useCallback(
    () => setIsLogined(true),
    [setIsLogined]
  );

  useEffect(() => {
    if (statusCode === 404) return;
    if (isRequiredLoginPage) {
      handleIsLoginedInLocalStorage(setTrueIsLogined, setFalseIsLogined);
    }
  }, [isRequiredLoginPage, setFalseIsLogined, setTrueIsLogined, statusCode]);

  return {
    isLogined,
  };
};

export function handleIsLoginedInLocalStorage(
  login: () => void,
  logout: () => void
) {
  const tokenExpireAt = getCookie('expireAt');
  const redirectSignIn = () => (window.location.href = '/sign-in');

  if (!tokenExpireAt) {
    alert('로그인이 필요합니다.');
    logout();
    redirectSignIn();
    return;
  }

  const isValidToken = validateToken();

  if (!isValidToken) {
    alert('로그인 유지기간이 만료되었습니다.');
    logout();
    redirectSignIn();
    return;
  }

  login();
}
