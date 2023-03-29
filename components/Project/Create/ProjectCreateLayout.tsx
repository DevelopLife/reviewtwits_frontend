import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { ProjectCreateContent } from 'components/Project/Create/ProjectCreateContent';
import { ProjectCreateTabItem } from 'components/Project/Create/ProjectCreateTapItem';
import { ProjectPageButton } from 'components/Project/common/ProjectPageButton';

type ProjectPathnames = 'create' | 'plans' | 'platform';

const SIDEBAR_MENUS: Record<ProjectPathnames, string> = {
  create: '등록정보 입력',
  plans: '플랜선택',
  platform: '설치 플랫폼 선택',
};

interface ProjectCreateLayoutProps {
  title: string;
  buttonText?: string;
  children: ReactNode;
  onClickButton?: () => void;
}

export const ProjectCreateLayout = ({
  title,
  buttonText,
  children,
  onClickButton,
}: ProjectCreateLayoutProps) => {
  const router = useRouter();
  const isCurrentPathname = router.pathname.split('/')[2];

  return (
    <S.Layout>
      <S.PageTitle>{title}</S.PageTitle>
      <S.ProjectCreateContainer>
        <S.ProejectCreateSidebar>
          {Object.entries(SIDEBAR_MENUS).map(([key, menu]) => (
            <ProjectCreateTabItem
              key={key}
              isCurrent={isCurrentPathname === key}
              menu={menu}
            />
          ))}
        </S.ProejectCreateSidebar>
        <ProjectCreateContent>{children}</ProjectCreateContent>
      </S.ProjectCreateContainer>
      {buttonText && (
        <S.NextStepButtonWrap>
          <ProjectPageButton onClick={onClickButton}>
            {buttonText}
          </ProjectPageButton>
        </S.NextStepButtonWrap>
      )}
    </S.Layout>
  );
};

const S = {
  Layout: styled.div`
    position: relative;
    width: 1440px;
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 0 auto;
  `,
  PageTitle: styled.h1`
    font-weight: 700;
    width: 100%;
    font-size: 43px;
    line-height: 52px;
    margin-bottom: 50px;
    align-self: flex-end;
    justify-self: flex-end;
  `,
  ProjectCreateContainer: styled.div`
    display: flex;
    width: 1440px;
    height: 700px;
    margin: 0 auto;
  `,
  ProejectCreateSidebar: styled.aside`
    width: 250px;
    height: fit-content;
    max-height: 696px;
    overflow: hidden;
    border-radius: 30px 0 0 30px;
  `,

  NextStepButtonWrap: styled.div`
    position: absolute;

    right: 54px;
    bottom: 40px;
  `,
};
