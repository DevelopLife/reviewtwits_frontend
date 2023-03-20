import type { Meta, StoryFn } from '@storybook/react';

import { ProjectCreateSelect } from 'components/Project/Create/ProjectCreateSelect';
import { RecoilRoot } from 'recoil';

export default {
  title: 'project/create/ProjectCreateSelect',
  component: ProjectCreateSelect,
} as Meta<typeof ProjectCreateSelect>;

const PROJECT_CATEGORIES = ['쇼핑', '영화', '게임'];

export const primary: StoryFn<typeof ProjectCreateSelect> = () => (
  <RecoilRoot>
    <ProjectCreateSelect formKey={'category'} options={PROJECT_CATEGORIES} />
  </RecoilRoot>
);
