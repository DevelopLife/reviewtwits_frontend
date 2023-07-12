import { Meta, StoryFn } from '@storybook/react';
import { ProjectCreateForm } from 'components/@feature/@shopping/Project/Create/ProjectCreateForm';
import { RecoilRoot } from 'recoil';

export default {
  title: 'project/create/ProjectCreateForm',
  component: ProjectCreateForm,
} as Meta;

export const primary: StoryFn<typeof ProjectCreateForm> = () => (
  <RecoilRoot>
    <ProjectCreateForm />
  </RecoilRoot>
);
