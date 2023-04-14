import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { usePrivateRouting } from 'hooks/usePrivateRouting';

const NOT_REQUIRED_LOGIN_URLS = ['/sign-in', '/sign-up', '/'];

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  const { pathname } = router;
  const isRequiredLogin = !NOT_REQUIRED_LOGIN_URLS.includes(pathname);
  const statusCode = children.props.statusCode;

  const { isLogined } = usePrivateRouting({
    isRequiredLogin,
    statusCode,
    redirectURL: undefined,
  });

  if (statusCode) {
    return <>{children}</>;
  }

  if (!isRequiredLogin || isLogined) {
    return <>{children}</>;
  }

  return <></>;
};

export default PrivateRoute;
