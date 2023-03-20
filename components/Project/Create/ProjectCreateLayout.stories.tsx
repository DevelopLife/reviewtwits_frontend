import { Meta } from '@storybook/react';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';

export default {
  title: 'ProjectCreateLayout',
  component: ProjectCreateLayout,
} as Meta;

export const primary = () => (
  <ProjectCreateLayout
    title={'새로운 프로젝트 생성'}
    buttonText={'버튼 텍스트'}
    onClickButton={() => {}}
  >
    텍스트
  </ProjectCreateLayout>
);
