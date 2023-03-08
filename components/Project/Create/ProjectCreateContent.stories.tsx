import { Meta } from '@storybook/react';
import { ProjectCreateContent } from 'components/Project/Create/ProjectCreateContent';

export default {
  title: 'ProjectCreateContent',
  component: ProjectCreateContent,
} as Meta;

export const primary = () => (
  <ProjectCreateContent>텍스트</ProjectCreateContent>
);
