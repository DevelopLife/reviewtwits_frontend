import { Meta } from '@storybook/react';
import { ProjectCreateTabItem } from 'components/Project/Create/ProjectCreateTapItem';

export default {
  title: 'ProjectCreateTabItem',
  component: ProjectCreateTabItem,
} as Meta;

export const primary = () => <ProjectCreateTabItem isCurrent menu={'메뉴'} />;
export const seleted = () => (
  <ProjectCreateTabItem isCurrent={false} menu={'메뉴'} />
);
