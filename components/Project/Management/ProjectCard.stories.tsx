import type { Meta, StoryFn } from '@storybook/react';

import type { ProjectDto } from 'typings/project';
import { ProjectCardView } from 'components/Project/Management/ProjectCard';

const mockProject: ProjectDto = {
  id: '1',
  name: '프로젝트명',
  description:
    'mockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescriptionmockDescription',
  review: 330,
  category: '쇼핑몰',
};

export default {
  title: 'project/management/ProjectCardView',
  component: ProjectCardView,
} as Meta<typeof ProjectCardView>;

export const Primary: StoryFn<typeof ProjectCardView> = () => (
  <ProjectCardView
    project={mockProject}
    isHover={false}
    styles={{
      color: 'gray_0',
      backgroundColor: 'green',
    }}
  />
);
export const IsHover = () => (
  <ProjectCardView
    project={mockProject}
    isHover
    styles={{
      color: 'gray_0',
      backgroundColor: 'green',
    }}
  />
);
