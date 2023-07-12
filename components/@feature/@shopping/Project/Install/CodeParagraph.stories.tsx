import type { Meta, StoryFn } from '@storybook/react';
import CodeParagraph from 'components/@feature/@shopping/Project/Install/CodeParagraph';

export default {
  title: 'project/install/CodeParagraph',
  component: CodeParagraph,
} as Meta<typeof CodeParagraph>;

export const primary: StoryFn<typeof CodeParagraph> = () => (
  <CodeParagraph text={'1. insert message'} code={'<div>insert code</div>'} />
);