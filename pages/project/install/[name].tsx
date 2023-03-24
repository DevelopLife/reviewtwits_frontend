import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
hljs.registerLanguage('javascript', javascript);

import { Colors } from 'styles/theme';

const InstallDetailPage = () => {
  const router = useRouter();
  const redirectPrevHistory = () => router.back();

  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <>
      <HighLightCDN />
      <S.InstallDetailPageContainer>
        <script src="/path/to/highlight.min.js" async></script>
        <script>hljs.highlightAll();</script>
        <S.InstallTitle>코드 설치하는 방법</S.InstallTitle>
        <S.CodeWrap>
          <S.Video controls>
            <S.Source src={'https://youtu.be/n6WaTObHRJM'} />
            해당 브라우저에서는 이용하실 수 없습니다. 다른 브라우저를
            이용해주세요.
          </S.Video>
        </S.CodeWrap>
        <S.CodeWrap>
          <S.InstallGuide>
            1. 서비스가 로드 될 수 있도록 자신의 사이트 소스코드에 해당 코드를
            리뷰가 삽입되고 싶은 위치에 넣어주세요
          </S.InstallGuide>
          <CodeBlock>
            {`
              <span class="_1syGnXOL _3VkgqBXB" data-clk="dropbanner1b" style="padding-right: 20px; font-size: 17px; color: black">
                <span>매일 쓰는 브라우저 보안이 걱정된다면, </span>
                <strong>안전하고 빠른 최신 브라우저 웨일로 업데이트 하세요.</strong>
              </span>
            `}
          </CodeBlock>
        </S.CodeWrap>
        <S.CodeWrap>
          <S.InstallGuide>
            2. 리뷰에 대한 별점이 표시되게 하고 싶은 경우 해당 스크립트를
            추가해주세요
          </S.InstallGuide>
          <S.Code></S.Code>
        </S.CodeWrap>
        <S.InstallPageFooter>
          <CommonButton
            styleAttributes={{
              width: 171,
              height: 55,
              color: 'black',
              backgroundColor: 'gray_3',
            }}
            onClick={redirectPrevHistory}
          >
            뒤로가기
          </CommonButton>
          <CommonButton
            styleAttributes={{
              width: 171,
              height: 55,
              color: 'gray_0',
              backgroundColor: 'Secondary',
            }}
            onClick={() => {}}
          >
            프로젝트 설정
          </CommonButton>
        </S.InstallPageFooter>
      </S.InstallDetailPageContainer>
    </>
  );
};

interface CommonButtonProps {
  children: ReactNode;
  styleAttributes: CommonButtonStyleAttributes;
  onClick: () => void;
}

type CommonButtonStyleAttributes = {
  width: number;
  height: number;
  color: Colors;
  backgroundColor: Colors;
};

const CommonButton = ({
  children,
  styleAttributes,
  ...rest
}: CommonButtonProps) => {
  return (
    <CommonS.Button {...styleAttributes} {...rest}>
      {children}
    </CommonS.Button>
  );
};

interface CodeBlockProps {
  children: ReactNode;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <pre>
      <code>
        {`
    ${children}`}
      </code>
    </pre>
  );
};

const HighLightCDN = () => {
  return (
    <Head>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
      ></link>
    </Head>
  );
};

const CommonS = {
  Button: styled.button<CommonButtonStyleAttributes>`
    border: none;
    border-radius: 15px;
    font-weight: 500;
    font-size: 18px;
    overflow: hidden;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }

    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    color: ${({ theme, color }) => theme.colors[color]};
    background-color: ${({ theme, backgroundColor }) =>
      theme.colors[backgroundColor]};
  `,
};

const S = {
  InstallDetailPageContainer: styled.div`
    width: 1440px;
    padding: 90px 0;
    margin: 0 auto;
  `,
  InstallTitle: styled.h1`
    font-weight: 700;
    font-size: 43px;
    margin-bottom: 35px;
  `,
  InstallGuide: styled.p`
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 18px;
  `,
  CodeWrap: styled.div`
    margin-bottom: 92px;
  `,
  Code: styled.div`
    width: 100%;
    min-height: 400px;
    height: fit-content;

    background-color: #181818;
  `,
  Video: styled.video`
    width: 100%;
    padding: 0 10%;
  `,
  Source: styled.source``,
  InstallPageFooter: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};

export default InstallDetailPage;
