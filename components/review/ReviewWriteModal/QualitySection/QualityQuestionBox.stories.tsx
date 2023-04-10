import type { Meta, StoryFn } from '@storybook/react';

import QualityQuestionBox from 'components/review/ReviewWriteModal/QualitySection/QualityQuestionBox';

export default {
  title: 'review/ReviewWriteModal/QualitySection/QualityQuestionBox',
  component: QualityQuestionBox,
} as Meta<typeof QualityQuestionBox>;

export const Primary: StoryFn<typeof QualityQuestionBox> = () => (
  <QualityQuestionBox />
);
