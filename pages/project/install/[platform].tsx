import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import {
  CodeParagraph,
  InstallPageButtons,
} from 'components/@feature/@shopping/Project/Install/@index';
import Video from 'components/@ui/Video';
import Button from 'components/@ui/Button';

import Margin from 'components/@feature/@shopping/Dashboard/Common/Margin';
import { ProjectPageLayout } from 'components/@feature/@shopping/Project/Common/ProjectPageLayout';
import HighlightCDN from 'components/@feature/@common/HighlightCDN';
import INSTALL_GUIDES from 'constants/install_guides';
import type { PlatformUppercases, Platforms } from 'typings/platforms';

const InstallDetailPage = () => {
  const router = useRouter();
  const redirectPrevHistory = () => router.back();
  const { platform } = router.query as {
    platform: Lowercase<Platforms>;
  };
  const platformUppercase = platform?.toUpperCase() as PlatformUppercases;
  const installGuides = INSTALL_GUIDES[platformUppercase];

  const reactGuideoVideo = '/videos/react_guide.mov';

  return (
    <ProjectPageLayout>
      <HighlightCDN />
      <S.InstallDetailPageContainer>
        <Margin marginBottom={35}>
          <S.InstallTitle>코드 설치하는 방법</S.InstallTitle>
        </Margin>
        <Margin marginBottom={50}>
          <Video srcs={[reactGuideoVideo]} />
        </Margin>
        {installGuides?.map(({ TEXT, CODE }) => (
          <CodeParagraph key={CODE} text={TEXT} code={CODE} />
        ))}
        <InstallPageButtons>
          <Button
            // styleAttributes={{
            //   width: 171,
            //   height: 55,
            //   color: 'black',
            //   backgroundColor: 'gray_3',
            // }}
            onClick={redirectPrevHistory}
          >
            뒤로가기
          </Button>
          <Button
            // styleAttributes={{
            //   width: 171,
            //   height: 55,
            //   color: 'gray_0',
            //   backgroundColor: 'secondary',
            // }}
            onClick={() => true}
          >
            프로젝트 설정
          </Button>
        </InstallPageButtons>
      </S.InstallDetailPageContainer>
    </ProjectPageLayout>
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
