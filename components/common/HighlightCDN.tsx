import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
hljs.registerLanguage('javascript', javascript);

import Head from 'next/head';
import { useEffect } from 'react';

const HighlightCDN = () => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <>
      <script src="/path/to/highlight.min.js" async></script>
      <script>hljs.highlightAll();</script>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
        ></link>
      </Head>
    </>
  );
};

export default HighlightCDN;
