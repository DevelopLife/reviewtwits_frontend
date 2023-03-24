import styled from '@emotion/styled';
import { ProjectPageLayout } from 'components/Project/common/ProjectPageLayout';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { PROJECT_TITLE } from 'constants/project';
import Image from 'next/image';
import Link from 'next/link';

import ReactIcon from 'public/images/react_icon.svg';

const PLATFORMS = [
  {
    name: 'React',
    src: ReactIcon,
  },
  {
    name: 'Jekyll',
    src: ReactIcon,
  },
  {
    name: 'Wordpress',
    src: ReactIcon,
  },
  {
    name: 'Blogger',
    src: ReactIcon,
  },
];

const InstallPage = () => {
  return (
    <ProjectPageLayout>
      <ProjectCreateLayout title={PROJECT_TITLE}>
        <S.ProjectSelectPlatform>
          <S.ProjectSelectPlatformList>
            {PLATFORMS.map(({ name, src }) => (
              <Link
                href={{ pathname: `install/${name}` }}
                key={name}
                style={{ textDecoration: 'none', color: '#3D3D3D' }}
              >
                <S.PlatformItem>
                  <Image
                    src={src}
                    alt={`${name}Icon`}
                    width={132}
                    height={116}
                  ></Image>
                  <S.PlatformName marginTop={28}>{name}</S.PlatformName>
                </S.PlatformItem>
              </Link>
            ))}
          </S.ProjectSelectPlatformList>
          <S.InstallGlobalCode>
            <Link href={'./install/global'}>
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