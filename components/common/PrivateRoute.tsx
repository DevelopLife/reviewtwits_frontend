import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { usePrivateRouting } from 'hooks/usePrivateRouting';
import type { PageProps } from 'pages/_app';

// TODO: public url을 추가해주세요
const PUBLIC_URLS = [
  '/',
  '/sign-in',
  '/sign-up',
  '/social',
  '/social/home',
  '/socual/user',
  '/social/user/[nickname]',
  '/404',
];

const PrivateRoute = ({
  pageProps,
  children,
}: {
  pageProps: PageProps;
  children: ReactElement | ReactElement[];
}) => {
  const router = useRouter();
  const { pathname } = router;
  const isRequiredLogin = !PUBLIC_URLS.includes(pathname);
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
