import { ComponentMeta } from '@storybook/react';
import {
  ProjectCard,
  ProjectCardView,
} from 'components/Project/Management/ProjectCard';
import theme from 'styles/theme';
import { ProjectDto } from 'typings/project';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCardView>;

const mockProject: ProjectDto = {
  id: '1',
  name: '프로젝트',
  description: 'mockDescription',
  review: 'mockReview',
};

export const Primary = () => (
  <ProjectCardView
    project={mockProject}
    isHover={false}
    styles={{
      color: 'gray_0',
      backgroundColor: 'blue_dark',
    }}
  />
);
export const IsHover = () => (
  <ProjectCardView
    project={mockProject}
    isHover
    styles={{
      color: 'gray_0',
      backgroundColor: 'blue_dark',
    }}
  />
);
