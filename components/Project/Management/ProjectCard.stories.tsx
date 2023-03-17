import { Meta } from '@storybook/react';
import {
  ProjectCard,
  ProjectCardView,
} from 'components/Project/Management/ProjectCard';
import { ProjectDto } from 'typings/project';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
} as Meta<typeof ProjectCardView>;

const mockProject: ProjectDto = {
  id: '1',
  name: '프로젝트명',
  description:
    'mockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescription',
  review: 330,
  category: '쇼핑몰',
};

export const Primary = () => (
  <ProjectCardView
    project={mockProject}
    isHover={false}
    styles={{
      color: 'gray_0',
      backgroundColor: 'blue',
    }}
  />
);
export const IsHover = () => (
  <ProjectCardView
    project={mockProject}
    isHover
    styles={{
      color: 'gray_0',
      backgroundColor: 'blue',
    }}
  />
);
