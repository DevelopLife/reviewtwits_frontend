import { ComponentMeta } from '@storybook/react';
import { ProjectManagementSection } from 'components/ProjectManagement/ProjectManagementSection';

export default {
  title: 'ProjectManagementSection',
  component: ProjectManagementSection,
} as ComponentMeta<typeof ProjectManagementSection>;

export const Primary = () => <ProjectManagementSection />;
