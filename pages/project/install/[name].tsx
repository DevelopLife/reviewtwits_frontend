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

const MOCK_CODE = `
<span class="_1syGnXOL _3VkgqBXB" data-clk="dropbanner1b" style="padding-right: 20px; font-size: 17px; color: black">
  <span>매일 쓰는 브라우저 보안이 걱정된다면, </span>
  <strong>안전하고 빠른 최신 브라우저 웨일로 업데이트 하세요.</strong>
</span>
`;

const INSTALL_GUIDE_MESSAGES = {
  ONE: '1. 서비스가 로드 될 수 있도록 자신의 사이트 소스코드에 해당 코드를 리뷰가 삽입되고 싶은 위치에 넣어주세요',
  TWO: '2. 리뷰에 대한 별점이 표시되게 하고 싶은 경우 해당 스크립트를 추가해주세요',
};

const InstallDetailPage = () => {
  const router = useRouter();
  const redirectPrevHistory = () => router.back();

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
        <CodeParagraph text={INSTALL_GUIDE_MESSAGES.TWO} code={MOCK_CODE} />
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
            onClick={() => {
              console.log('click');
            }}
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
