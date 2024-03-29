import type { Meta, StoryFn } from '@storybook/react';

import RatingBox from 'components/Review/Common/RatingBox';

const props = {
  setValue: () => {
    return;
  },
};

export default {
  title: 'review/Common/RatingBox',
  component: RatingBox,
} as Meta<typeof RatingBox>;

export const Primary: StoryFn<typeof RatingBox> = () => (
  <RatingBox {...props} />
);
