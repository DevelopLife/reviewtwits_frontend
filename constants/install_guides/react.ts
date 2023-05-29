interface InstallGuild {
  TEXT: string;
  CODE: string;
}

const projectname =
  global && new URLSearchParams(global?.location?.search).get('projectName');

export const REACT_INSTALL_GUIDES: InstallGuild[] = [
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