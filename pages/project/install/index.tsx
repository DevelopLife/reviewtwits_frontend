import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ProjectPageLayout } from 'components/Project/common/ProjectPageLayout';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { PROJECT_TITLE } from 'constants/project';
import ReactIcon from 'public/icons/react.svg';
import type { Platforms } from 'typings/platforms';

const platforms: {
  name: Platforms;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[] = [
  {
    name: 'React',
    Icon: ReactIcon,
  },
];

const InstallPage = () => {
  const router = useRouter();
  const query = router.query as { projectName: string };

  return (
    <ProjectPageLayout>
      <ProjectCreateLayout title={PROJECT_TITLE}>
        <S.ProjectSelectPlatform>
          <S.ProjectSelectPlatformList>
            {platforms.map(({ name, Icon }) => (
              <Link
                href={{ pathname: `install/${name.toLowerCase()}`, query }}
                key={name}
                style={{ textDecoration: 'none', color: '#3D3D3D' }}
              >
                <S.PlatformItem>
                  <Icon />
                  <S.PlatformName marginTop={28}>{name}</S.PlatformName>
                </S.PlatformItem>
              </Link>
            ))}
          </S.ProjectSelectPlatformList>
          <S.InstallGlobalCode>
            <Link href={{ pathname: `install/html`, query }}>
              {`내가 생각하는 플랫폼이 없습니다.
              글로벌 코드로 설치하겠습니다`}
            </Link>
          </S.InstallGlobalCode>
        </S.ProjectSelectPlatform>
      </ProjectCreateLayout>
    </ProjectPageLayout>
  );
};

export default InstallPage;

const S = {
  ProjectSelectPlatform: styled.div`
    height: 100%;
    width: 100%;
  `,
  ProjectSelectPlatformList: styled.section`
    padding-top: 185px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 102px;
  `,
  PlatformItem: styled.div`
    width: 132px;
    height: 168px;

    text-align: center;

    :hover {
      opacity: 0.8;
    }
  `,
  PlatformName: styled.div<{ marginTop: number }>`
    font-weight: 700;
    font-size: 20px;
    margin-top: ${({ marginTop }) => `${marginTop}px`};
  `,
  InstallGlobalCode: styled.div`
    margin-top: 125px;
    margin-left: 181px;

    & > a {
      font-weight: 700;
      font-size: 22px;
      line-height: 140%;
      text-decoration: none;
      color: #3d3d3d;

      :hover {
        opacity: 0.8;
      }
    }
  `,
};
