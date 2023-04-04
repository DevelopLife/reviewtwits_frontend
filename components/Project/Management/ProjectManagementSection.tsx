import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import type { ReactNode } from 'react';
import { AxiosError } from 'axios';

import { ProjectCard } from 'components/Project/Management/ProjectCard';
import { Styles } from 'components/Project/Management/ProjectCardCommon';
import { CreateProjectCard } from 'components/Project/Management/CreateProjectCard';

import { GetProjectsResponseData, projectsAPI } from 'api/projects';
import ResponseArror from 'typings/error';

interface ProjectManagementSectionViewProps {
  children?: ReactNode;
  projects: GetProjectsResponseData[] | undefined;
}

const CREATE_PROJECT_STYLES: Styles = {
  color: 'gray_9',
  backgroundColor: '#D9D9D9',
};

export const ProjectManagementSection = () => {
  const router = useRouter();
  const navigateLogin = useCallback(() => router.push('../sign-in'), [router]);

  const { data } = useQuery(['projectManagement'], projectsAPI.get, {
    onError: (err: AxiosError) => {
      const statusCode = err?.response?.status;

      if (statusCode === 401) {
        const data = err?.response?.data as ResponseArror[];
        alert(`$code: {statusCode} ${data[0].message}`);
        navigateLogin();
      }
    },
    retry: false,
  });

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
