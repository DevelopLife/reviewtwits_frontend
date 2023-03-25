import { Meta, StoryFn } from '@storybook/react';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';

export default {
  title: 'project/create/ProjectCreateLayout',
  component: ProjectCreateLayout,
} as Meta;

export const primary: StoryFn<typeof ProjectCreateLayout> = () => (
  <ProjectCreateLayout
    title={'새로운 프로젝트 생성'}
    buttonText={'버튼 텍스트'}
    onClickButton={() => {
      ProjectCreateLayout;
    }}
  >
    텍스트
  </ProjectCreateLayout>
);
