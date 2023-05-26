import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { doOauthSignIn } from 'utils/oauth';

const PROVIDER = 'NAVER';

const NaverCallback = () => {
  const router = useRouter();

  const naverSignInHandler = useCallback(async (token: string) => {
    doOauthSignIn(PROVIDER, token);
  }, []);

  useEffect(() => {
    const token = router.asPath.split('access_token=')[1].split('&')[0];

    if (token) naverSignInHandler(token as string);
  }, [router, naverSignInHandler]);

  return <NaverCallbackView />;
};

const NaverCallbackView = () => {
  return <></>;
};

export default NaverCallback;
