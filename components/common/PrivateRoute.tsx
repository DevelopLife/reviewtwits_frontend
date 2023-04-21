import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { usePrivateRouting } from 'hooks/usePrivateRouting';
import type { PageProps } from 'pages/_app';

const NOT_REQUIRED_LOGIN_URLS = ['/sign-in', '/sign-up', '/'];

const PrivateRoute = ({
  pageProps,
  children,
}: {
  pageProps: PageProps;
  children: ReactElement | ReactElement[];
}) => {
  const router = useRouter();
  const { pathname } = router;
  const isRequiredLogin = !NOT_REQUIRED_LOGIN_URLS.includes(pathname);
  const statusCode = pageProps.statusCode;

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