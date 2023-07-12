import { Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { ProjectPlans } from 'components/@feature/@shopping/Project/Plans/ProjectPlans';

export default {
  title: 'project/plans/ProjectPlans',
  component: ProjectPlans,
} as Meta;

export const primary = () => (
  <RecoilRoot>
    <ProjectPlans />
  </RecoilRoot>
);
