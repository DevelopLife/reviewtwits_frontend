export {};

declare global {
  interface Window {
    naver: any;
  }
}

const NAVER_ID_LOGIN = 'naverIdLogin';

const initializeNaverLogin = (naver: any) => {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    callbackUrl: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL,
    isPopup: false,
    loginButton: { color: 'green', type: 1, height: 85 },
  });

  naverLogin.init();
};

export const NaverOauth = () => {
  useEffect(() => {
    if (!window.naver) return;
    initializeNaverLogin(window.naver);
  }, []);

  return <NaverLoginButtonView />;
};

export const NaverLoginButtonView = () => {
  return <S.Button type="button" id={NAVER_ID_LOGIN} />;
};

export const NaverSDKScript = () => {
  return (
    <script
      type="text/javascript"
      src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
      async
    ></script>
  );
};

const S = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
    width: 80px;
    margin: 0;
    border: none;
    border-radius: 50%;
    overflow: hidden;
    :hover {
      opacity: 0.8;
    }
  `,
};
