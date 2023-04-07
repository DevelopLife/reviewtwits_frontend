import type { Meta, StoryFn } from '@storybook/react';

import RatingBox from 'components/review/common/RatingBox';

const props = {
  setValue: () => {
    return;
  },
};

export default {
  title: 'review/common/RatingBox',
  component: RatingBox,
} as Meta<typeof RatingBox>;

export const Primary: StoryFn<typeof RatingBox> = () => (
  <RatingBox {...props} />
);
