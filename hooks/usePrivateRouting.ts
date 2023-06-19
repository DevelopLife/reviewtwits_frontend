import { PAGE_LIST } from 'constants/routers';
import { useCallback, useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';

import { isLoginState } from 'states/isLogin';
import { setAuthorizationToken, validateToken } from 'utils/auth';
import { getCookie } from 'utils/cookies';
import { usersAPI } from 'api/users';

interface UsePrivateRoutingProps {
  isRequiredLogin: boolean;
  isOptionalLogin: boolean;
  statusCode?: number;
}

export const usePrivateRouting = ({
  isRequiredLogin,
  isOptionalLogin,
  statusCode,
}: UsePrivateRoutingProps) => {
  const [isLogined, setIsLogined] = useRecoilState(isLoginState);
  const setFalseIsLogined = useCallback(
    () => setIsLogined(false),
    [setIsLogined]
  );

  const setTrueIsLogined = useCallback(
    () => setIsLogined(true),
    [setIsLogined]
  );

  const conditionalSignInHandler = useCallback(() => {
    if (statusCode === 404) return;
    if (isOptionalLogin)
      return validateRefreshToken(setTrueIsLogined, setFalseIsLogined);
    if (isRequiredLogin) {
      return redirectNotLogin(setTrueIsLogined, setFalseIsLogined);
    }

    setIsLoginAtom(setIsLogined);
  }, [
    isRequiredLogin,
    isOptionalLogin,
    setFalseIsLogined,
    setIsLogined,
    setTrueIsLogined,
    statusCode,
  ]);

  useEffect(() => {
    conditionalSignInHandler();
  }, [conditionalSignInHandler]);

  return {
    isLogined,
  };
};

export const setIsLoginAtom = (setIsLogined: SetterOrUpdater<boolean>) => {
  const tokenExpireAt = getCookie('expireAt');

  if (tokenExpireAt) {
    const isValidToken = validateToken();
    setIsLogined(isValidToken);
  } else {
    setIsLogined(false);
  }
};

export const validateRefreshToken = (login: () => void, logout: () => void) => {
  usersAPI
    .reissueToken()
    .then((data) => {
      setAuthorizationToken(data.accessToken);
      return login();
    })
    .catch(() => logout());
};

export function redirectNotLogin(login: () => void, logout: () => void) {
  const tokenExpireAt = getCookie('expireAt');
  const redirectSignIn = () => {
    const searchParams = new URLSearchParams(window.location.search);
    window.location.href = `${PAGE_LIST.SIGN_IN}?${searchParams}`;
  };

  if (!tokenExpireAt) {
    alert('로그인이 필요합니다.');
    logout();
    redirectSignIn();
    return;
  }

  const isValidToken = validateToken();

  if (!isValidToken) {
    // alert('로그인이 필요합니다.');
    logout();
    redirectSignIn();
    return;
  }

  login();
}
