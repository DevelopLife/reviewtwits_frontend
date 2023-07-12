import type { StoryFn, Meta } from '@storybook/react';
import SignUpCard from 'components/@feature/@user/Signup/SignUpCard';

export default {
  title: 'SignUp/SignUpCard',
  component: SignUpCard,
} as Meta<typeof SignUpCard>;

export const Basic: StoryFn<typeof SignUpCard> = () => <SignUpCard />;
