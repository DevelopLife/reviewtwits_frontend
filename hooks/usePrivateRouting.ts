import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { isLoginState } from 'states/isLogin';
import { LOCAL_STORAGE_KEYS } from 'constants/localStorage';

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
  const loginExpireAtString = localStorage.getItem(
    LOCAL_STORAGE_KEYS.LOGIN_EXPIRE_AT
  );

  if (!loginExpireAtString) {
    alert('로그인이 필요합니다.');
    logout();
    // TODO: replace 113 PR windowNavigate function
    window.location.href = '/sign-in';
    return;
  }

  const loginData = JSON.parse(loginExpireAtString);
  const isValidate = Date.now() - loginData.expireAt;

  if (!isValidate) {
    alert('로그인 유지기간이 만료되었습니다.');
    logout();
    window.localStorage.removeItem(LOCAL_STORAGE_KEYS.LOGIN_EXPIRE_AT);
    // TODO: replace 113 PR windowNavigate function
    window.location.href = '/sign-in';
    return;
  }

  login();
}
