import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { usePrivateRouting } from 'hooks/usePrivateRouting';
import type { PageProps } from 'pages/_app';
import { PAGE_LIST } from 'constants/routers';

// TODO: public url을 추가해주세요
const PUBLIC_URLS = [
  PAGE_LIST.HOME,
  PAGE_LIST.SIGN_IN,
  PAGE_LIST.SIGN_UP,
  PAGE_LIST.FIND_ID,
  PAGE_LIST.FIND_PASSWORD,
  '/social',
  '/oauth/callback/kakao',
  '/oauth/callback/naver',
  '/social/user/[nickname]',
  '/review',
  PAGE_LIST.NOT_FOUND_404,
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
