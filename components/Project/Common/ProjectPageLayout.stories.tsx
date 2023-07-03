import { Meta, StoryFn } from '@storybook/react';

import { ProjectPageLayout } from 'components/Project/Common/ProjectPageLayout';

export default {
  title: 'project/common/ProjectPageLayout',
  component: ProjectPageLayout,
} as Meta;

export const primary: StoryFn<typeof ProjectPageLayout> = () => (
  <ProjectPageLayout>{''}</ProjectPageLayout>
);
