import { AuthrizationRouteProps } from 'components/common/AuthorizationRoute';
import { useEffect } from 'react';
import { checkPreviousHostnameEqualMyHostName } from 'utils/checkFrom';

type UseAhthorizationRoutingProps = Pick<
  AuthrizationRouteProps,
  'isRequiredAuthorization' | 'redirectURL'
>;

export const useAhthorizationRouting = ({
  isRequiredAuthorization,
  redirectURL,
}: UseAhthorizationRoutingProps) => {
  useEffect(() => {
    if (!isRequiredAuthorization) {
      alert('권한이 없습니다.');
      redirectNotAuthoriztion(redirectURL && redirectURL);
    }
  });
};

export function redirectNotAuthoriztion(redirectURL?: string) {
  const previouseHostnameEqualMyHostname =
    checkPreviousHostnameEqualMyHostName();

  if (previouseHostnameEqualMyHostname) {
    return window.history.back();
  }

  window.location.href = redirectURL ? redirectURL : '/';
}
