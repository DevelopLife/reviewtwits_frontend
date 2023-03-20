import { Meta, StoryFn } from '@storybook/react';
import { ProjectCreateTabItem } from 'components/Project/Create/ProjectCreateTapItem';

export default {
  title: 'project/create/ProjectCreateTabItem',
  component: ProjectCreateTabItem,
} as Meta;

export const primary: StoryFn<typeof ProjectCreateTabItem> = () => (
  <ProjectCreateTabItem isCurrent menu={'메뉴'} />
);
export const seleted: StoryFn<typeof ProjectCreateTabItem> = () => (
  <ProjectCreateTabItem isCurrent={false} menu={'메뉴'} />
);
