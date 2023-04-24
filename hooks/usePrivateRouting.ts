import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { isLoginState } from 'states/isLogin';
import { validateToken } from 'utils/auth';
import { getCookie } from 'utils/cookies';

interface UsePrivateRoutingProps {
  isRequiredLogin: boolean;
  statusCode?: number;
  redirectURL?: string;
}

export const usePrivateRouting = ({
  isRequiredLogin,
  statusCode,
  redirectURL,
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

  useEffect(() => {
    if (statusCode === 404) return;
    if (isRequiredLogin) {
      redirectNotLogin(setTrueIsLogined, setFalseIsLogined, redirectURL);
    }
  }, [
    isRequiredLogin,
    redirectURL,
    setFalseIsLogined,
    setTrueIsLogined,
    statusCode,
  ]);

  return {
    isLogined,
  };
};

export function redirectNotLogin(
  login: () => void,
  logout: () => void,
  redirectURL?: string
) {
  const tokenExpireAt = getCookie('expireAt');
  const redirectSignIn = () =>
    (window.location.href = redirectURL ? redirectURL : '/sign-in');

  if (!tokenExpireAt) {
    alert('로그인이 필요합니다.');
    logout();
    redirectSignIn();
    return;
  }

  const isValidToken = validateToken();

  if (!isValidToken) {
    alert('로그인이 필요합니다.');
    logout();
    redirectSignIn();
    return;
  }

  login();
}
