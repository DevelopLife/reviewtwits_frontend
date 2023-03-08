import { Meta } from '@storybook/react';
import { ProjectCreateForm } from 'components/Project/Create/ProjectCreateForm';

export default {
  title: 'ProjectCreateForm',
  component: ProjectCreateForm,
} as Meta;

export const primary = () => <ProjectCreateForm />;
