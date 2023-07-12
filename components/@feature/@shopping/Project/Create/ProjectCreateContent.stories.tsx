import { Meta, StoryFn } from '@storybook/react';
import { ProjectCreateContent } from 'components/@feature/@shopping/Project/Create/ProjectCreateContent';

export default {
  title: 'project/create/ProjectCreateContent',
  component: ProjectCreateContent,
} as Meta;

export const primary: StoryFn<typeof ProjectCreateContent> = () => (
  <ProjectCreateContent>children으로 넣어주세요</ProjectCreateContent>
);
