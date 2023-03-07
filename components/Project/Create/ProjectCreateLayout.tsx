import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { ProjectCreateContent } from 'components/Project/Create/ProjectCreateContent';
import { ProjectCreateTabItem } from 'components/Project/Create/ProjectCreateTapItem';
import { useCreateProject } from 'hooks/useCreateProject';

const SIDEBAR_MENUS = ['등록정보 입력', '플랜선택', '설치 플랫폼 선택'];

interface ProjectCreateLayoutProps {
  title: string;
  children: ReactNode;
}

export const ProjectCreateLayout = ({
  title,
  children,
}: ProjectCreateLayoutProps) => {
  const { currentPageNumber } = useCreateProject();

  return (
    <S.Layout>
      <S.PageTitle>{title}</S.PageTitle>
      <S.ProjectCreateContainer>
        <S.ProejectCreateSidebar>
          {SIDEBAR_MENUS.map((menu, index) => (
            <ProjectCreateTabItem
              key={menu}
              isCurrent={currentPageNumber === index}
              menu={menu}
            />
          ))}
        </S.ProejectCreateSidebar>
        <ProjectCreateContent>{children}</ProjectCreateContent>
      </S.ProjectCreateContainer>
    </S.Layout>
  );
};

const S = {
  Layout: styled.div`
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
};
