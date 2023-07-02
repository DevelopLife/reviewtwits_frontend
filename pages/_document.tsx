import { Html, Head, Main, NextScript } from 'next/document';

import { KakaoSDKScript } from 'components/Common/Oauth/KakaoOauth';
import { NaverSDKScript } from 'components/Common/Oauth/NaverOauth';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
        <KakaoSDKScript />
        <NaverSDKScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
