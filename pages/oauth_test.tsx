import { KakaoOauth } from '@components/common/Oauth/kakaoOauth';
import Head from 'next/head';

const TestPage = () => {
  return (
    <>
      <Head>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
          crossOrigin="anonymous"
          async
        />
      </Head>
      <KakaoOauth />
    </>
  );
};

export default TestPage;
