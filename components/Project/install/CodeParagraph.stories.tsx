import { StoryFn } from '@storybook/react';
import CodeParagraph from 'components/Project/install/CodeParagraph';

export default {
  title: 'project/install/CodeParagraph',
  component: CodeParagraph,
};

export const primary: StoryFn = () => (
  <CodeParagraph text={'1. insert message'} code={'<div>insert code</div>'} />
);
