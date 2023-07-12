import hljs from 'highlight.js';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import javascript from 'highlight.js/lib/languages/javascript.js';

hljs.registerLanguage('javascript', javascript);

const HighlightCDN = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Script src="/path/to/highlight.min.js"></Script>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/atom-one-dark.min.css"
        ></link>
      </Head>
    </>
  );
};

export default HighlightCDN;
