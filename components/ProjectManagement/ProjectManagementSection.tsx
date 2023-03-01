import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { ProjectCard } from 'components/ProjectManagement/ProjectCard';
import type { ProjectDto } from 'types/project';
import { Styles } from 'components/common/ProjectCard/ProjectCardCommon';
import { CreateProjectCard } from 'components/ProjectManagement/CreateProjectCard';

interface ProjectManagementSectionViewProps {
  children?: ReactNode;
  projects: { project: ProjectDto; styles: Styles }[];
}

const projects: { project: ProjectDto; styles: Styles }[] = [
  {
    project: {
      id: '1',
      name: 'mockProject',
      description: 'mockProject입니다.',
      review: 'review 입니다.',
    },
    styles: {
      backgroundColor: 'blue_0',
      color: 'gray_0',
    },
  },
  {
    project: {
      id: '2',
      name: 'mockProject',
      description: 'mockProject입니다.',
      review: 'review 입니다.',
    },
    styles: {
      backgroundColor: 'blue_dark',
      color: 'gray_0',
    },
  },
  {
    project: {
      id: '3',
      name: 'mockProject',
      description: 'mockProject입니다.',
      review: 'review 입니다.',
    },
    styles: {
      backgroundColor: 'blue_light',
      color: 'gray_0',
    },
  },
  {
    project: {
      id: '4',
      name: 'mockProject',
      description: 'mockProject입니다.',
      review: 'review 입니다.',
    },
    styles: {
      backgroundColor: 'blue_light',
      color: 'gray_0',
    },
  },
  {
    project: {
      id: '5',
      name: 'mockProject',
      description: 'mockProject입니다.',
      review: 'review 입니다.',
    },
    styles: {
      backgroundColor: 'blue_light',
      color: 'gray_0',
    },
  },
];

const CREATE_PROJECT_STYLES: Styles = {
  color: 'gray_9',
  backgroundColor: 'gray_3',
};

export const ProjectManagementSection = () => {
  // TODO: react query를 내부적으로 사용하는 custhom hook을 호출해줘야 합니다.

  return <ProjectManagementSectionView projects={projects} />;
};

export const ProjectManagementSectionView = ({
  projects,
}: ProjectManagementSectionViewProps) => {
  //
  return (
    <S.Section>
      <S.SectionGrid>
        <CreateProjectCard styles={CREATE_PROJECT_STYLES} />
        {projects.map(({ project, styles }) => (
          <ProjectCard key={project.id} project={project} styles={styles} />
        ))}
      </S.SectionGrid>
    </S.Section>
  );
};

const S = {
  Section: styled.section`
    margin: 0 auto;
    padding: 10vh 10vw;
  `,
  SectionGrid: styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(425px, 1fr));
    row-gap: 85px;
    column-gap: 85px;
  `,
};
