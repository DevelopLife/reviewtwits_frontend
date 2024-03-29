import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import {
  CodeParagraph,
  InstallPageButtons,
} from 'components/Project/Install/@index';
import HighlightCDN from 'components/Common/HighlightCDN';
import Video from 'components/Common/Video/Video';
import Margin from 'components/Dashboard/Common/Margin';
import CommonButton from 'components/Project/Install/Common/Button';

import INSTALL_GUIDES from 'constants/install_guides';
import type { PlatformUppercases, Platforms } from 'typings/platforms';
import { ProjectPageLayout } from 'components/Project/Common/ProjectPageLayout';
import { CODE_PEN_URLS } from 'constants/install_guides/code_pen_url';

const InstallDetailPage = () => {
  const router = useRouter();
  const redirectPrevHistory = () => router.back();
  const { platform } = router.query as {
    platform: Lowercase<Platforms>;
  };
  const platformUppercase = platform?.toUpperCase() as PlatformUppercases;
  const installGuides = INSTALL_GUIDES[platformUppercase];
  const codePenURL = CODE_PEN_URLS[platformUppercase];

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
        {codePenURL && (
          <Margin marginBottom={50}>
            <iframe
              height="300"
              width="100%"
              title="Untitled"
              src={codePenURL}
              loading="lazy"
              // scrolling="no"
              // frameborder="no"
              // allowtransparency="true"
              // allowfullscreen="true"
            >
              See the Pen{' '}
              <a href="https://codepen.io/ahn0min/pen/rNQZvMZ">Untitled</a> by
              YeongMin Ahn (<a href="https://codepen.io/ahn0min">@ahn0min</a>)
              on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Margin>
        )}
        {installGuides?.map(({ TEXT, CODE }) => (
          <CodeParagraph key={CODE} text={TEXT} code={CODE} />
        ))}
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
