import { StoryFn, Meta } from '@storybook/react';
import SignUpCard from './SignUpCard';

export default {
  title: 'SignUp/SignUpCard',
  component: SignUpCard,
} as Meta<typeof SignUpCard>;

export const Basic: StoryFn<typeof SignUpCard> = () => <SignUpCard />;
