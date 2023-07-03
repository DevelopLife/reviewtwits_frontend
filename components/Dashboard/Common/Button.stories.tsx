import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'project/common/Button',
  component: Button,
} as Meta;

export const primary: StoryFn<typeof Button> = () => <Button>텍스트</Button>;
