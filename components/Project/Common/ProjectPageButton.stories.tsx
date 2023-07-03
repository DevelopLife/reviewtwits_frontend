import { Meta, StoryFn } from '@storybook/react';
import { ProjectPageButton } from 'components/Project/Common/ProjectPageButton';

export default {
  title: 'project/common/ProjectPageButton',
  component: ProjectPageButton,
} as Meta;

export const primary: StoryFn<typeof ProjectPageButton> = () => (
  <ProjectPageButton>텍스트변경</ProjectPageButton>
);
