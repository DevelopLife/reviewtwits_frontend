import type { PlatformUppercases } from 'typings/platforms';

interface InstallGuide {
  TEXT: string;
  CODE: string;
}

const projectname =
  global && new URLSearchParams(global?.location?.search).get('projectName');

export const REACT_INSTALL_GUIDES: InstallGuide[] = [
  {
    TEXT: '1. 리액트용 ReviewTwits 필수 패키지를 설치합니다.',
    CODE: `
      $ npm install @review-twits/react

      # or

      $ yarn add @review-twits/react
      `,
  },
  {
    TEXT: '2. 리뷰리스트 부착을 위한 코드 예시입니다.',
    CODE: `
      import { ReviewIframe } from "@review-twits/react";
    
      const projectName = "${projectname}";
      
      const YourProductPage = () => {
        return <ReviewIframe projectName={projectName} />
      };
      
      export default YourProductPage
      `,
  },
  {
    TEXT: '3. 리뷰 작성 팝업창을 열기 위한 코드 예시입니다.',
    CODE: `
      import { useReviewWrite } from "@review-twits/react";
    
      const projectName = "${projectname}";
      
      const YourProductPage = () => {
        const { openReviewWritePage } = useReviewWrite();
      
        return (
          <div>
            <button onClick={() => openReviewWritePage(projectName)}>리뷰작성</button>
          </div>
        );
      };
      
      export default YourProductPage
      `,
  },
  {
    TEXT: `4. ReviewTwits 서비스는 meta tag의 og:title, og:image property attributes를 기반으로 
    상품자동등록을 진행하기 때문에 필수로 og:title, og:image property attribute를 가진 meta tag가 존재해야합니다.`,
    CODE: `
      // meta tag 추가를 위한 코드도 제공해줄 예정
      `,
  },
];

export const HTML_INSTALL_GUIDES = [
  {
    TEXT: `1. <meta> ${`og:image`}, ${`og:title`}, ${`projectname`}을 할당해주세요. 또한 <body> 내부에서는 역할에 맞는 id 값을 부여해주세요 `,
    CODE: `
      <!DOCTYPE html>
      <html lang="ko">
        <head>
          <!-- your product thumbnail image -->
          <meta
            property="og:image"
            content="your product image"
          />
          <!-- your product thumbnail title -->
          <meta
            property="og:title"
            content="your product title"
          />
          <!-- your reviewtwits projectname -->
          <meta 
            name="projectname" 
            content="${projectname}"
          />
        </head>

        <body>
          <!-- 리뷰 리스트 표시 부분 -->
          <div id="review_twits_thread" style="width: 100%; height: 100px"></div>

          <!-- 리뷰 작성 popup 창을 열고자 하고자 하는 버튼 -->
          <button id="review_twits_write">리뷰작성</button>

          <!-- reviewtwits js 파일을 요청 -->
          <script src="https://developlife.github.io/reviewtwits-js/bundle.js"></script>
        </body>
      </html>
    `,
  },
  // {
  //   TEXT: `2. HTML용 script tag를 부착합니다. 리뷰화면을 표시하고싶은 곳에는 id값으로 review_twits_thread를 할당해주고
  //   리뷰 작성 팝업을 open하고 싶은 버튼에는 review_twits_write id값을 할당해주세요 `,
  //   CODE: `

  //   `,
  // },
];

const INSTALL_GUIDES: Record<PlatformUppercases, InstallGuide[]> = {
  REACT: REACT_INSTALL_GUIDES,
  HTML: HTML_INSTALL_GUIDES,
};

export default INSTALL_GUIDES;
