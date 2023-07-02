import type { Meta, StoryFn } from '@storybook/react';
import type { ReviewCreateButtonProps } from 'components/Review/common/ReviewCreateButton';

import ReviewCreateButton from 'components/Review/common/ReviewCreateButton';

const props: ReviewCreateButtonProps = {
  color: 'primary',
  disabled: false,
  children: '작성 완료',
};

export default {
  title: 'review/common/ReviewCreateButton',
  component: ReviewCreateButton,
} as Meta<typeof ReviewCreateButton>;

export const Active: StoryFn<typeof ReviewCreateButton> = () => (
  <ReviewCreateButton {...props} />
);

export const Disabled: StoryFn<typeof ReviewCreateButton> = () => (
  <ReviewCreateButton {...props} disabled />
);
