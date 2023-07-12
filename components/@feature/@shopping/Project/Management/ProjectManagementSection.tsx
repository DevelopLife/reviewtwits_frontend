import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { ProjectCard } from 'components/@feature/@shopping/Project/Management/ProjectCard';
import { Styles } from 'components/@feature/@shopping/Project/Management/ProjectCardCommon';
import { CreateProjectCard } from 'components/@feature/@shopping/Project/Management/CreateProjectCard';

import { GetProjectsResponseData } from 'api/projects';
import { useGetProjectManagement } from 'hooks/queries/projects';

interface ProjectManagementSectionViewProps {
  children?: ReactNode;
  projects: GetProjectsResponseData[] | undefined;
}

const CREATE_PROJECT_STYLES: Styles = {
  color: 'gray_9',
  backgroundColor: '#D9D9D9',
};

export const ProjectManagementSection = () => {
  const data = useGetProjectManagement();

  return <ProjectManagementSectionView projects={data?.data} />;
};

export const ProjectManagementSectionView = ({
  projects,
}: ProjectManagementSectionViewProps) => {
  const router = useRouter();
  const navigate = () => router.push('./create');

  return (
    <S.Section>
      <S.SectionGrid>
        <CreateProjectCard styles={CREATE_PROJECT_STYLES} onClick={navigate} />
        {projects?.map((project) => (
          <ProjectCard
            key={project.projectId}
            project={project}
            styles={{ backgroundColor: project.projectColor, color: 'gray_0' }}
          />
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
