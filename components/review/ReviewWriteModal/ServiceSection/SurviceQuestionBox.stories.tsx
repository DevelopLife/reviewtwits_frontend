import type { Meta, StoryFn } from '@storybook/react';

import ServiceQuestionBox from 'components/review/ReviewWriteModal/ServiceSection/ServiceQuestionBox';

export default {
  title: 'review/ReviewWriteModal/SurviceSection/ServiceQuestionBox',
  component: ServiceQuestionBox,
} as Meta<typeof ServiceQuestionBox>;

export const Primary: StoryFn<typeof ServiceQuestionBox> = () => (
  <ServiceQuestionBox />
);
