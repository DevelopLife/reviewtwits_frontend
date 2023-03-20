import { StoryFn } from '@storybook/react';
import { CreateProjectCard } from 'components/Project/Management/CreateProjectCard';

export default {
  title: 'project/management/CreateProjectCard',
  component: CreateProjectCard,
};

export const Primary: StoryFn<typeof CreateProjectCard> = () => (
  <CreateProjectCard
    styles={{
      color: 'gray_9',
      backgroundColor: '#D9D9D9',
    }}
  />
);
export const Hover: StoryFn<typeof CreateProjectCard> = () => (
  <CreateProjectCard
    styles={{
      color: 'gray_9',
      backgroundColor: '#D9D9D9',
    }}
  />
);
