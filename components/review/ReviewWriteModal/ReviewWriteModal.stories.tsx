import type { Meta, StoryFn } from '@storybook/react';
import ReviewWriteModal from 'components/review/ReviewWriteModal/ReviewWriteModal';

export default {
  title: 'review/ReviewWriteModal/ReviewWriteModal',
  component: ReviewWriteModal,
} as Meta<typeof ReviewWriteModal>;

export const Primary: StoryFn<typeof ReviewWriteModal> = () => (
  <ReviewWriteModal productURL={''} title={''} />
);
