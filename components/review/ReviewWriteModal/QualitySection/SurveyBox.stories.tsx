import type { Meta, StoryFn } from '@storybook/react';

import SurveyBox from 'components/review/ReviewWriteModal/QualitySection/SurveyBox';

export default {
  title: 'review/ReviewWriteModal/QualitySection/SurveyBox',
  component: SurveyBox,
} as Meta<typeof SurveyBox>;

export const Primary: StoryFn<typeof SurveyBox> = () => <SurveyBox />;
