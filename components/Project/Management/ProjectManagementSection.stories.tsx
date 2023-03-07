import { ComponentMeta } from '@storybook/react';
import { ProjectManagementSection } from 'components/Project/Management/ProjectManagementSection';

export default {
  title: 'ProjectManagementSection',
  component: ProjectManagementSection,
} as ComponentMeta<typeof ProjectManagementSection>;

export const Primary = () => <ProjectManagementSection />;
