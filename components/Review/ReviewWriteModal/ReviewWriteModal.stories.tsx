import type { Meta, StoryFn } from '@storybook/react';
import ReviewWriteModal from 'components/Review/ReviewWriteModal/ReviewWriteModal';

export default {
  title: 'review/ReviewWriteModal/ReviewWriteModal',
  component: ReviewWriteModal,
} as Meta<typeof ReviewWriteModal>;

export const Primary: StoryFn<typeof ReviewWriteModal> = () => (
  <ReviewWriteModal productURL={''} title={''} />
);
