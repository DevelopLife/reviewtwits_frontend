import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { usePrivateRouting } from 'hooks/usePrivateRouting';

const NOT_REQUIRED_LOGIN_URLS = ['/sign-in', '/sign-up', '/'];

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  const { pathname } = router;
  const isRequiredLoginPage = !NOT_REQUIRED_LOGIN_URLS.includes(pathname);

  const { isLogined } = usePrivateRouting(
    isRequiredLoginPage,
    children.props.statusCode
  );

  const statusCode = children.props.statusCode;

  if (statusCode) {
    return <>{children}</>;
  }

  if (!isRequiredLoginPage || isLogined) {
    return <>{children}</>;
  }

  return <></>;
};

export default PrivateRoute;
