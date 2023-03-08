import { Meta } from '@storybook/react';
import { ProjectPageButton } from 'components/Project/common/ProjectPageButton';

export default {
  title: 'ProjectPageButton',
  component: ProjectPageButton,
} as Meta;

export const primary = () => <ProjectPageButton>텍스트</ProjectPageButton>;
