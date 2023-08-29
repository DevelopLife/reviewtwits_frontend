import type { Meta, StoryFn } from '@storybook/react';
import type { ReviewCreateButtonProps } from 'components/Review/Common/ReviewCreateButton';

import ReviewCreateButton from 'components/Review/Common/ReviewCreateButton';

const props: ReviewCreateButtonProps = {
  color: 'primary',
  disabled: false,
  children: '작성 완료',
};

export default {
  title: 'review/Common/ReviewCreateButton',
  component: ReviewCreateButton,
} as Meta<typeof ReviewCreateButton>;

export const Active: StoryFn<typeof ReviewCreateButton> = () => (
  <ReviewCreateButton {...props} />
);

export const Disabled: StoryFn<typeof ReviewCreateButton> = () => (
  <ReviewCreateButton {...props} disabled />
);
