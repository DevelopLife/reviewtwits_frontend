import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import HighlightCDN from 'components/common/HighlightCDN';
import Video from 'components/common/Video/Video';
import {
  CodeParagraph,
  InstallPageButtons,
} from 'components/Project/install/@index';
import Margin from 'components/Dashboard/common/Margin';
import CommonButton from 'components/Project/install/common/Button';

const INSTALL_GUIDE_MESSAGES = {
  ONE: '1. 서비스가 로드 될 수 있도록 자신의 사이트 소스코드에 해당 코드를 리뷰가 삽입되고 싶은 위치에 넣어주세요',
  TWO: '2. 쇼핑몰 리뷰 작성 팝업창을 열기를 원한다면 해당 코드를 위치에 넣어주세요',
};

const InstallDetailPage = () => {
  const router = useRouter();
  const redirectPrevHistory = () => router.back();
  const { projectName } = router.query;

  const MOCK_CODE = `
    const ReviewTwitsIframe = () => {
      const [openGraphs, setOpenGraphs] = useState({
        title: "",
        image: "",
      });
    
      useEffect(() => {
        const title = getMetaOpenGraphContent("title");
        const image = getMetaOpenGraphContent("image");
    
        setOpenGraphs({
          title,
          image,
        });
      }, []);

      const iframeAttributes = {
        id: "reviewtwits",
        title: "reviewtwits",
        src: \`https://reviewtwits.shop/review?projectName=${projectName}&productURL=\${window.location.href}&title=\${openGraphs.title}&image=\${openGraphs.image}\`,
        width: "100%",
        height: "700px"
      }


      return (
        <iframe
          {...iframeAttributes}
        ></iframe>
      );
    };
  `;

  const MOCK_CODE_TWO = `
    const ReviewTwitsWriteButton = () => {
      const [openGraphs, setOpenGraphs] = useState({
        title: "",
        image: "",
      });
    
      useEffect(() => {
        const title = getMetaOpenGraphContent("title");
        const image = getMetaOpenGraphContent("image");
    
        setOpenGraphs({
          title,
          image,
        });
      }, []);

      return (
        <button
          id="write_button"
          onClick={() =>
          window.open(
            \`https://localhost:3000/review/write?productURL=\${window.location.href}&title=\${openGraphs.title}\`,
            "리뷰트윗 리뷰작성하기",
            "width=900,height=800,scrollbars=yes"
          )}
        >
        리뷰작성
        </button>
      )
  `;

  return (
    <>
      <HighlightCDN />
      <S.InstallDetailPageContainer>
        <Margin marginBottom={35}>
          <S.InstallTitle>코드 설치하는 방법</S.InstallTitle>
        </Margin>
        <Margin marginBottom={50}>
          <Video srcs={['https://']} />
        </Margin>
        <CodeParagraph text={INSTALL_GUIDE_MESSAGES.ONE} code={MOCK_CODE} />
        <CodeParagraph text={INSTALL_GUIDE_MESSAGES.TWO} code={MOCK_CODE_TWO} />
        <InstallPageButtons>
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
              backgroundColor: 'secondary',
            }}
            onClick={() => true}
          >
            프로젝트 설정
          </CommonButton>
        </InstallPageButtons>
      </S.InstallDetailPageContainer>
    </>
  );
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
  Code: styled.div`
    width: 100%;
    min-height: 400px;
    height: fit-content;

    background-color: #181818;
  `,
};

export default InstallDetailPage;
