import type { Meta, StoryFn } from '@storybook/react';

import SatisfactionBox from 'components/Review/ReviewWriteModal/ServiceSection/SatisfactionBox';

export default {
  title: 'review/ReviewWriteModal/SurviceSection/SatisfactionBox',
  component: SatisfactionBox,
} as Meta<typeof SatisfactionBox>;

export const Primary: StoryFn<typeof SatisfactionBox> = () => (
  <SatisfactionBox />
);
