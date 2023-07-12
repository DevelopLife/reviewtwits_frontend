import { Meta, StoryFn } from '@storybook/react';

import { GetProjectsResponseData } from 'api/projects';
import { ProjectManagementSectionView } from 'components/@feature/@shopping/Project/Management/ProjectManagementSection';
import { DEFAULT_PROJECT_COLOR } from 'states/createProjectForm';

const mockProjects: GetProjectsResponseData[] = [
  {
    projectId: '1',
    projectName: 'mock1',
    projectDescription: 'mock1 description',
    projectColor: DEFAULT_PROJECT_COLOR,
    reviewCount: 150,
    category: '영화',
  },
  {
    projectId: '2',
    projectName: 'mock2',
    projectDescription: 'mock2 description',
    projectColor: '#aaccff',
    reviewCount: 250,
    category: '쇼핑',
  },
];

export default {
  title: 'project/management/ProjectManagementSectionView',
  component: ProjectManagementSectionView,
} as Meta<typeof ProjectManagementSectionView>;

export const dontHaveProject: StoryFn<
  typeof ProjectManagementSectionView
> = () => <ProjectManagementSectionView projects={undefined} />;

export const haveProject: StoryFn<typeof ProjectManagementSectionView> = () => (
  <ProjectManagementSectionView projects={mockProjects} />
);
